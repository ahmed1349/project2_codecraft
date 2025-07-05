
import React from 'react';

interface BlogProps {
  language: 'en' | 'ar';
}

const Blog: React.FC<BlogProps> = ({ language }) => {
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen section-padding ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 gradient-text font-poppins">
          {language === 'en' ? 'CodeCraft Blog' : 'مدونة CodeCraft'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === 'en' 
            ? 'Stay updated with the latest programming trends, tutorials, and industry insights. This page will feature blog posts, categories, and search functionality.'
            : 'ابق على اطلاع بأحدث اتجاهات البرمجة والدروس ورؤى الصناعة. ستتضمن هذه الصفحة منشورات المدونة والفئات ووظيفة البحث.'
          }
        </p>
      </div>
    </div>
  );
};

export default Blog;
