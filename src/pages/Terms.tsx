import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const Terms: React.FC = () => {
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
              <FileText className="h-8 w-8 text-blue-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">תנאי שימוש</h1>
            </div>
            <p className="text-gray-600">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">הסכמה לתנאים</h2>
              <p className="mb-6">
                השימוש באתר ובשירותים שלנו מהווה הסכמה לתנאי השימוש המפורטים להלן. אם אינכם מסכימים לתנאים אלה, אנא הימנעו משימוש באתר.
              </p>

              <h2 className="text-2xl font-semibold mb-4">השימוש באתר</h2>
              <p className="mb-6">
                האתר מיועד לספק מידע ותמיכה להורים לילדים על הספקטרום האוטיסטי. המידע באתר הוא כללי בלבד ואינו מהווה תחליף לייעוץ מקצועי.
              </p>

              <h2 className="text-2xl font-semibold mb-4">הרשמה וחשבון משתמש</h2>
              <ul className="list-disc list-inside mb-6">
                <li>עליכם לספק מידע מדויק ומלא בעת ההרשמה</li>
                <li>אתם אחראים לשמירה על סודיות פרטי החשבון שלכם</li>
                <li>אתם מתחייבים להודיע לנו על כל שימוש לא מורשה בחשבון שלכם</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">תוכן המשתמשים</h2>
              <p className="mb-6">
                בעת פרסום תוכן באתר:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>אתם מתחייבים שהתוכן אינו מפר זכויות של אחרים</li>
                <li>אתם מעניקים לנו רישיון להשתמש בתוכן</li>
                <li>אנו רשאים להסיר תוכן שמפר את התנאים</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">הגבלת אחריות</h2>
              <p className="mb-6">
                השירותים ניתנים "כפי שהם" (AS IS). איננו מתחייבים שהשירותים יהיו ללא הפרעות, טעויות או בעיות אבטחה.
              </p>

              <h2 className="text-2xl font-semibold mb-4">קניין רוחני</h2>
              <p className="mb-6">
                כל התכנים באתר, כולל טקסטים, תמונות, לוגואים וקוד, הם קניין רוחני שלנו או של מעניקי הרישיון שלנו.
              </p>

              <h2 className="text-2xl font-semibold mb-4">שינויים בתנאי השימוש</h2>
              <p className="mb-6">
                אנו שומרים לעצמנו את הזכות לשנות את תנאי השימוש בכל עת. שינויים יכנסו לתוקף מיד עם פרסומם באתר.
              </p>

              <h2 className="text-2xl font-semibold mb-4">דין חל וסמכות שיפוט</h2>
              <p className="mb-6">
                על תנאי שימוש אלה יחולו דיני מדינת ישראל. סמכות השיפוט הבלעדית תהיה לבתי המשפט המוסמכים בתל אביב-יפו.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;