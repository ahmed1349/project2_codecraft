
import React, { useState } from 'react';
import { Menu, Search, User, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isRTL = language === 'ar';

  const navigation = {
    en: [
      { name: 'Home', href: '/' },
      { name: 'Courses', href: '/courses' },
      { name: 'About', href: '/about' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    ar: [
      { name: 'الرئيسية', href: '/' },
      { name: 'الدورات', href: '/courses' },
      { name: 'عن المنصة', href: '/about' },
      { name: 'الأسعار', href: '/pricing' },
      { name: 'المدونة', href: '/blog' },
      { name: 'تواصل معنا', href: '/contact' },
    ],
  };

  const texts = {
    en: {
      login: 'Sign In',
      signup: 'Get Started',
      search: 'Search courses...',
    },
    ar: {
      login: 'تسجيل الدخول',
      signup: 'ابدأ الآن',
      search: 'البحث في الدورات...',
    },
  };

  const currentNav = navigation[language];
  const currentTexts = texts[language];

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="text-xl font-bold gradient-text font-poppins">CodeCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {currentNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-600 ${
                  location.pathname === item.href
                    ? 'text-brand-600 border-b-2 border-brand-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{language === 'en' ? 'EN' : 'العربية'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
                <DropdownMenuItem onClick={() => onLanguageChange('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLanguageChange('ar')}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="w-4 h-4" />
            </Button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
              <Button variant="ghost" size="sm">
                {currentTexts.login}
              </Button>
              <Button size="sm" className="btn-primary">
                {currentTexts.signup}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              {currentNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-2 py-1 rounded-md transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-brand-600 bg-brand-50'
                      : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="justify-start">
                  {currentTexts.login}
                </Button>
                <Button size="sm" className="btn-primary justify-start">
                  {currentTexts.signup}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
