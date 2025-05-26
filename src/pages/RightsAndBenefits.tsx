import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from '../components/ui/Link';
import { Award, FileText, HelpCircle, Download, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const rightsList = [
  {
    id: 'national-insurance',
    title: 'ביטוח לאומי',
    description: 'זכויות והטבות מהמוסד לביטוח לאומי',
    benefits: [
      {
        title: 'קצבת ילד נכה',
        description: 'קצבה חודשית להורים לילדים עם אוטיזם עד גיל 18.',
        eligibility: 'ילדים המאובחנים על הספקטרום האוטיסטי בגילאי 3-18.',
        howToApply: 'יש להגיש טופס תביעה לקצבת ילד נכה בסניף הביטוח הלאומי באזור מגוריכם, בצירוף אבחון רשמי מרופא מומחה.',
        formLink: 'https://www.btl.gov.il/טפסים%20ואישורים/Documents/t7824.pdf'
      },
      {
        title: 'גמלת ניידות',
        description: 'סיוע במימון רכב, אביזרי ניידות, או הוצאות נסיעה.',
        eligibility: 'ילדים מגיל 3 ומעלה עם מוגבלות המשפיעה על ניידות.',
        howToApply: 'יש לגשת לוועדה רפואית של משרד הבריאות ולאחר מכן להגיש בקשה לביטוח הלאומי.',
        formLink: 'https://www.btl.gov.il/טפסים%20ואישורים/Documents/t8200.pdf'
      },
      {
        title: 'מענק לימודים',
        description: 'מענק שנתי לרכישת ציוד לימודי בתחילת שנת הלימודים.',
        eligibility: 'משולם אוטומטית להורים המקבלים קצבת ילד נכה.',
        howToApply: 'אין צורך בהגשת בקשה אם אתם כבר מקבלים קצבת ילד נכה.',
        formLink: ''
      }
    ]
  },
  {
    id: 'health',
    title: 'בריאות',
    description: 'זכויות במערכת הבריאות וקופות החולים',
    benefits: [
      {
        title: 'סל שירותים לילדים עם אוטיזם',
        description: 'טיפולים פרא-רפואיים כגון ריפוי בעיסוק, קלינאות תקשורת, פיזיותרפיה ועוד.',
        eligibility: 'ילדים עם אבחנה של אוטיזם בכל הגילאים.',
        howToApply: 'יש להגיש את האבחון לקופת החולים ולבקש הפניה לטיפולים הנדרשים.',
        formLink: ''
      },
      {
        title: 'החזר בגין טיפולים פרטיים',
        description: 'החזר כספי עבור טיפולים שנעשו באופן פרטי.',
        eligibility: 'משתנה בין קופות החולים ותלוי בתכנית הביטוח המשלים.',
        howToApply: 'יש לפנות לקופת החולים עם קבלות וסיכומי טיפול.',
        formLink: ''
      },
      {
        title: 'מימון אבחונים',
        description: 'כיסוי הוצאות אבחון אוטיזם.',
        eligibility: 'כל הילדים דרך קופות החולים או מרכזי התפתחות הילד.',
        howToApply: 'יש לפנות לרופא הילדים לקבלת הפניה למכון להתפתחות הילד.',
        formLink: ''
      }
    ]
  },
  {
    id: 'education',
    title: 'חינוך',
    description: 'זכויות במערכת החינוך',
    benefits: [
      {
        title: 'סייעת אישית',
        description: 'ליווי של סייעת אישית במסגרת החינוכית.',
        eligibility: 'ילדים עם אוטיזם המשולבים במסגרות חינוך רגילות.',
        howToApply: 'יש לפנות לוועדת זכאות ואפיון במשרד החינוך באמצעות בית הספר.',
        formLink: 'https://parents.education.gov.il/prhnet/special-education/committee/eligibility-committee'
      },
      {
        title: 'תכנית חינוכית יחידנית (תח"י)',
        description: 'תכנית לימודים מותאמת אישית לצרכי הילד.',
        eligibility: 'כל ילד עם צרכים מיוחדים במערכת החינוך.',
        howToApply: 'יש לבקש מהצוות החינוכי ליזום תכנית אישית.',
        formLink: ''
      },
      {
        title: 'הנגשה במבחנים ובחינות',
        description: 'התאמות בדרכי היבחנות כגון הארכת זמן, חדר נפרד, או הקראת שאלון.',
        eligibility: 'תלמידים עם אוטיזם בבתי ספר.',
        howToApply: 'יש לפנות ליועצת בית הספר עם המלצות אבחון מתאימות.',
        formLink: ''
      }
    ]
  },
  {
    id: 'tax',
    title: 'מיסוי ותעסוקה',
    description: 'הטבות מס ותעסוקה',
    benefits: [
      {
        title: 'נקודות זיכוי במס הכנסה',
        description: 'הקלה בתשלומי מס הכנסה להורים לילדים עם אוטיזם.',
        eligibility: 'הורים עובדים לילדים עם אוטיזם.',
        howToApply: 'יש להגיש בקשה לפקיד השומה עם אישורים רפואיים מתאימים.',
        formLink: 'https://www.gov.il/he/departments/publications/reports/taxes-benefits-special-child'
      },
      {
        title: 'פטור ממס על קופות גמל',
        description: 'אפשרות למשיכת כספים מקופת גמל ללא מס בתנאים מסוימים.',
        eligibility: 'הורים לילדים עם אוטיזם בתנאים מסוימים.',
        howToApply: 'יש לפנות לקופת הגמל בצירוף אישורים רפואיים.',
        formLink: ''
      },
      {
        title: 'ימי מחלה לטיפול בילד',
        description: 'זכאות להיעדרות מהעבודה לצורך טיפול בילד עם מוגבלות.',
        eligibility: 'הורים עובדים לילדים עם אוטיזם.',
        howToApply: 'יש להגיש אישורים למעסיק בהתאם לנהלי מקום העבודה.',
        formLink: ''
      }
    ]
  }
];

const RightsAndBenefits: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedBenefits, setExpandedBenefits] = useState<{[key: string]: boolean}>({});
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleCategory = (categoryId: string) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };
  
  const toggleBenefit = (benefitId: string) => {
    setExpandedBenefits({
      ...expandedBenefits,
      [benefitId]: !expandedBenefits[benefitId]
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">
                זכויות והטבות
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mb-6">
              מדריך מקיף לזכויות, הטבות, ושירותים המגיעים לילדים עם אוטיזם ולמשפחותיהם בישראל.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <HelpCircle className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="mr-3">
                  <p className="text-sm text-yellow-700">
                    המידע המוצג כאן הוא כללי בלבד. הזכויות והטבות עשויות להשתנות בהתאם לנסיבות האישיות ולשינויי חקיקה. מומלץ תמיד לבדוק את המידע העדכני ביותר מול הגורמים הרשמיים.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rights Categories */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">קטגוריות זכויות</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {rightsList.map((category) => (
                  <Card key={category.id} className="hover:shadow-md transition-shadow">
                    <div 
                      className="p-5 cursor-pointer"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <h3 className="text-lg font-medium text-gray-800">{category.title}</h3>
                      <p className="text-gray-600 mt-1">{category.description}</p>
                      <div className="mt-4 flex justify-end">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-blue-500"
                        >
                          {expandedCategories.includes(category.id) ? 'הסתר' : 'הצג'} זכויות
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Rights Details */}
            <div className="space-y-8">
              {rightsList.map((category) => (
                expandedCategories.includes(category.id) && (
                  <div key={`details-${category.id}`} className="border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                      {category.title}
                    </h2>
                    
                    <div className="space-y-4">
                      {category.benefits.map((benefit, index) => (
                        <Card key={`${category.id}-benefit-${index}`} className="overflow-visible">
                          <div 
                            className="p-5 cursor-pointer flex justify-between items-center"
                            onClick={() => toggleBenefit(`${category.id}-${index}`)}
                          >
                            <h3 className="text-lg font-medium text-gray-800">{benefit.title}</h3>
                            {expandedBenefits[`${category.id}-${index}`] ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          
                          {expandedBenefits[`${category.id}-${index}`] && (
                            <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                              <p className="text-gray-600 mb-4">{benefit.description}</p>
                              
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-700">זכאות</h4>
                                  <p className="text-gray-600">{benefit.eligibility}</p>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-700">איך מגישים בקשה</h4>
                                  <p className="text-gray-600">{benefit.howToApply}</p>
                                </div>
                                
                                {benefit.formLink && (
                                  <div className="pt-2">
                                    <Link 
                                      href={benefit.formLink} 
                                      className="inline-flex items-center text-blue-500 hover:text-blue-700"
                                      external
                                    >
                                      <Download className="h-4 w-4 mr-1" />
                                      הורד טופס בקשה
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
        
        {/* Rights Checklist */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-8">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">רשימת בדיקה למיצוי זכויות</h2>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-700 mb-6">
                השתמשו ברשימה הבאה כדי לעקוב אחר תהליך מיצוי הזכויות שלכם. סמנו את הפעולות שכבר ביצעתם.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="checklist-1"
                    className="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="checklist-1" className="mr-3 text-gray-700">
                    <span className="font-medium block">הגשת בקשה לקצבת ילד נכה בביטוח הלאומי</span>
                    <span className="text-gray-500 text-sm">מומלץ להגיש בהקדם האפשרי לאחר קבלת האבחון</span>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="checklist-2"
                    className="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="checklist-2" className="mr-3 text-gray-700">
                    <span className="font-medium block">פנייה לקופת החולים לקבלת טיפולים</span>
                    <span className="text-gray-500 text-sm">הגישו את האבחון ובקשו הפניות לטיפולים המגיעים במסגרת סל הבריאות</span>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="checklist-3"
                    className="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="checklist-3" className="mr-3 text-gray-700">
                    <span className="font-medium block">פנייה למשרד החינוך / ועדת זכאות ואפיון</span>
                    <span className="text-gray-500 text-sm">לקבלת סייעת או שילוב במסגרת מתאימה</span>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="checklist-4"
                    className="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="checklist-4" className="mr-3 text-gray-700">
                    <span className="font-medium block">הגשת בקשה לנקודות זיכוי במס הכנסה</span>
                    <span className="text-gray-500 text-sm">פנו לפקיד השומה באזור מגוריכם</span>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="checklist-5"
                    className="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="checklist-5" className="mr-3 text-gray-700">
                    <span className="font-medium block">בדיקת זכאות להנחה בארנונה</span>
                    <span className="text-gray-500 text-sm">פנו לרשות המקומית באזור מגוריכם</span>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="checklist-6"
                    className="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="checklist-6" className="mr-3 text-gray-700">
                    <span className="font-medium block">פנייה לעמותות תמיכה</span>
                    <span className="text-gray-500 text-sm">עמותות כמו אלו"ט יכולות לספק תמיכה נוספת ומידע</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-8 text-right">
                <Button variant="primary">
                  שמור רשימת בדיקה
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Get Help */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              צריכים עזרה במיצוי זכויות?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              מתקשים לנווט בין הבירוקרטיה והטפסים? אנחנו כאן לעזור לכם להבין ולממש את הזכויות המגיעות לכם.
            </p>
            <Button 
              variant="primary"
              size="lg"
            >
              יצירת קשר עם יועץ זכויות
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RightsAndBenefits;