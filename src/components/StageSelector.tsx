import React from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Link } from './ui/Link';
import { HelpCircle, Search, Clipboard, Users } from 'lucide-react';

const stageOptions = [
  {
    id: 'concerns',
    title: 'חששות ראשוניים',
    description: 'יש לי חששות לגבי התפתחות הילד/ה שלי',
    icon: <HelpCircle className="h-8 w-8 text-blue-500" />,
    link: '/stage/concerns'
  },
  {
    id: 'diagnosis',
    title: 'בתהליך אבחון',
    description: 'אנחנו נמצאים בתהליך האבחון',
    icon: <Search className="h-8 w-8 text-green-500" />,
    link: '/stage/diagnosis'
  },
  {
    id: 'post-diagnosis',
    title: 'לאחר אבחון',
    description: 'קיבלנו אבחנה וזקוקים להכוונה',
    icon: <Clipboard className="h-8 w-8 text-purple-500" />,
    link: '/stage/post-diagnosis'
  },
  {
    id: 'ongoing',
    title: 'תמיכה מתמשכת',
    description: 'אנחנו מחפשים תמיכה ומשאבים מתמשכים',
    icon: <Users className="h-8 w-8 text-orange-500" />,
    link: '/stage/ongoing'
  }
];

interface StageSelectorProps {
  onStageSelect?: (stageId: string) => void;
}

const StageSelector: React.FC<StageSelectorProps> = ({ onStageSelect }) => {
  const handleSelect = (stageId: string) => {
    if (onStageSelect) {
      onStageSelect(stageId);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">באיזה שלב אתם נמצאים?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stageOptions.map((stage) => (
          <Card 
            key={stage.id} 
            className="p-6 flex flex-col h-full"
            hover
          >
            <div className="flex items-start mb-4">
              <div className="rounded-full bg-gray-50 p-3 mr-4 flex-shrink-0">
                {stage.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">{stage.title}</h3>
                <p className="text-gray-600 mt-1">{stage.description}</p>
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Button 
                variant="outline" 
                className="w-full justify-center"
                onClick={() => handleSelect(stage.id)}
              >
                <Link href={stage.link} className="w-full text-center">
                  בחר
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StageSelector;