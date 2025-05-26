import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StageSelector from '../components/StageSelector';
import EmotionalSupport from '../components/EmotionalSupport';
import { Heart, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from '../components/ui/Link';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  לא לבד במסע על הספקטרום
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  תמיכה, הכוונה, ומידע להורים לילדים עם אוטיזם בישראל בכל שלב במסע.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="shadow-md"
                  >
                    <Link href="#stage-selector" className="text-white">
                      התחל כאן
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                  >
                    <Link href="/resources" className="text-gray-700">
                      גישה למשאבים
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="הורה וילד משחקים יחד"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Highlights */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
              כאן בשבילכם בכל שלב
            </h2>
            
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
        
        {/* Testimonials */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
              הורים כמוכם מספרים
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-blue-500">ר</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">רונית, אמא לבן בן 6</h3>
                    <p className="text-gray-500 text-sm">תל אביב</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "האפליקציה הזאת עזרה לי למצוא את כל המידע שהייתי צריכה אחרי האבחון. פתאום הרגשתי שיש לי מפה ברורה להמשך הדרך."
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-green-500">י</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">יוסי, אבא לבת בת 4</h3>
                    <p className="text-gray-500 text-sm">ירושלים</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "היכולת להתחבר להורים אחרים שמבינים בדיוק מה אני עובר היא פשוט מתנה. לא הרגשתי לבד יותר."
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-purple-500">מ</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">מיכל, אמא לבן בן 8</h3>
                    <p className="text-gray-500 text-sm">חיפה</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "הטיפים להתמודדות עם התפרצויות חרדה עזרו לנו כל כך. סוף סוף מצאנו שיטות שעובדות לנו כמשפחה."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              התחילו את המסע שלכם היום
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              לא משנה באיזה שלב אתם נמצאים, אנחנו כאן לתמוך בכם בכל צעד בדרך.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="shadow-lg"
            >
              <Link href="#stage-selector" className="text-white">
                התחל עכשיו
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;