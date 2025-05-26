import React from 'react';
import { Heart } from 'lucide-react';

const PostDiagnosis: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Heart className="w-8 h-8 text-red-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">אחרי האבחון</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">הצעדים הבאים</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-medium text-blue-900 mb-2">תכנית טיפול</h3>
              <p className="text-blue-800">פיתוח תכנית טיפול מותאמת אישית עם הצוות המקצועי שלך</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-md">
              <h3 className="font-medium text-green-900 mb-2">תמיכה משפחתית</h3>
              <p className="text-green-800">שיתוף המשפחה והקרובים ובניית מערכת תמיכה</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-medium text-purple-900 mb-2">משאבים וזכויות</h3>
              <p className="text-purple-800">מידע על זכויות, שירותים ותמיכה זמינה</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">משאבים שימושיים</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/resources" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
              <h3 className="font-medium text-gray-900 mb-1">מדריך למשאבים</h3>
              <p className="text-gray-600">גישה למשאבים ושירותים זמינים</p>
            </a>
            
            <a href="/community" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
              <h3 className="font-medium text-gray-900 mb-1">קהילת תמיכה</h3>
              <p className="text-gray-600">התחברות עם אחרים בעלי חוויות דומות</p>
            </a>
            
            <a href="/tools" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
              <h3 className="font-medium text-gray-900 mb-1">כלים להתמודדות</h3>
              <p className="text-gray-600">אסטרטגיות וטכניקות מעשיות</p>
            </a>
            
            <a href="/help" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
              <h3 className="font-medium text-gray-900 mb-1">קבלת עזרה</h3>
              <p className="text-gray-600">מידע על שירותי תמיכה מקצועיים</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDiagnosis;