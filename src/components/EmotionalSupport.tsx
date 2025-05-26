import React from 'react';
import { Card } from './ui/Card';
import { Heart, MessageCircle } from 'lucide-react';

const supportMessages = [
  {
    id: 1,
    message: "אתם לא לבד במסע הזה. אלפי הורים מתמודדים עם אתגרים דומים בישראל.",
    icon: <Users className="h-5 w-5 text-blue-500" />
  },
  {
    id: 2,
    message: "הרגשות שלך תקפים - תסכול, עצב, חרדה, ואפילו כעס הם תגובות טבעיות.",
    icon: <Heart className="h-5 w-5 text-red-500" />
  },
  {
    id: 3,
    message: "אתם עושים את המיטב עבור הילד שלכם. קחו את הזמן והמרחב שאתם צריכים.",
    icon: <ThumbsUp className="h-5 w-5 text-green-500" />
  },
  {
    id: 4,
    message: "כל צעד קטן הוא הישג. חגגו את ההתקדמות, לא משנה כמה קטנה היא נראית.",
    icon: <Star className="h-5 w-5 text-yellow-500" />
  },
  {
    id: 5,
    message: "דאגו גם לעצמכם - התמיכה שלכם בילד חשובה, אבל הבריאות שלכם חשובה לא פחות.",
    icon: <RefreshCw className="h-5 w-5 text-purple-500" />
  }
];

// Import missing components
import { Users, ThumbsUp, Star, RefreshCw } from 'lucide-react';

interface EmotionalSupportProps {
  stage?: string;
}

const EmotionalSupport: React.FC<EmotionalSupportProps> = ({ stage = 'general' }) => {
  // Filter or customize messages based on stage if needed
  const filteredMessages = supportMessages;

  return (
    <div className="w-full">
      <div className="flex items-center mb-4">
        <Heart className="h-6 w-6 text-red-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">תמיכה רגשית</h2>
      </div>
      
      <div className="space-y-4">
        {filteredMessages.map((item) => (
          <Card key={item.id} className="p-4 border-l-4 border-blue-400 bg-blue-50">
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                {item.icon}
              </div>
              <p className="text-gray-700">{item.message}</p>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center mb-3">
          <MessageCircle className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-medium text-gray-800">רוצים לשתף?</h3>
        </div>
        <p className="text-gray-600 mb-4">
          לפעמים, פשוט לדבר על הרגשות שלך יכול להקל. שתפו את התחושות, החששות או ההצלחות שלכם.
        </p>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          placeholder="שתפו את המחשבות שלכם כאן..."
        ></textarea>
        <div className="mt-3 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            שלח
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmotionalSupport;