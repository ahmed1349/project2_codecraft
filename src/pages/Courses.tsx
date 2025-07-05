
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CoursesProps {
  language: 'en' | 'ar';
}

const Courses: React.FC<CoursesProps> = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Explore Our Courses',
      subtitle: 'Discover comprehensive programming courses designed to boost your skills',
      search: 'Search courses...',
      filters: {
        level: 'Level',
        category: 'Category',
        all: 'All',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        webDev: 'Web Development',
        dataScience: 'Data Science',
        mobile: 'Mobile Development',
        devOps: 'DevOps'
      },
      results: 'courses found',
      noResults: 'No courses found matching your criteria.'
    },
    ar: {
      title: 'استكشف دوراتنا',
      subtitle: 'اكتشف دورات البرمجة الشاملة المصممة لتعزيز مهاراتك',
      search: 'البحث في الدورات...',
      filters: {
        level: 'المستوى',
        category: 'الفئة',
        all: 'الكل',
        beginner: 'مبتدئ',
        intermediate: 'متوسط',
        advanced: 'متقدم',
        webDev: 'تطوير الويب',
        dataScience: 'علوم البيانات',
        mobile: 'تطوير الهاتف المحمول',
        devOps: 'DevOps'
      },
      results: 'دورة موجودة',
      noResults: 'لم يتم العثور على دورات تطابق معاييرك.'
    }
  };

  const currentContent = content[language];

  // Extended sample courses data
  const allCourses = [
    {
      id: '1',
      title: language === 'en' ? 'JavaScript Fundamentals' : 'أساسيات جافا سكريبت',
      instructor: language === 'en' ? 'Sarah Johnson' : 'سارة جونسون',
      duration: language === 'en' ? '12 hours' : '12 ساعة',
      level: 'Beginner' as const,
      rating: 4.8,
      reviews: 1250,
      price: 49,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      tags: ['JavaScript', 'Web Development'],
      language: 'en',
      category: 'webDev'
    },
    {
      id: '2',
      title: language === 'en' ? 'React Development Mastery' : 'إتقان تطوير React',
      instructor: language === 'en' ? 'Ahmad Hassan' : 'أحمد حسن',
      duration: language === 'en' ? '18 hours' : '18 ساعة',
      level: 'Intermediate' as const,
      rating: 4.9,
      reviews: 850,
      price: 79,
      originalPrice: 129,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      tags: ['React', 'Frontend'],
      language: 'en',
      category: 'webDev'
    },
    {
      id: '3',
      title: language === 'en' ? 'Python for Data Science' : 'Python لعلوم البيانات',
      instructor: language === 'en' ? 'Maria Garcia' : 'ماريا غارسيا',
      duration: language === 'en' ? '24 hours' : '24 ساعة',
      level: 'Advanced' as const,
      rating: 4.7,
      reviews: 920,
      price: 99,
      originalPrice: 149,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      tags: ['Python', 'Data Science'],
      language: 'en',
      category: 'dataScience'
    },
    {
      id: '4',
      title: language === 'en' ? 'Node.js Backend Development' : 'تطوير Node.js الخلفية',
      instructor: language === 'en' ? 'David Wilson' : 'ديفيد ويلسون',
      duration: language === 'en' ? '16 hours' : '16 ساعة',
      level: 'Intermediate' as const,
      rating: 4.6,
      reviews: 670,
      price: 69,
      originalPrice: 119,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      tags: ['Node.js', 'Backend'],
      language: 'en',
      category: 'webDev'
    },
    {
      id: '5',
      title: language === 'en' ? 'Mobile App Development with React Native' : 'تطوير تطبيقات الهاتف مع React Native',
      instructor: language === 'en' ? 'Lisa Chen' : 'ليسا تشين',
      duration: language === 'en' ? '22 hours' : '22 ساعة',
      level: 'Advanced' as const,
      rating: 4.8,
      reviews: 540,
      price: 89,
      originalPrice: 139,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      tags: ['React Native', 'Mobile'],
      language: 'en',
      category: 'mobile'
    },
    {
      id: '6',
      title: language === 'en' ? 'Introduction to Programming' : 'مقدمة في البرمجة',
      instructor: language === 'en' ? 'Omar Al-Said' : 'عمر السعيد',
      duration: language === 'en' ? '8 hours' : '8 ساعات',
      level: 'Beginner' as const,
      rating: 4.9,
      reviews: 1100,
      price: 0,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      tags: ['Programming', 'Fundamentals'],
      language: 'en',
      category: 'webDev'
    }
  ];

  // Filter courses based on search and filters
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-brand-600 to-purple-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            {currentContent.title}
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4`} />
              <Input
                type="text"
                placeholder={currentContent.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${isRTL ? 'pr-10' : 'pl-10'} h-11`}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder={currentContent.filters.level} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{currentContent.filters.all}</SelectItem>
                  <SelectItem value="beginner">{currentContent.filters.beginner}</SelectItem>
                  <SelectItem value="intermediate">{currentContent.filters.intermediate}</SelectItem>
                  <SelectItem value="advanced">{currentContent.filters.advanced}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={currentContent.filters.category} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{currentContent.filters.all}</SelectItem>
                  <SelectItem value="webDev">{currentContent.filters.webDev}</SelectItem>
                  <SelectItem value="dataScience">{currentContent.filters.dataScience}</SelectItem>
                  <SelectItem value="mobile">{currentContent.filters.mobile}</SelectItem>
                  <SelectItem value="devOps">{currentContent.filters.devOps}</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            <span className="font-medium">{filteredCourses.length}</span> {currentContent.results}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CourseCard course={course} language={language} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentContent.noResults}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'Try adjusting your search or filter criteria.' 
                  : 'حاول تعديل معايير البحث أو التصفية.'
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
