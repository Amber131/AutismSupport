import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from '../components/ui/Link';
import { Clock, Activity, ThumbsUp, Zap, AlertCircle, CheckCircle, X, Download, Bookmark, BookOpen } from 'lucide-react';

interface ToolCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface Tool {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  tags: string[];
  steps?: string[];
  downloadLink?: string;
  printable?: boolean;
  bookmarked?: boolean;
}

const toolCategories: ToolCategory[] = [
  {
    id: 'sensory',
    name: 'כלים סנסוריים',
    description: 'כלים לוויסות חושי והרגעה',
    icon: <Activity className="h-6 w-6 text-purple-500" />,
  },
  {
    id: 'communication',
    name: 'תקשורת',
    description: 'כלים לשיפור יכולות תקשורת',
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
  },
  {
    id: 'routine',
    name: 'שגרה וסדר יום',
    description: 'כלים ליצירת שגרה יציבה',
    icon: <Clock className="h-6 w-6 text-green-500" />,
  },
  {
    id: 'crisis',
    name: 'התמודדות עם משברים',
    description: 'כלים להתמודדות עם התפרצויות ומצבי קיצון',
    icon: <AlertCircle className="h-6 w-6 text-red-500" />,
  },
  {
    id: 'reinforcement',
    name: 'חיזוקים ותגמולים',
    description: 'כלים לחיזוק התנהגויות חיוביות',
    icon: <ThumbsUp className="h-6 w-6 text-orange-500" />,
  },
];

