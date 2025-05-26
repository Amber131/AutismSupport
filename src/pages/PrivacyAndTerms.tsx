import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';

const PrivacyAndTerms: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'he' | 'en'>('he');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
  };

  const content = {
    he: {
      title: 'מדיניות פרטיות ותנאי שימוש',
      lastUpdated: 'עודכן לאחרונה',
      content: `השימוש באתר AzarLaLev מהווה הסכמה למדיניות הפרטיות ולתנאי השימוש שלהלן. האתר פועל בהתאם להוראות חוק הגנת הפרטיות, התשמ"א–1981, ולרגולציות הרלוונטיות בישראל. המשתמש מצהיר כי הוא מודע לכך שהשימוש באתר, לרבות הזנת פרטים או גלישה, מהווה הסכמה לתנאים אלו.

האתר רשאי לאסוף מידע אישי שמוזן באופן יזום על ידי המשתמש, וכן מידע טכני הנאסף אוטומטית במהלך הגלישה, לרבות כתובת IP, סוג מכשיר, דפדפן, ודפוסי שימוש. המידע נאסף לצורך תפעול שוטף של האתר, שיפור השירות, התאמת תכנים, ולצורכי סטטיסטיקה פנימית.

האתר שומר לעצמו את הזכות לשתף מידע עם צדדים שלישיים אך ורק במקרים בהם הדבר דרוש על פי חוק, לצורך מניעת תרמית, או כאשר ניתנה לכך הסכמה מפורשת מצד המשתמש. המידע נשמר בסביבה מאובטחת, תוך נקיטת אמצעי אבטחת מידע מקובלים, אולם האתר אינו אחראי למקרים של חדירה בלתי מורשית הנובעים מגורמים שאינם בשליטתו.

האתר עושה שימוש בקובצי עוגיות (Cookies) לצורכי תפעול, אבטחה, ניתוח פעילות והתאמה אישית של תכנים. המשתמש יכול לבחור לחסום את השימוש בעוגיות באמצעות הגדרות הדפדפן, אך פעולה זו עשויה לפגוע בחוויית השימוש באתר.

כל הזכויות בתכנים, בקוד, בעיצוב ובכל רכיב אחר באתר שמורות ל-AzarLaLev ואין להעתיק, להפיץ, לפרסם, לשכפל, או לעשות בהם כל שימוש מסחרי או ציבורי ללא קבלת אישור מראש ובכתב מבעלי האתר.

האתר נועד לספק מידע, הכוונה וכלים עזר להורים, ואינו מהווה תחליף לייעוץ מקצועי רפואי, טיפולי, משפטי או אחר. אין לראות באמור באתר התחייבות מכל סוג, והשימוש בו נעשה באחריות המשתמש בלבד.

האתר רשאי לשנות ולעדכן את התנאים והמדיניות ללא הודעה מוקדמת. השימוש באתר לאחר עדכון התנאים מהווה הסכמה מחודשת לאותם תנאים.

בכל שאלה או בקשה הנוגעת לפרטיות או לתנאים, ניתן לפנות לכתובת: azarlalev.support@gmail.com`,
    },
    en: {
      title: 'Privacy Policy and Terms of Use',
      lastUpdated: 'Last updated',
      content: `Using the AzarLaLev website constitutes agreement to the following Privacy Policy and Terms of Use. The site operates in accordance with the Privacy Protection Law, 5741-1981, and relevant regulations in Israel. The user declares awareness that use of the site, including data entry or browsing, constitutes agreement to these terms.

The site may collect personal information voluntarily provided by the user, as well as technical information automatically collected during browsing, including IP address, device type, browser, and usage patterns. Information is collected for ongoing site operation, service improvement, content customization, and internal statistics.

The site reserves the right to share information with third parties only when required by law, for fraud prevention, or with explicit user consent. Information is stored in a secure environment, employing accepted information security measures, however, the site is not responsible for unauthorized access resulting from factors beyond its control.

The site uses cookies for operation, security, activity analysis, and content personalization. Users can choose to block cookies through browser settings, but this may affect site usability.

All rights to content, code, design, and other site components are reserved to AzarLaLev. Copying, distributing, publishing, duplicating, or making any commercial or public use without prior written permission from site owners is prohibited.

The site is intended to provide information, guidance, and tools for parents, and does not substitute professional medical, therapeutic, legal, or other advice. Nothing on the site should be seen as any kind of commitment, and use is at the user's own responsibility.

The site may change and update terms and policies without prior notice. Site use after terms update constitutes renewed agreement to those terms.

For any questions or requests regarding privacy or terms, please contact: azarlalev.support@gmail.com`,
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-500 mr-3" />
                <h1 className="text-3xl font-bold text-gray-800">
                  {content[language].title}
                </h1>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                icon={<Globe className="h-4 w-4" />}
              >
                {language === 'he' ? 'English' : 'עברית'}
              </Button>
            </div>
            <p className="text-gray-600">
              {content[language].lastUpdated}: {new Date().toLocaleDateString(language === 'he' ? 'he-IL' : 'en-US')}
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm">
              <div style={{ whiteSpace: 'pre-wrap' }} className="text-gray-700">
                {content[language].content}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyAndTerms;