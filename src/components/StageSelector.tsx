import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { HelpCircle, Search, Clipboard, Users } from 'lucide-react';

const stageOptions = [
  {
    id: 'concerns',
    title: 'stage.concerns',
    description: 'יש לי חששות לגבי התפתחות הילד/ה שלי',
    descriptionEn: 'I have concerns about my child\'s development',
    icon: <HelpCircle className="h-8 w-8 text-blue-500" />,
    path: '/help'
  },
  {
    id: 'diagnosis',
    title: 'stage.diagnosis',
    description: 'אנחנו נמצאים בתהליך האבחון',
    descriptionEn: 'We are in the diagnosis process',
    icon: <Search className="h-8 w-8 text-green-500" />,
    path: '/resources'
  },
  {
    id: 'post-diagnosis',
    title: 'stage.postDiagnosis',
    description: 'קיבלנו אבחנה וזקוקים להכוונה',
    descriptionEn: 'We received a diagnosis and need guidance',
    icon: <Clipboard className="h-8 w-8 text-purple-500" />,
    path: '/rights'
  },
  {
    id: 'ongoing',
    title: 'stage.ongoing',
    description: 'אנחנו מחפשים תמיכה ומשאבים מתמשכים',
    descriptionEn: 'We are looking for ongoing support and resources',
    icon: <Users className="h-8 w-8 text-orange-500" />,
    path: '/community'
  }
];

const StageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === 'he';

  const handleStageSelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${isRTL ? 'rtl' : 'ltr'}`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {t('stage.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stageOptions.map((stage) => (
          <Card 
            key={stage.id} 
            className="p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => handleStageSelect(stage.path)}
          >
            <div className="flex items-start mb-4">
              <div className="rounded-full bg-gray-50 p-3 mr-4 flex-shrink-0">
                {stage.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">{t(stage.title)}</h3>
                <p className="text-gray-600 mt-1">
                  {isRTL ? stage.description : stage.descriptionEn}
                </p>
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Button 
                variant="primary" 
                className="w-full justify-center"
              >
                {isRTL ? 'בחר שלב זה' : 'Choose this stage'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StageSelector;