const tools: Tool[] = [
  {
    id: 'tool-1',
    title: 'לוח תמונות לתקשורת',
    description: 'לוח תמונות מודפס לשיפור התקשורת עם ילדים מתקשים מילולית.',
    categoryId: 'communication',
    tags: ['תקשורת', 'עזרים ויזואליים'],
    steps: [
      'הדפיסו את הלוח על דף A4 או A3.',
      'ניתן לנייל את הדף או להכניסו לשמרדף.',
      'הציגו לילד את הלוח והדגימו כיצד להשתמש בו לבקשות.',
      'התחילו עם מספר קטן של אפשרויות והרחיבו בהדרגה.'
    ],
    downloadLink: '#',
    printable: true,
  },
  {
    id: 'tool-2',
    title: 'סדר יום מצויר',
    description: 'לוח סדר יום עם תמונות המייצגות פעילויות שונות לאורך היום.',
    categoryId: 'routine',
    tags: ['שגרה', 'עזרים ויזואליים'],
    steps: [
      'בחרו תמונות המייצגות את הפעילויות השגרתיות של הילד.',
      'סדרו את התמונות לפי סדר הפעילויות.',
      'הציגו את הלוח בגובה עיני הילד.',
      'עברו על הלוח בבוקר וסמנו כל פעילות שהושלמה.'
    ],
    downloadLink: '#',
    printable: true,
  },
  {
    id: 'tool-3',
    title: 'כרטיסיות רגשות',
    description: 'כרטיסיות עם תמונות של הבעות פנים המייצגות רגשות שונים.',
    categoryId: 'communication',
    tags: ['רגשות', 'עזרים ויזואליים'],
    steps: [
      'הדפיסו את הכרטיסיות וגזרו אותן.',
      'שוחחו עם הילד על הרגשות השונים המוצגים בכרטיסיות.',
      'בקשו מהילד לבחור כרטיסיה המייצגת את הרגשות שלו.',
      'השתמשו בכרטיסיות כדי לעזור לילד לזהות רגשות של אחרים.'
    ],
    downloadLink: '#',
    printable: true,
  },
  {
    id: 'tool-4',
    title: 'תכנית חיזוקים אישית',
    description: 'תבנית ליצירת תכנית חיזוקים אישית המותאמת לצרכי הילד.',
    categoryId: 'reinforcement',
    tags: ['חיזוקים', 'התנהגות'],
    steps: [
      'זהו התנהגויות שברצונכם לעודד.',
      'בחרו תגמולים שמתאימים לילד.',
      'קבעו כמה "נקודות" דרושות לכל תגמול.',
      'עקבו אחר ההתקדמות באופן ויזואלי.',
      'שנו את התגמולים מעת לעת כדי לשמור על העניין.'
    ],
    downloadLink: '#',
    printable: true,
  },
  {
    id: 'tool-5',
    title: 'תרגילי נשימה להרגעה',
    description: 'סדרת תרגילי נשימה פשוטים לשימוש בזמן התפרצויות או מצבי חרדה.',
    categoryId: 'crisis',
    tags: ['הרגעה', 'ויסות רגשי'],
    steps: [
      'שבו בנוחות עם הילד.',
      'הנחו את הילד לשאוף אוויר דרך האף לספירה של 4.',
      'החזיקו את הנשימה לספירה של 2.',
      'שחררו את האוויר דרך הפה לספירה של 6.',
      'חזרו על התרגיל 5-10 פעמים.'
    ],
  },
  {
    id: 'tool-6',
    title: 'ערכת כלים סנסוריים ניידת',
    description: 'הוראות להכנת ערכת כלים סנסוריים אישית שניתן לקחת לכל מקום.',
    categoryId: 'sensory',
    tags: ['סנסורי', 'הרגעה'],
    steps: [
      'בחרו תיק או קופסה קטנה ונוחה לנשיאה.',
      'הכניסו חפצים עם מרקמים שונים (רך, קשיח, גמיש).',
      'הוסיפו כלי המפיק צליל שקט ונעים.',
      'הוסיפו חפץ עם ריח מרגיע (לבנדר, וניל).',
      'הכניסו חפץ שניתן ללעוס או למצוץ (אם רלוונטי).',
      'הוסיפו משהו ויזואלי מעניין (בקבוק רוגע, קלידוסקופ).'
    ],
  },
  {
    id: 'tool-7',
    title: 'סיפור חברתי - יציאה לגן',
    description: 'סיפור חברתי המתאר את השלבים השונים ביציאה לגן.',
    categoryId: 'routine',
    tags: ['סיפורים חברתיים', 'גן ילדים'],
    steps: [
      'הדפיסו את הסיפור והכינו אותו כחוברת קטנה.',
      'קראו את הסיפור עם הילד לפני היציאה לגן.',
      'עברו על התמונות והסבירו כל שלב.',
      'חזקו את הילד כאשר הוא מבצע את השלבים בהצלחה.'
    ],
    downloadLink: '#',
    printable: true,
  },
  {
    id: 'tool-8',
    title: 'טכניקת "זמן שקט"',
    description: 'הנחיות ליצירת פינת "זמן שקט" בבית וכיצד להשתמש בה באופן יעיל.',
    categoryId: 'crisis',
    tags: ['הרגעה', 'מרחב אישי'],
    steps: [
      'בחרו פינה שקטה בבית, רחוקה ממקורות רעש והסחות דעת.',
      'רפדו את האזור בכריות נוחות.',
      'הוסיפו אביזרים מרגיעים (שמיכת משקל, צעצועי לחץ).',
      'הסבירו לילד שזהו מקום בטוח לרגיעה, לא עונש.',
      'עודדו את הילד ללכת לפינה כאשר הוא מרגיש שהוא מתחיל להיות מוצף.'
    ],
  },
];

