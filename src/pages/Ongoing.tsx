import React from 'react';
import { Card } from '../components/ui/Card';

const Ongoing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">תמיכה מתמשכת</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h2 className="text-xl font-semibold mb-3">מעקב רפואי</h2>
          <p className="text-gray-600">
            מידע על ביקורות תקופתיות, בדיקות מעקב, והתאמת טיפולים לפי הצורך
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-3">תמיכה רגשית</h2>
          <p className="text-gray-600">
            קבוצות תמיכה, ייעוץ פסיכולוגי, ומשאבים לשמירה על בריאות נפשית
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-3">התפתחות אישית</h2>
          <p className="text-gray-600">
            תכניות להעצמה אישית, פיתוח כישורים, והשתלבות בקהילה
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Ongoing;