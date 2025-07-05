
import React from 'react';

interface AboutProps {
  language: 'en' | 'ar';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen section-padding ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 gradient-text font-poppins">
          {language === 'en' ? 'About CodeCraft' : 'عن CodeCraft'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === 'en' 
            ? 'Learn about our mission, vision, team, and achievements. This page will feature our story, instructor profiles, company milestones, and values.'
            : 'تعرف على مهمتنا ورؤيتنا وفريقنا وإنجازاتنا. ستعرض هذه الصفحة قصتنا وملفات المدربين ومعالم الشركة وقيمنا.'
          }
        </p>
      </div>
    </div>
  );
};

export default About;