const BehaviorTools: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTools, setActiveTools] = useState<Tool[]>(tools);
  const [bookmarkedTools, setBookmarkedTools] = useState<string[]>([]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setActiveTools(tools);
    } else {
      setActiveTools(tools.filter(tool => tool.categoryId === categoryId));
    }
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term === '') {
      if (selectedCategory === 'all') {
        setActiveTools(tools);
      } else {
        setActiveTools(tools.filter(tool => tool.categoryId === selectedCategory));
      }
      return;
    }
    
    const filtered = tools.filter(tool => {
      const matchesCategory = selectedCategory === 'all' || tool.categoryId === selectedCategory;
      const matchesSearch = 
        tool.title.toLowerCase().includes(term.toLowerCase()) || 
        tool.description.toLowerCase().includes(term.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()));
        
      return matchesCategory && matchesSearch;
    });
    
    setActiveTools(filtered);
  };
  
  const toggleBookmark = (toolId: string) => {
    if (bookmarkedTools.includes(toolId)) {
      setBookmarkedTools(bookmarkedTools.filter(id => id !== toolId));
    } else {
      setBookmarkedTools([...bookmarkedTools, toolId]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-6">
              <Zap className="h-8 w-8 text-yellow-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">
                כלים להתמודדות יומיומית
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              אוסף כלים פרקטיים, שיטות התמודדות, ורעיונות שיעזרו לכם בהתמודדות היומיומית עם האתגרים השונים.
            </p>
          </div>
        </section>
        
        {/* Categories and Search */}
        <section className="py-8 px-4 bg-white border-b border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="חיפוש כלים..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute left-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  הכל
                </button>
                
                {toolCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center ${
                      selectedCategory === category.id
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-1">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Tools List */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            {activeTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTools.map((tool) => (
                  <Card key={tool.id} className="h-full flex flex-col">
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium text-gray-800">{tool.title}</h3>
                        <button 
                          onClick={() => toggleBookmark(tool.id)}
                          className="text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          <Bookmark 
                            className="h-5 w-5" 
                            fill={bookmarkedTools.includes(tool.id) ? 'currentColor' : 'none'} 
                          />
                        </button>
                      </div>
                      
                      <p className="mt-2 text-gray-600">{tool.description}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tool.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {tool.steps && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">איך להשתמש:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-gray-600 text-sm">
                            {tool.steps.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                    
                    {tool.downloadLink && (
                      <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
                        <Button 
                          variant="outline" 
                          size="sm"
                          icon={<Download className="h-4 w-4" />}
                        >
                          <Link href={tool.downloadLink}>
                            {tool.printable ? 'הורד להדפסה' : 'הורד'}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-md mx-auto">
                  <X className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">לא נמצאו כלים</h3>
                  <p className="text-gray-500 mb-4">
                    לא נמצאו כלים התואמים את החיפוש שלך. נסו להשתמש במונחי חיפוש אחרים או לבחור קטגוריה אחרת.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                      setActiveTools(tools);
                    }}
                  >
                    הצג את כל הכלים
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Create Custom Tool */}
        <section className="py-12 px-4 bg-white border-t border-gray-200">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                רוצים ליצור כלי מותאם אישית?
              </h2>
              <p className="text-gray-600 mb-6">
                יש לכם רעיון לכלי שעובד במיוחד טוב עבור הילד שלכם? השתמשו ביוצר הכלים שלנו כדי ליצור כלים מותאמים אישית.
              </p>
              <Button 
                variant="primary"
              >
                יצירת כלי מותאם אישית
              </Button>
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="py-12 px-4 bg-green-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-8">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">סיפורי הצלחה</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-5">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-green-500">ד</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">דפנה, אמא לאיתי בן 5</h3>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "סדר היום המצויר שינה את חיינו. איתי היה מאוד חרדתי לגבי מעברים בין פעילויות, אבל מאז שהתחלנו להשתמש בלוח הוא הרבה יותר רגוע ויודע בדיוק מה צפוי להיות במהלך היום."
                </p>
              </Card>
              
              <Card className="p-5">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-green-500">א</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">אמיר, אבא ליובל בת 7</h3>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "תכנית החיזוקים האישית עזרה ליובל להתמודד עם הקושי בלבישת בגדים בבוקר. היא התחילה ממש להתלהב מהרעיון שהיא אוספת נקודות, ועכשיו היא כבר מתלבשת לבד ללא מאבקים."
                </p>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50"
              >
                שתפו את סיפור ההצלחה שלכם
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BehaviorTools;