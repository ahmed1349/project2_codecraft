
import React from 'react';

interface PricingProps {
  language: 'en' | 'ar';
}

const Pricing: React.FC<PricingProps> = ({ language }) => {
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen section-padding ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 gradient-text font-poppins">
          {language === 'en' ? 'Pricing Plans' : 'خطط الأسعار'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === 'en' 
            ? 'Choose the perfect plan for your learning journey. This page will feature detailed pricing cards with features comparison and subscription options.'
            : 'اختر الخطة المثالية لرحلة التعلم الخاصة بك. ستعرض هذه الصفحة بطاقات أسعار مفصلة مع مقارنة الميزات وخيارات الاشتراك.'
          }
        </p>
      </div>
    </div>
  );
};

export default Pricing;
