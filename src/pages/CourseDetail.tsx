
import React from 'react';
import { useParams } from 'react-router-dom';

interface CourseDetailProps {
  language: 'en' | 'ar';
}

const CourseDetail: React.FC<CourseDetailProps> = ({ language }) => {
  const { id } = useParams();
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen section-padding ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 gradient-text font-poppins">
          {language === 'en' ? 'Course Details' : 'تفاصيل الدورة'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === 'en' 
            ? `Course ID: ${id} - This detailed course page will be implemented with full course information, video previews, syllabus, instructor details, and enrollment options.`
            : `معرف الدورة: ${id} - ستتم برمجة صفحة تفاصيل الدورة الكاملة مع معلومات شاملة ومعاينة الفيديو والمنهج وتفاصيل المدرب وخيارات التسجيل.`
          }
        </p>
      </div>
    </div>
  );
};

export default CourseDetail;
