import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Users, BookOpen, Shield, Globe } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'he' ? 'en' : 'he');
  };

  const content = {
    he: {
      title: 'אודות עזרללב',
      subtitle: 'אנחנו כאן כדי לתמוך, להדריך ולהעצים משפחות בדרכן המיוחדת',
      description: 'עזרללב נוסד מתוך הבנה עמוקה של האתגרים והצרכים של משפחות המתמודדות עם אוטיזם בישראל. המטרה שלנו היא ליצור מקום אחד שמרכז את כל המידע, הכלים והתמיכה הנחוצים למשפחות בכל שלב במסע שלהן.',
      mission: {
        title: 'המשימה שלנו',
        description: 'להנגיש מידע מקצועי ומהימן, ולספק תמיכה מקיפה למשפחות בדרכן המיוחדת'
      },
      community: {
        title: 'הקהילה שלנו',
        description: 'יצירת מרחב בטוח ותומך למשפחות לשתף, ללמוד ולצמוח יחד'
      },
      approach: {
        title: 'הגישה שלנו',
        description: 'שילוב של ידע מקצועי עם ניסיון מעשי, תוך התאמה אישית לכל משפחה'
      },
      values: {
        title: 'הערכים שלנו',
        professionalism: {
          title: 'מקצועיות',
          description: 'הקפדה על מידע מדויק ומבוסס מחקר, תוך שיתוף פעולה עם מומחים מובילים בתחום'
        },
        accessibility: {
          title: 'נגישות',
          description: 'הנגשת מידע וכלים בצורה ברורה ופשוטה, המותאמת לצרכים השונים של כל משפחה'
        },
        empathy: {
          title: 'אמפתיה',
          description: 'הבנה עמוקה של האתגרים הרגשיים והמעשיים, ויצירת מרחב מכיל ותומך'
        },
        collaboration: {
          title: 'שיתוף פעולה',
          description: 'עבודה משותפת עם ארגונים, מומחים ומשפחות ליצירת מענה מקיף ומשמעותי'
        }
      },
      joinUs: {
        title: 'הצטרפו אלינו',
        description: 'אנחנו מזמינים אתכם להיות חלק מהקהילה התומכת שלנו. יחד, נוכל ליצור עתיד טוב יותר עבור ילדינו.'
      }
    },
    en: {
      title: 'About AzarLaLev',
      subtitle: 'We are here to support, guide, and empower families on their unique journey',
      description: 'AzarLaLev was founded with a deep understanding of the challenges and needs of families dealing with autism in Israel. Our goal is to create a single place that centralizes all the information, tools, and support needed by families at every stage of their journey.',
      mission: {
        title: 'Our Mission',
        description: 'To make professional and reliable information accessible, and provide comprehensive support for families on their unique journey'
      },
      community: {
        title: 'Our Community',
        description: 'Creating a safe and supportive space for families to share, learn, and grow together'
      },
      approach: {
        title: 'Our Approach',
        description: 'Combining professional knowledge with practical experience, while providing personalized support for each family'
      },
      values: {
        title: 'Our Values',
        professionalism: {
          title: 'Professionalism',
          description: 'Ensuring accurate and research-based information, while collaborating with leading experts in the field'
        },
        accessibility: {
          title: 'Accessibility',
          description: 'Making information and tools available in a clear and simple way, adapted to each family\'s needs'
        },
        empathy: {
          title: 'Empathy',
          description: 'Deep understanding of emotional and practical challenges, creating an inclusive and supportive environment'
        },
        collaboration: {
          title: 'Collaboration',
          description: 'Working together with organizations, experts, and families to create comprehensive and meaningful solutions'
        }
      },
      joinUs: {
        title: 'Join Us',
        description: 'We invite you to be part of our supportive community. Together, we can create a better future for our children.'
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-blue-500 mr-3" />
                <h1 className="text-3xl font-bold text-gray-800">
                  {content[isRTL ? 'he' : 'en'].title}
                </h1>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                icon={<Globe className="h-4 w-4" />}
              >
                {isRTL ? 'English' : 'עברית'}
              </Button>
            </div>
            <p className="text-xl text-gray-600">
              {content[isRTL ? 'he' : 'en'].subtitle}
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {content[isRTL ? 'he' : 'en'].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-500 mr-2" />
                    <h3 className="text-xl font-semibold">
                      {content[isRTL ? 'he' : 'en'].mission.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {content[isRTL ? 'he' : 'en'].mission.description}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-semibold">
                      {content[isRTL ? 'he' : 'en'].community.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {content[isRTL ? 'he' : 'en'].community.description}
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-purple-500 mr-2" />
                    <h3 className="text-xl font-semibold">
                      {content[isRTL ? 'he' : 'en'].approach.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {content[isRTL ? 'he' : 'en'].approach.description}
                  </p>
                </Card>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  {content[isRTL ? 'he' : 'en'].values.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      {content[isRTL ? 'he' : 'en'].values.professionalism.title}
                    </h3>
                    <p className="text-gray-600">
                      {content[isRTL ? 'he' : 'en'].values.professionalism.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      {content[isRTL ? 'he' : 'en'].values.accessibility.title}
                    </h3>
                    <p className="text-gray-600">
                      {content[isRTL ? 'he' : 'en'].values.accessibility.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      {content[isRTL ? 'he' : 'en'].values.empathy.title}
                    </h3>
                    <p className="text-gray-600">
                      {content[isRTL ? 'he' : 'en'].values.empathy.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      {content[isRTL ? 'he' : 'en'].values.collaboration.title}
                    </h3>
                    <p className="text-gray-600">
                      {content[isRTL ? 'he' : 'en'].values.collaboration.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  {content[isRTL ? 'he' : 'en'].joinUs.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {content[isRTL ? 'he' : 'en'].joinUs.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;