import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '../components/ui/Card';
import { AlertCircle, BookOpen, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import ReactPlayer from 'react-player';

const Concerns: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">חששות ראשוניים</h1>
            <p className="text-xl text-gray-600">מידע וכלים להורים המתחילים את המסע</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">סימנים מוקדמים</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-1 ml-2" />
                    <span>קושי ביצירת קשר עין</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-1 ml-2" />
                    <span>עיכוב בהתפתחות השפה</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-1 ml-2" />
                    <span>חוסר תגובה לשם</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">צעדים ראשונים</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-500 mt-1 ml-2" />
                    <span>פנייה לרופא הילדים</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-500 mt-1 ml-2" />
                    <span>תיעוד התנהגויות</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-500 mt-1 ml-2" />
                    <span>הפניה למכון להתפתחות הילד</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">סרטוני הדרכה</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=example1"
                    width="100%"
                    height="300px"
                    controls
                  />
                  <h3 className="mt-4 text-lg font-medium">זיהוי סימנים מוקדמים</h3>
                </div>
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=example2"
                    width="100%"
                    height="300px"
                    controls
                  />
                  <h3 className="mt-4 text-lg font-medium">שיחה עם אנשי מקצוע</h3>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="primary"
                size="lg"
                icon={<MessageCircle className="h-5 w-5" />}
                onClick={() => window.location.href = '/help'}
              >
                דברו עם המומחים שלנו
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Concerns;