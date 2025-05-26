import React from 'react';

function Diagnosis() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">תהליך האבחון</h1>
      <div className="space-y-6">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">מה כולל תהליך האבחון?</h2>
          <p className="text-gray-700 mb-4">
            תהליך האבחון הוא שלב חשוב בהבנת הצרכים הייחודיים של ילדכם. התהליך כולל מספר שלבים ומפגשים עם אנשי מקצוע שונים.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-medium mb-2">שלב ראשון: הערכה ראשונית</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>פגישה עם רופא התפתחותי</li>
                <li>שיחה מקיפה עם ההורים</li>
                <li>תצפית ראשונית בילד</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-medium mb-2">שלב שני: אבחון מעמיק</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>הערכה פסיכולוגית</li>
                <li>הערכה תקשורתית</li>
                <li>בדיקות התפתחותיות נוספות</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">טיפים להתמודדות עם תהליך האבחון</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-2">הכנה לפגישות</h3>
                <p className="text-gray-600">
                  תעדו התנהגויות והתפתחות של ילדכם, אספו מידע ממסגרות חינוכיות, והכינו רשימת שאלות מראש.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-2">תמיכה רגשית</h3>
                <p className="text-gray-600">
                  חשוב לזכור שזהו תהליך שעלול להיות מאתגר רגשית. אל תהססו לבקש תמיכה ממשפחה, חברים או אנשי מקצוע.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">שאלות נפוצות</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">כמה זמן אורך תהליך האבחון?</h3>
              <p className="text-gray-600">
                תהליך האבחון המלא עשוי להימשך מספר שבועות עד מספר חודשים, תלוי בגורמים שונים כמו זמינות אנשי המקצוע והצורך בבדיקות נוספות.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">האם צריך הפניה מרופא?</h3>
              <p className="text-gray-600">
                ברוב המקרים, נדרשת הפניה מרופא הילדים או מרופא התפתחותי כדי להתחיל את תהליך האבחון.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Diagnosis;