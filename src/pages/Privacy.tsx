import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">מדיניות פרטיות</h1>
            </div>
            <p className="text-gray-600">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">איסוף מידע</h2>
              <p className="mb-6">
                אנו אוספים מידע אישי שאתם מספקים לנו באופן ישיר, כגון:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>שם מלא</li>
                <li>כתובת דואר אלקטרוני</li>
                <li>מידע על ילדכם (גיל, מצב רפואי)</li>
                <li>מידע נוסף שאתם בוחרים לשתף</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">שימוש במידע</h2>
              <p className="mb-6">
                אנו משתמשים במידע שנאסף כדי:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>לספק לכם את השירותים שלנו</li>
                <li>לשפר את השירותים שלנו</li>
                <li>ליצור איתכם קשר בנוגע לשירותים שלנו</li>
                <li>לשלוח לכם עדכונים ומידע רלוונטי</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">אבטחת מידע</h2>
              <p className="mb-6">
                אנו נוקטים באמצעי אבטחה מתקדמים כדי להגן על המידע האישי שלכם. עם זאת, שום שיטת העברה באינטרנט או אחסון אלקטרוני אינה בטוחה ב-100%.
              </p>

              <h2 className="text-2xl font-semibold mb-4">שיתוף מידע</h2>
              <p className="mb-6">
                אנו לא משתפים את המידע האישי שלכם עם צדדים שלישיים, למעט במקרים הבאים:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>בהסכמתכם המפורשת</li>
                <li>כאשר נדרש על פי חוק</li>
                <li>עם ספקי שירות שעובדים איתנו</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">זכויותיכם</h2>
              <p className="mb-6">
                יש לכם זכות:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>לגשת למידע האישי שלכם</li>
                <li>לתקן מידע לא מדויק</li>
                <li>למחוק את המידע שלכם</li>
                <li>להתנגד לעיבוד המידע שלכם</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">יצירת קשר</h2>
              <p className="mb-6">
                אם יש לכם שאלות לגבי מדיניות הפרטיות שלנו, אתם מוזמנים ליצור איתנו קשר.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;