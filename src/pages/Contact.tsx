
import React from 'react';

interface ContactProps {
  language: 'en' | 'ar';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen section-padding ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 gradient-text font-poppins">
          {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === 'en' 
            ? 'Get in touch with our team. This page will feature a contact form, office locations, support information, and Google Maps integration.'
            : 'تواصل مع فريقنا. ستتضمن هذه الصفحة نموذج اتصال ومواقع المكاتب ومعلومات الدعم وتكامل خرائط Google.'
          }
        </p>
      </div>
    </div>
  );
};

export default Contact;
