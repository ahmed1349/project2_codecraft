
import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle, Users, BookOpen, Award, Clock } from 'lucide-react';

interface IndexProps {
  language: 'en' | 'ar';
}

const Index: React.FC<IndexProps> = ({ language }) => {
  const isRTL = language === 'ar';

  // Sample course data
  const sampleCourses = [
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
      language: 'en'
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
      language: 'en'
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
      language: 'en'
    }
  ];

  const content = {
    en: {
      features: {
        title: 'Why Choose CodeCraft?',
        subtitle: 'Everything you need to succeed in your programming journey',
        items: [
          {
            icon: Users,
            title: 'Expert Instructors',
            description: 'Learn from industry professionals with years of real-world experience'
          },
          {
            icon: BookOpen,
            title: 'Comprehensive Curriculum',
            description: 'Structured learning paths from beginner to advanced levels'
          },
          {
            icon: Award,
            title: 'Industry Certificates',
            description: 'Earn recognized certifications to boost your career prospects'
          },
          {
            icon: Clock,
            title: 'Flexible Learning',
            description: 'Study at your own pace with lifetime access to course materials'
          }
        ]
      },
      courses: {
        title: 'Featured Courses',
        subtitle: 'Start your coding journey with our most popular courses',
        viewAll: 'View All Courses'
      },
      testimonials: {
        title: 'What Our Students Say',
        subtitle: 'Join thousands of successful developers who transformed their careers',
        items: [
          {
            name: 'Alex Thompson',
            role: 'Software Engineer at Google',
            content: 'CodeCraft transformed my career. The courses are practical, well-structured, and taught by amazing instructors.',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
          },
          {
            name: 'Jessica Chen',
            role: 'Full Stack Developer',
            content: 'The hands-on projects and real-world examples made learning so much more effective. Highly recommended!',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
          },
          {
            name: 'Mohammed Ali',
            role: 'Data Scientist',
            content: 'Excellent platform with Arabic support. The instructors explain complex concepts in a very clear way.',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
          }
        ]
      }
    },
    ar: {
      features: {
        title: 'لماذا تختار CodeCraft؟',
        subtitle: 'كل ما تحتاجه للنجاح في رحلة البرمجة الخاصة بك',
        items: [
          {
            icon: Users,
            title: 'مدربون خبراء',
            description: 'تعلم من محترفي الصناعة مع سنوات من الخبرة العملية'
          },
          {
            icon: BookOpen,
            title: 'منهج شامل',
            description: 'مسارات تعليمية منظمة من المستوى المبتدئ إلى المتقدم'
          },
          {
            icon: Award,
            title: 'شهادات معتمدة',
            description: 'احصل على شهادات معترف بها لتعزيز فرصك المهنية'
          },
          {
            icon: Clock,
            title: 'تعلم مرن',
            description: 'ادرس بوتيرتك الخاصة مع وصول مدى الحياة للمواد الدراسية'
          }
        ]
      },
      courses: {
        title: 'الدورات المميزة',
        subtitle: 'ابدأ رحلة البرمجة مع دوراتنا الأكثر شعبية',
        viewAll: 'عرض جميع الدورات'
      },
      testimonials: {
        title: 'ماذا يقول طلابنا',
        subtitle: 'انضم إلى آلاف المطورين الناجحين الذين غيروا مسيرتهم المهنية',
        items: [
          {
            name: 'أليكس طومسون',
            role: 'مهندس برمجيات في Google',
            content: 'CodeCraft غيرت مسيرتي المهنية. الدورات عملية ومنظمة جيداً ويدرسها مدربون رائعون.',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
          },
          {
            name: 'جيسيكا تشين',
            role: 'مطور Full Stack',
            content: 'المشاريع العملية والأمثلة الواقعية جعلت التعلم أكثر فعالية. أنصح بها بشدة!',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
          },
          {
            name: 'محمد علي',
            role: 'عالم بيانات',
            content: 'منصة ممتازة مع دعم اللغة العربية. المدربون يشرحون المفاهيم المعقدة بطريقة واضحة جداً.',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
          }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className={`${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <HeroSection language={language} />

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              {currentContent.features.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.features.items.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              {currentContent.courses.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {currentContent.courses.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sampleCourses.map((course, index) => (
              <div
                key={course.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard course={course} language={language} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
              {currentContent.courses.viewAll}
              <ArrowDown className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} rotate-[-90deg] ${isRTL ? 'rotate-90' : ''}`} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-brand-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              {currentContent.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 rtl:mr-0 rtl:ml-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            {language === 'en' ? 'Ready to Start Your Journey?' : 'مستعد لبدء رحلتك؟'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'en' 
              ? 'Join thousands of students and transform your career with our premium programming courses.' 
              : 'انضم إلى آلاف الطلاب وحول مسيرتك المهنية مع دوراتنا المتميزة في البرمجة.'
            }
          </p>
          <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            {language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
