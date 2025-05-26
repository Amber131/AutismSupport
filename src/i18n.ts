import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'home.title': 'Not Alone on the Journey',
          'home.subtitle': 'Support, guidance, and information for parents of children with autism in Israel',
          'home.getStarted': 'Get Started',
          'home.resources': 'Access Resources',
          'stage.title': 'What stage are you at?',
          'stage.concerns': 'Initial Concerns',
          'stage.diagnosis': 'During Diagnosis',
          'stage.postDiagnosis': 'Post Diagnosis',
          'stage.ongoing': 'Ongoing Support',
          'nav.resources': 'Resources',
          'nav.tools': 'Daily Tools',
          'nav.community': 'Community',
          'nav.rights': 'Rights & Benefits',
          'nav.help': 'Help',
          'nav.about': 'About',
          'footer.quickLinks': 'Quick Links',
          'footer.privacyTerms': 'Privacy & Terms',
          'footer.allRights': 'All rights reserved'
        }
      },
      he: {
        translation: {
          'home.title': 'לא לבד במסע',
          'home.subtitle': 'תמיכה, הכוונה, ומידע להורים לילדים עם אוטיזם בישראל',
          'home.getStarted': 'התחל כאן',
          'home.resources': 'גישה למשאבים',
          'stage.title': 'באיזה שלב אתם נמצאים?',
          'stage.concerns': 'חששות ראשוניים',
          'stage.diagnosis': 'בתהליך אבחון',
          'stage.postDiagnosis': 'לאחר אבחון',
          'stage.ongoing': 'תמיכה מתמשכת',
          'nav.resources': 'משאבים',
          'nav.tools': 'כלים יומיומיים',
          'nav.community': 'קהילה',
          'nav.rights': 'זכויות והטבות',
          'nav.help': 'עזרה',
          'nav.about': 'אודות',
          'footer.quickLinks': 'קישורים מהירים',
          'footer.privacyTerms': 'פרטיות ותנאי שימוש',
          'footer.allRights': 'כל הזכויות שמורות'
        }
      }
    },
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;