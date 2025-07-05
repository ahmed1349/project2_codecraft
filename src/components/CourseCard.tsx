
import React from 'react';
import { Star, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  image: string;
  tags: string[];
  language: string;
}

interface CourseCardProps {
  course: Course;
  language: 'en' | 'ar';
}

const CourseCard: React.FC<CourseCardProps> = ({ course, language }) => {
  const isRTL = language === 'ar';

  const texts = {
    en: {
      by: 'by',
      reviews: 'reviews',
      enroll: 'Enroll Now',
      free: 'Free',
      levels: {
        Beginner: 'Beginner',
        Intermediate: 'Intermediate',
        Advanced: 'Advanced'
      }
    },
    ar: {
      by: 'بواسطة',
      reviews: 'تقييم',
      enroll: 'سجل الآن',
      free: 'مجاني',
      levels: {
        Beginner: 'مبتدئ',
        Intermediate: 'متوسط',
        Advanced: 'متقدم'
      }
    }
  };

  const currentTexts = texts[language];
  const levelColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700'
  };

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover group cursor-pointer ${isRTL ? 'rtl' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Level Badge */}
        <Badge className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} ${levelColors[course.level]}`}>
          {currentTexts.levels[course.level]}
        </Badge>

        {/* Price Badge */}
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1`}>
          {course.price === 0 ? (
            <span className="text-green-600 font-semibold">{currentTexts.free}</span>
          ) : (
            <div className="text-right rtl:text-left">
              <span className="text-brand-600 font-bold">${course.price}</span>
              {course.originalPrice && (
                <span className="text-gray-400 line-through text-sm ml-1 rtl:ml-0 rtl:mr-1">
                  ${course.originalPrice}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {course.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <User className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
          <span>{currentTexts.by} {course.instructor}</span>
        </div>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
            <span>{course.duration}</span>
          </div>
          
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1 rtl:mr-0 rtl:ml-1" />
            <span className="font-medium text-gray-700">{course.rating}</span>
            <span className="mx-1">•</span>
            <span>({course.reviews} {currentTexts.reviews})</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full btn-primary group-hover:shadow-lg transition-all duration-300"
          size="sm"
        >
          {currentTexts.enroll}
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
