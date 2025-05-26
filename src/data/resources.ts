import { ResourceType } from '../components/ResourceCard';

export const resources: ResourceType[] = [
  {
    id: '1',
    title: 'אלו"ט - האגודה הלאומית לילדים אוטיסטים',
    description: 'עמותה המספקת מידע, תמיכה, וסיוע למשפחות של ילדים עם אוטיזם בישראל.',
    type: 'organization',
    contact: {
      phone: '03-5718188',
      email: 'info@alut.org.il',
      website: 'https://alut.org.il',
      address: 'רח\' כורזין 1, גבעתיים'
    },
    tags: ['עמותות', 'תמיכה רגשית', 'זכויות'],
    language: 'hebrew'
  },
  {
    id: '2',
    title: 'המוסד לביטוח לאומי - קצבת ילד נכה',
    description: 'מידע על זכאות לקצבת ילד נכה להורים לילדים על הספקטרום האוטיסטי.',
    type: 'service',
    contact: {
      phone: '*6050',
      website: 'https://www.btl.gov.il/benefits/Disabled_Child/',
      address: 'סניפי ביטוח לאומי ברחבי הארץ'
    },
    tags: ['ביטוח לאומי', 'זכויות'],
    language: 'hebrew'
  },
  {
    id: '3',
    title: 'משרד החינוך - זכויות ילדים עם אוטיזם במערכת החינוך',
    description: 'מידע על זכויות ילדים עם אוטיזם במערכת החינוך הישראלית, כולל סייעות, הנגשות וועדות השמה.',
    type: 'article',
    contact: {
      website: 'https://parents.education.gov.il',
    },
    tags: ['חינוך', 'זכויות'],
    language: 'hebrew'
  },
  {
    id: '4',
    title: 'מכבי שירותי בריאות - שירותים לילדים עם אוטיזם',
    description: 'פירוט השירותים הניתנים במסגרת קופת חולים מכבי לילדים המאובחנים עם אוטיזם.',
    type: 'service',
    contact: {
      phone: '*3555',
      website: 'https://www.maccabi4u.co.il',
    },
    tags: ['קופות חולים', 'טיפול', 'אבחון'],
    language: 'hebrew'
  },
  {
    id: '5',
    title: 'שירותי בריאות כללית - מרכז לאבחון וטיפול באוטיזם',
    description: 'מידע על המרכזים של קופת חולים כללית לאבחון וטיפול בילדים על הספקטרום האוטיסטי.',
    type: 'service',
    contact: {
      phone: '*2700',
      website: 'https://www.clalit.co.il',
    },
    tags: ['קופות חולים', 'טיפול', 'אבחון'],
    language: 'hebrew'
  },
  {
    id: '6',
    title: 'בית איזי שפירא',
    description: 'עמותה המספקת שירותים, טיפולים והדרכות להורים וילדים עם מוגבלויות, כולל אוטיזם.',
    type: 'organization',
    contact: {
      phone: '09-7701222',
      website: 'https://www.beitissie.org.il',
      address: 'רח\' איזי שפירא 29, רעננה'
    },
    tags: ['עמותות', 'טיפול', 'הדרכת הורים'],
    language: 'hebrew'
  },
  {
    id: '7',
    title: 'מרכז מיל"ם - מרכז ישראלי לטיפול בילדים עם קשיי תקשורת',
    description: 'מרכז המתמחה באבחון וטיפול בילדים עם אוטיזם ולקויות תקשורת.',
    type: 'organization',
    contact: {
      phone: '03-5715656',
      website: 'https://www.milam.org.il',
      address: 'רמת גן'
    },
    tags: ['אבחון', 'טיפול'],
    language: 'hebrew'
  },
  {
    id: '8',
    title: 'טיפול בסנסורי מוטורי לילדים עם אוטיזם',
    description: 'מאמר מקצועי על חשיבות הטיפול הסנסורי-מוטורי לילדים על הספקטרום האוטיסטי.',
    type: 'article',
    contact: {
      website: 'https://www.autism.org.il/articles',
    },
    tags: ['טיפול', 'מידע מקצועי'],
    language: 'hebrew'
  }
];

export const getResourcesByTags = (tags: string[]) => {
  if (tags.length === 0) return resources;
  
  return resources.filter(resource => 
    resource.tags.some(tag => tags.includes(tag))
  );
};

export const getResourcesByType = (type: string) => {
  return resources.filter(resource => resource.type === type);
};

export const resourceTags = [
  'קופות חולים',
  'ביטוח לאומי',
  'עמותות',
  'טיפול',
  'אבחון',
  'זכויות',
  'חינוך',
  'תמיכה רגשית',
  'הדרכת הורים',
  'מידע מקצועי'
];