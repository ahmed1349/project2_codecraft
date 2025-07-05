
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  language: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      description: 'Empowering developers worldwide with premium programming education and hands-on learning experiences.',
      quickLinks: {
        title: 'Quick Links',
        links: [
          { name: 'About Us', href: '/about' },
          { name: 'Courses', href: '/courses' },
          { name: 'Pricing', href: '/pricing' },
          { name: 'Blog', href: '/blog' },
        ]
      },
      courses: {
        title: 'Popular Courses',
        links: [
          { name: 'JavaScript Fundamentals', href: '/courses/javascript' },
          { name: 'React Development', href: '/courses/react' },
          { name: 'Python for Beginners', href: '/courses/python' },
          { name: 'Data Structures', href: '/courses/algorithms' },
        ]
      },
      support: {
        title: 'Support',
        links: [
          { name: 'Help Center', href: '/help' },
          { name: 'Contact Us', href: '/contact' },
          { name: 'Privacy Policy', href: '/privacy' },
          { name: 'Terms of Service', href: '/terms' },
        ]
      },
      newsletter: {
        title: 'Stay Updated',
        description: 'Get the latest courses and programming tips delivered to your inbox.',
        placeholder: 'Enter your email',
        button: 'Subscribe'
      },
      social: {
        title: 'Follow Us'
      },
      copyright: '© 2024 CodeCraft. All rights reserved.',
      madeWith: ''
    },
    ar: {
      description: 'تمكين المطورين في جميع أنحاء العالم من خلال تعليم البرمجة المتميز والتجارب التعليمية العملية.',
      quickLinks: {
        title: 'روابط سريعة',
        links: [
          { name: 'عن المنصة', href: '/about' },
          { name: 'الدورات', href: '/courses' },
          { name: 'الأسعار', href: '/pricing' },
          { name: 'المدونة', href: '/blog' },
        ]
      },
      courses: {
        title: 'الدورات الشائعة',
        links: [
          { name: 'أساسيات جافا سكريبت', href: '/courses/javascript' },
          { name: 'تطوير React', href: '/courses/react' },
          { name: 'Python للمبتدئين', href: '/courses/python' },
          { name: 'هياكل البيانات', href: '/courses/algorithms' },
        ]
      },
      support: {
        title: 'الدعم',
        links: [
          { name: 'مركز المساعدة', href: '/help' },
          { name: 'تواصل معنا', href: '/contact' },
          { name: 'سياسة الخصوصية', href: '/privacy' },
          { name: 'شروط الخدمة', href: '/terms' },
        ]
      },
      newsletter: {
        title: 'ابق على اطلاع',
        description: 'احصل على أحدث الدورات ونصائح البرمجة في صندوق الوارد الخاص بك.',
        placeholder: 'أدخل بريدك الإلكتروني',
        button: 'اشتراك'
      },
      social: {
        title: 'تابعنا'
      },
      copyright: '© 2024 CodeCraft. جميع الحقوق محفوظة.',
      madeWith: ''
    }
  };

  const currentContent = content[language];

  return (
    <footer 
      className={`bg-gray-900 text-white ${isRTL ? 'rtl' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold font-poppins">CodeCraft</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {currentContent.description}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">{currentContent.social.title}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.745.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{currentContent.quickLinks.title}</h4>
            <ul className="space-y-2">
              {currentContent.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-semibold mb-4">{currentContent.courses.title}</h4>
            <ul className="space-y-2">
              {currentContent.courses.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{currentContent.support.title}</h4>
            <ul className="space-y-2">
              {currentContent.support.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">{currentContent.copyright}</p>
            <p className="text-gray-400 text-sm">{currentContent.madeWith}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
