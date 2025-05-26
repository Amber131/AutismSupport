import React from 'react';
import { Menu, X, Heart, HelpCircle } from 'lucide-react';
import { Link } from '../components/ui/Link';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-semibold text-gray-800">ספקטרום תומך</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/resources" className="text-gray-600 hover:text-blue-500 transition-colors">
            משאבים
          </Link>
          <Link href="/tools" className="text-gray-600 hover:text-blue-500 transition-colors">
            כלים יומיומיים
          </Link>
          <Link href="/community" className="text-gray-600 hover:text-blue-500 transition-colors">
            קהילה
          </Link>
          <Link href="/rights" className="text-gray-600 hover:text-blue-500 transition-colors">
            זכויות והטבות
          </Link>
          <Link 
            href="/help" 
            className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            <span>עזרה</span>
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
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              href="/resources" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              משאבים
            </Link>
            <Link 
              href="/tools" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              כלים יומיומיים
            </Link>
            <Link 
              href="/community" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              קהילה
            </Link>
            <Link 
              href="/rights" 
              className="text-gray-600 hover:text-blue-500 transition-colors py-2"
            >
              זכויות והטבות
            </Link>
            <Link 
              href="/help" 
              className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors w-fit"
            >
              <HelpCircle className="h-4 w-4" />
              <span>עזרה</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;