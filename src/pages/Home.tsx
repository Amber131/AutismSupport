import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StageSelector from '../components/StageSelector';
import EmotionalSupport from '../components/EmotionalSupport';
import { Heart, BookOpen, Users, Award, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from '../components/ui/Link';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'he' ? 'en' : 'he');
  };

  const isRTL = i18n.language === 'he';

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        {/* Language Switcher */}
        <div className="fixed top-20 right-4 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            icon={<Globe className="h-4 w-4" />}
          >
            {isRTL ? 'English' : 'עברית'}
          </Button>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {t('home.title')}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {t('home.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="shadow-md"
                  >
                    <Link href="#stage-selector" className="text-white">
                      {t('home.getStarted')}
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                  >
                    <Link href="/resources" className="text-gray-700">
                      {t('home.resources')}
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg"
                  alt="Parent and child playing together"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Highlights */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-white rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-sm">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">תמיכה רגשית</h3>
                <p className="text-gray-600">
                  תמיכה וחיזוק בימים הקשים, חגיגת ההצלחות בימים הטובים.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-white rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-sm">
                  <BookOpen className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">מידע מקצועי</h3>
                <p className="text-gray-600">
                  הנגשת מידע מקצועי ומהימן בשפה פשוטה וברורה.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-white rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-sm">
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">קהילה תומכת</h3>
                <p className="text-gray-600">
                  חיבור להורים אחרים המתמודדים עם אתגרים דומים.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-white rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-sm">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">זכויות והטבות</h3>
                <p className="text-gray-600">
                  מידע מקיף על הזכויות וההטבות המגיעות לילדכם ולמשפחתכם.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stage Selector */}
        <section id="stage-selector" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <StageSelector />
          </div>
        </section>
        
        {/* Emotional Support Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <EmotionalSupport />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;