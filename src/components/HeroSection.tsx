
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: 'en' | 'ar';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      badge: 'Premium Programming Education',
      title: 'Master Programming Skills with',
      titleHighlight: 'Expert-Led Courses',
      subtitle: 'Join thousands of developers who have transformed their careers through our comprehensive, hands-on programming courses. From beginner to expert, we\'ve got you covered.',
      primaryCTA: 'Start Learning Now',
      secondaryCTA: 'Explore Courses',
      features: [
        '50+ Expert Instructors',
        '200+ Hours of Content',
        'Industry Certifications',
        'Lifetime Access'
      ],
      stats: [
        { number: '50K+', label: 'Students' },
        { number: '200+', label: 'Courses' },
        { number: '95%', label: 'Success Rate' },
        { number: '24/7', label: 'Support' }
      ]
    },
    ar: {
      badge: 'تعليم البرمجة المتميز',
      title: 'أتقن مهارات البرمجة مع',
      titleHighlight: 'دورات من الخبراء',
      subtitle: 'انضم إلى آلاف المطورين الذين غيروا مسيرتهم المهنية من خلال دوراتنا الشاملة والعملية في البرمجة. من المبتدئ إلى الخبير، نحن نغطي كل شيء.',
      primaryCTA: 'ابدأ التعلم الآن',
      secondaryCTA: 'استكشف الدورات',
      features: [
        '50+ مدرب خبير',
        '200+ ساعة محتوى',
        'شهادات معتمدة',
        'وصول مدى الحياة'
      ],
      stats: [
        { number: '50ألف+', label: 'طالب' },
        { number: '200+', label: 'دورة' },
        { number: '95%', label: 'معدل النجاح' },
        { number: '24/7', label: 'الدعم' }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isRTL ? 'rtl' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-200 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-brand-400 rounded-full opacity-70 animate-bounce" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2 animate-pulse" />
              {currentContent.badge}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
              {currentContent.title}
              <br />
              <span className="gradient-text">{currentContent.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {currentContent.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                {currentContent.primaryCTA}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-brand-200 hover:bg-brand-50">
                {currentContent.secondaryCTA}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in">
            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-r from-brand-600 to-purple-600 rounded-lg p-6 text-white mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-white/30 rounded-full" />
                    <div className="w-3 h-3 bg-white/30 rounded-full" />
                    <div className="w-3 h-3 bg-white/30 rounded-full" />
                  </div>
                  <span className="text-sm opacity-80">CodeCraft IDE</span>
                </div>
                <div className="font-mono text-sm">
                  <div className="text-purple-200">function</div>
                  <div className="text-white">  learnProgramming() {`{`}</div>
                  <div className="text-blue-200 ml-4">    return 'success';</div>
                  <div className="text-white">  {`}`}</div>
                </div>
              </div>
              
              {/* Course Preview */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                    <span className="text-brand-600 font-semibold">JS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">JavaScript Mastery</h3>
                    <p className="text-sm text-gray-500">12 hours • Intermediate</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg h-2">
                  <div className="bg-brand-500 h-2 rounded-lg w-3/4" />
                </div>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Progress: 75%</span>
                  <span>9 of 12 lessons</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce">
              <div className="text-2xl font-bold text-brand-600">4.9★</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 animate-slide-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {currentContent.stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold gradient-text font-poppins">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-brand-600" />
      </div>
    </section>
  );
};

export default HeroSection;
