# פורטל לימוד – סיכומי קורסים

אתר סטטי בעברית לסיכומי קורסים באוניברסיטה הפתוחה. האתר בנוי מ־HTML, CSS ו־JavaScript בלבד, ולכן אפשר להעלות אותו ישירות ל־GitHub ולפרוס ב־Vercel ללא תהליך build.

## מה השתנה בגרסה הזו

- נוסף navigation bar גלובלי וקבוע לכל האתר.
- תפריט "קורסים" נפתח כ־mega menu עם שלושת הקורסים הקיימים.
- לכל קורס יש קישורים ישירים לעמוד הקורס, לכל הסיכומים, ולכל סיכום ספציפי.
- במובייל יש תפריט נפתח נוח עם רשימת קורסים וסיכומים.
- קישורים כמו `summaries.html#s3` פותחים אוטומטית את הסיכום המתאים בתוך עמוד הסיכומים.
- הסיכומים, הצבעים, הבלוקים והעיצוב הפנימי נשמרו.

## מבנה הקבצים

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── courses/
    ├── logic/
    │   ├── index.html
    │   └── summaries.html
    ├── manma/
    │   ├── index.html
    │   └── summaries.html
    └── linear2/
        ├── index.html
        └── summaries.html
```

## פריסה ב־Vercel

1. צור repository חדש ב־GitHub.
2. העלה את כל הקבצים שבתיקייה הזו לשורש ה־repository.
3. ב־Vercel בחר Import Project מתוך GitHub.
4. אין צורך להגדיר build command.
5. Output directory נשאר ריק / ברירת מחדל, כי האתר סטטי.

## הוספת קורס חדש בעתיד

1. צור תיקייה חדשה תחת `courses/`, למשל:

```text
courses/new-course/
```

2. הוסף אליה `index.html` ו־`summaries.html` לפי המבנה של הקורסים הקיימים.
3. פתח את `js/main.js` והוסף אובייקט חדש למערך `PORTAL_COURSES` בתחילת הקובץ:

```js
{
  slug: 'new-course',
  title: 'שם הקורס המלא',
  shortTitle: 'שם קצר',
  code: '00000',
  icon: '✦',
  color: 'linear-gradient(135deg,#4f8ff7,#7c3aed)',
  home: 'courses/new-course/index.html',
  summaries: 'courses/new-course/summaries.html',
  items: [
    { id: 's1', label: 'מפגש 1 – שם הסיכום' }
  ]
}
```

4. ודא שבעמוד `summaries.html` יש div עם אותו id, למשל:

```html
<div id="s1" class="summary-panel active">...</div>
```


## עדכון ניווט – גרסה זו

- סרגל הניווט העליון מציג מימין את `ראשי | קורסים`, ומשמאל את מיתוג הפורטל.
- הוסר הקישור `כל הקורסים` מהניווט העליון ומהתפריט במובייל.
- תפריט `קורסים` נפתח כרשימת קורסים אופקית עם פס גלילה דק ומעוצב בתחתית.
- הוסר בלוק ההסבר שהיה בתוך תפריט הקורסים.
- כפתורי מפגשים/סיכומים בעמודי `summaries.html` אינם דביקים יותר ואינם נגררים עם גלילת העמוד.
- נוספו איורי SVG מקומיים ומתאימים לכל קורס תחת `assets/images`.
