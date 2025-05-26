import React from 'react';
import { Menu, X, Heart, HelpCircle } from 'lucide-react';
import { Link } from '../components/ui/Link';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <header className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-semibold text-gray-800">עזרללב AzarLaLev</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/resources" className="text-gray-600 hover:text-blue-500 transition-colors">
            {t('nav.resources')}
          </Link>
          <Link href="/tools" className="text-gray-600 hover:text-blue-500 transition-colors">
            {t('nav.tools')}
          </Link>
          <Link href="/community" className="text-gray-600 hover:text-blue-500 transition-colors">
            {t('nav.community')}
          </Link>
          <Link href="/rights" className="text-gray-600 hover:text-blue-500 transition-colors">
            {t('nav.rights')}
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">
            {t('nav.about')}
          </Link>
          <Link 
            href="/help" 
            className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            <span>{t('nav.help')}</span>
          </Link>
        </div>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              href="/resources" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              {t('nav.resources')}
            </Link>
            <Link 
              href="/tools" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              {t('nav.tools')}
            </Link>
            <Link 
              href="/community" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              {t('nav.community')}
            </Link>
            <Link 
              href="/rights" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              {t('nav.rights')}
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="/help" 
              className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors w-fit"
            >
              <HelpCircle className="h-4 w-4" />
              <span>{t('nav.help')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;