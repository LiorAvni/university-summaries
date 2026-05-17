<!DOCTYPE html>

<html dir="rtl" lang="he">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>סיכומים – אלגברה לינארית 2</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" rel="stylesheet"/>
<link href="../../css/style.css" rel="stylesheet"/>
</head>
<body>
<div class="nav-overlay"></div>
<nav class="nav">
<div class="container">
<div class="nav__inner">
<a class="nav__brand" href="index.html">
<div class="nav__brand-icon" style="background:linear-gradient(135deg,#a78bfa,#f472b6)">𝝀</div>
<span>לינארית 2 · 20229</span>
</a>
<ul class="nav__links">
<li><a class="nav__link" href="../../index.html">ראשי</a></li>
<li><a class="nav__link" href="index.html">הקורס</a></li>
<li><a class="nav__link active" href="summaries.html">סיכומים</a></li>
</ul>
<button aria-label="תפריט" class="nav__hamburger"><span></span><span></span><span></span></button>
</div>
</div>
</nav>
<main>
<div class="container container--narrow">
<div class="breadcrumbs">
<a href="../../index.html">ראשי</a>
<span class="breadcrumbs__sep">‹</span>
<a href="index.html">לינארית 2</a>
<span class="breadcrumbs__sep">‹</span>
<span class="breadcrumbs__current">סיכומים מפורטים</span>
</div>
<div class="page-header">
<h1 class="page-header__title">סיכומים מפורטים</h1>
<p class="page-header__desc">סיכום מלא של כל מפגש – הגדרות, משפטים, הוכחות ודוגמאות.</p>
</div>
<div class="summaries-nav">
<button class="summary-tab active" data-target="s0">רקע מלינארית 1</button>
<button class="summary-tab" data-target="s1">מפגש 1 – מכפלה פנימית</button>
<button class="summary-tab" data-target="s2">מפגש 2 – צמודה וריס</button>
<button class="summary-tab" data-target="s3">מפגש 3 – לכסון אוניטרי</button>
<button class="summary-tab" data-target="s4">מפגש 4 – ספקטרלי</button>
<button class="summary-tab" data-target="s45">מפגש 4.5 – תבניות בילינאריות וריבועיות</button>
<button class="summary-tab" data-target="s5">מפגש 5 – חפיפה, שינוי בסיס ולכסון</button>
<button class="summary-tab" data-target="s6">מפגש 6 – צורה קנונית וחפיפות אלמנטריות</button>
<button class="summary-tab" data-target="s7">מפגש 7 – תבניות ריבועיות ממשיות</button></div>
<!-- ========== LA1 PREREQUISITES ========== -->
<div class="summary-panel active" id="s0">
<div class="summary-content">
<h2>רקע נדרש מאלגברה לינארית 1 (20109)</h2>
<div class="logic-note">
<p>סיכום זה מרכז את <strong>כל החומר מלינארית 1</strong> שנדרש כידע מוקדם להבנת הקורס אלגברה לינארית 2. כל מושג, משפט ודרך-פתרון שמופיעים כאן משמשים אותנו לאורך הקורס.</p>
</div>
<!-- ===== 1. FIELDS & COMPLEX ===== -->
<h3>א. שדות ומספרים מרוכבים</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה – שדה</div>
<p><strong>שדה</strong> \(F\): קבוצה עם חיבור וכפל המקיימים סגירות, אסוציאטיביות, קומוטטיביות, קיום \(0\) ו-\(1\) (\(0 \neq 1\)), הפכיים חיבוריים, הפכיים כפליים לכל \(a \neq 0\), ודיסטריבוטיביות.</p>
<p>דוגמאות: \(\mathbb{R}\), \(\mathbb{Q}\), \(\mathbb{C}\), \(\mathbb{Z}_p\) (עבור \(p\) ראשוני).</p>
</div>
<h4>המספרים המרוכבים \(\mathbb{C}\)</h4>
<p>\(z = a + bi\) כאשר \(a = \text{Re}(z)\), \(b = \text{Im}(z)\), ו-\(i^2 = -1\).</p>
<p><strong>צמוד:</strong> \(\bar{z} = a - bi\). תכונות מרכזיות:</p>
<ul>
<li>\(\overline{\bar{z}} = z\), \(\overline{z_1 + z_2} = \bar{z}_1 + \bar{z}_2\), \(\overline{z_1 z_2} = \bar{z}_1 \bar{z}_2\)</li>
<li>\(z + \bar{z} = 2\text{Re}(z)\), \(z - \bar{z} = 2i\,\text{Im}(z)\)</li>
<li>\(z \in \mathbb{R} \iff z = \bar{z}\)</li>
</ul>
<p><strong>ערך מוחלט:</strong> \(|z| = \sqrt{a^2 + b^2}\). מתקיים: \(z\bar{z} = |z|^2\), \(|z| = |\bar{z}|\).</p>
<p><strong>הצגה קוטבית:</strong> \(z = r(\cos\theta + i\sin\theta)\) כאשר \(r = |z|\).</p>
<ul>
<li><strong>כפל:</strong> \(z_1 z_2 = r_1 r_2[\cos(\theta_1+\theta_2) + i\sin(\theta_1+\theta_2)]\)</li>
<li><strong>דה-מואבר:</strong> \(z^n = r^n(\cos n\theta + i\sin n\theta)\)</li>
<li><strong>שורשים:</strong> \(z^n = w\) — יש \(n\) שורשים שונים: \(z_k = \sqrt[n]{|w|}\left[\cos\frac{\theta+2\pi k}{n} + i\sin\frac{\theta+2\pi k}{n}\right]\), \(k=0,\ldots,n-1\).</li>
</ul>
<h4>פולינומים</h4>
<p>\(\alpha\) שורש של \(p(x)\) אם״ם \(p(\alpha) = 0\) אם״ם \((x-\alpha) \mid p(x)\).</p>
<p><strong>המשפט היסודי של האלגברה:</strong> כל פולינום לא-קבוע מעל \(\mathbb{C}\) מתפרק לגורמים לינאריים (יש לו שורש ב-\(\mathbb{C}\)).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – מספרים מרוכבים</div>
<p><strong>שאלה:</strong> מצאו את כל השורשים של \(z^3 = -8\).</p>
<p><strong>פתרון:</strong> \(w = -8 = 8(\cos\pi + i\sin\pi)\). לכן \(r = \sqrt[3]{8} = 2\).</p>
<p>\(z_k = 2\left[\cos\frac{\pi + 2\pi k}{3} + i\sin\frac{\pi + 2\pi k}{3}\right]\), \(k = 0,1,2\):</p>
<p>\(z_0 = 2(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}) = 1 + i\sqrt{3}\)</p>
<p>\(z_1 = 2(\cos\pi + i\sin\pi) = -2\)</p>
<p>\(z_2 = 2(\cos\frac{5\pi}{3} + i\sin\frac{5\pi}{3}) = 1 - i\sqrt{3}\)</p>
</div>
<!-- ===== 2. VECTOR SPACES ===== -->
<h3>ב. מרחבים לינאריים (וקטוריים)</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה – מרחב לינארי</div>
<p>מרחב לינארי מעל שדה \(F\) הוא קבוצה \(V\) עם חיבור וקטורים וכפל בסקלר המקיימים 8 אקסיומות (קומוטטיביות, אסוציאטיביות, אפס, נגדי, וכו').</p>
</div>
<h4>תתי-מרחבים</h4>
<p>\(W \subseteq V\) הוא <strong>תת-מרחב</strong> אם: (1) \(W \neq \emptyset\), (2) סגור לחיבור, (3) סגור לכפל בסקלר.</p>
<p>חיתוך תתי-מרחבים הוא תת-מרחב. <strong>סכום:</strong> \(U + W = \{u + w : u \in U, w \in W\}\).</p>
<div class="theorem-box">
<div class="theorem-box__label">סכום ישר</div>
<p>\(V = U \oplus W\) אם \(V = U + W\) ו-\(U \cap W = \{0\}\). שקול ל: כל \(v \in V\) מתפרק <strong>באופן יחיד</strong> ל-\(v = u + w\).</p>
</div>
<h4>צירוף לינארי, תלות ואי-תלות</h4>
<p><strong>צירוף לינארי:</strong> \(v = \alpha_1 v_1 + \cdots + \alpha_k v_k\). <strong>מרחב הנפרש:</strong> \(\text{Span}(S)\) = כל הצירופים הלינאריים.</p>
<p><strong>בלתי תלויים לינארית (בת״ל):</strong> \(\alpha_1 v_1 + \cdots + \alpha_k v_k = 0 \Rightarrow\) כל \(\alpha_i = 0\).</p>
<p><strong>תלויים לינארית (ת״ל):</strong> קיים צירוף לא-טריוויאלי שנותן אפס ← לפחות אחד הוא צירוף של האחרים.</p>
<h4>בסיס ומימד</h4>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה – בסיס</div>
<p><strong>בסיס</strong> של \(V\): קבוצה שהיא בת״ל <strong>ופורשת</strong> את \(V\). כל וקטור מוצג כצירוף לינארי <strong>יחיד</strong> לפי הבסיס.</p>
</div>
<p><strong>מימד:</strong> \(\dim V\) = מספר הוקטורים בבסיס כלשהו (קבוע לכל בסיס).</p>
<ul>
<li>\(\dim W \le \dim V\) לתת-מרחב \(W\), עם שוויון אם״ם \(W = V\).</li>
<li>קבוצה בת״ל ניתנת להשלמה לבסיס.</li>
<li>\(\dim(U + W) = \dim U + \dim W - \dim(U \cap W)\).</li>
</ul>
<h4>וקטור קואורדינטות ומטריצת מעבר</h4>
<p>לפי בסיס סדור \(B = (v_1, \ldots, v_n)\), <strong>וקטור הקואורדינטות</strong> של \(v\) הוא \([v]_B = (\alpha_1, \ldots, \alpha_n)^t\) כך ש-\(v = \sum \alpha_i v_i\).</p>
<p><strong>מטריצת מעבר</strong> מ-\(B'\) ל-\(B\): \(M = \big([b'_1]_B \mid \cdots \mid [b'_n]_B\big)\). אז \([v]_B = M[v]_{B'}\).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – בסיס וקואורדינטות</div>
<p><strong>שאלה:</strong> נתון הבסיס \(B = \{(1,1), (1,-1)\}\) של \(\mathbb{R}^2\). מצאו את \([(3,1)]_B\).</p>
<p><strong>פתרון:</strong> נרצה \(\alpha(1,1) + \beta(1,-1) = (3,1)\).</p>
<p>\(\alpha + \beta = 3\), \(\alpha - \beta = 1\). מחברים: \(2\alpha = 4 \Rightarrow \alpha = 2, \beta = 1\).</p>
<p>\([(3,1)]_B = \begin{pmatrix}2\\1\end{pmatrix}\).</p>
</div>
<!-- ===== 3. MATRICES ===== -->
<h3>ג. מטריצות</h3>
<h4>פעולות בסיסיות</h4>
<p>\((AB)_{ij} = \sum_k a_{ik}b_{kj}\) (שורה כפול עמודה). <strong>הכפל לא קומוטטיבי</strong> בכלל.</p>
<p><strong>שחלוף:</strong> \((A^t)_{ij} = A_{ji}\). תכונות: \((A^t)^t = A\), \((AB)^t = B^tA^t\), \((cA)^t = cA^t\).</p>
<p><strong>סימטרית:</strong> \(A^t = A\). <strong>אנטי-סימטרית:</strong> \(A^t = -A\).</p>
<h4>מטריצות מיוחדות</h4>
<ul>
<li><strong>מטריצת יחידה</strong> \(I\): \(AI = IA = A\).</li>
<li><strong>אלכסונית</strong>: \(a_{ij} = 0\) לכל \(i \neq j\).</li>
<li><strong>משולשת</strong> (עליונה/תחתונה): אפסים מתחת/מעל לאלכסון.</li>
</ul>
<h4>הפיכות</h4>
<div class="theorem-box">
<div class="theorem-box__label">תנאים שקולים להפיכות (משפט 3.10.6)</div>
<p>עבור מטריצה ריבועית \(A\) מסדר \(n\), כל התנאים הבאים <strong>שקולים</strong>:</p>
<ol>
<li>\(A\) הפיכה (קיימת \(A^{-1}\)).</li>
<li>\(A\) שקולת שורות ל-\(I\).</li>
<li>\(A\) מכפלה של מטריצות אלמנטריות.</li>
<li>הדרגה המצומצמת של \(A\) היא \(I\) (RREF = \(I\)).</li>
<li>\(Ax = b\) פתירה <strong>לכל</strong> \(b\), ובאופן <strong>יחיד</strong>.</li>
<li>\(Ax = 0\) — רק הפתרון הטריוויאלי.</li>
<li>עמודות \(A\) בת״ל / שורות \(A\) בת״ל.</li>
<li>עמודות \(A\) פורשות \(F^n\) / שורות פורשות.</li>
<li>\(\det(A) \neq 0\).</li>
</ol>
</div>
<p><strong>מציאת ההופכי:</strong> דרגו את \([A \mid I]\) עד קבלת \([I \mid A^{-1}]\).</p>
<p>\((AB)^{-1} = B^{-1}A^{-1}\), \((A^t)^{-1} = (A^{-1})^t\).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – הפיכות</div>
<p><strong>שאלה:</strong> מצאו את ההופכי של \(A = \begin{pmatrix}1 &amp; 2\\3 &amp; 7\end{pmatrix}\).</p>
<p><strong>פתרון:</strong></p>
<p>\([A \mid I] = \left(\begin{array}{cc|cc}1&amp;2&amp;1&amp;0\\3&amp;7&amp;0&amp;1\end{array}\right) \xrightarrow{R_2 - 3R_1} \left(\begin{array}{cc|cc}1&amp;2&amp;1&amp;0\\0&amp;1&amp;-3&amp;1\end{array}\right) \xrightarrow{R_1 - 2R_2} \left(\begin{array}{cc|cc}1&amp;0&amp;7&amp;-2\\0&amp;1&amp;-3&amp;1\end{array}\right)\)</p>
<p>\(A^{-1} = \begin{pmatrix}7&amp;-2\\-3&amp;1\end{pmatrix}\).</p>
<p>אימות: \(\det A = 7-6 = 1 \neq 0\). לחלופין: \(A^{-1} = \frac{1}{\det A}\begin{pmatrix}7&amp;-2\\-3&amp;1\end{pmatrix}\). ✓</p>
</div>
<!-- ===== 4. DETERMINANTS ===== -->
<h3>ד. דטרמיננטות</h3>
<p>\(2 \times 2\): \(\det\begin{pmatrix}a&amp;b\\c&amp;d\end{pmatrix} = ad - bc\). כללי: פיתוח לפי שורה או עמודה (לפלס).</p>
<h4>תכונות מרכזיות</h4>
<ul>
<li>\(\det(A^t) = \det(A)\).</li>
<li>החלפת שורות/עמודות — הופכת סימן.</li>
<li>כפל שורה ב-\(t\) — כופל את הדטרמיננטה ב-\(t\).</li>
<li>חיבור כפולה של שורה אחת לאחרת — <strong>לא משנה</strong> את הדטרמיננטה.</li>
<li>שתי שורות/עמודות זהות ⟹ \(\det = 0\).</li>
<li>מטריצה משולשת: \(\det = \prod a_{ii}\) (מכפלת האלכסון).</li>
</ul>
<div class="theorem-box">
<div class="theorem-box__label">משפטים חשובים</div>
<p>\(\det(AB) = \det(A)\det(B)\). מכאן: \(\det(A^k) = (\det A)^k\), \(\det(A^{-1}) = \frac{1}{\det A}\).</p>
<p>\(A\) הפיכה אם״ם \(\det(A) \neq 0\).</p>
</div>
<h4>חוק קרמר</h4>
<p>אם \(\det(A) \neq 0\), אז הפתרון היחיד של \(Ax = b\) הוא \(x_i = \frac{\det(A_i)}{\det(A)}\), כאשר \(A_i\) מתקבלת מהחלפת העמודה ה-\(i\) של \(A\) ב-\(b\).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – דטרמיננטה</div>
<p><strong>שאלה:</strong> חשבו \(\det\begin{pmatrix}2&amp;1&amp;3\\0&amp;-1&amp;4\\0&amp;0&amp;5\end{pmatrix}\).</p>
<p><strong>פתרון:</strong> מטריצה משולשת עליונה, לכן \(\det = 2 \cdot (-1) \cdot 5 = -10\).</p>
</div>
<!-- ===== 5. LINEAR TRANSFORMATIONS ===== -->
<h3>ה. העתקות לינאריות</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה</div>
<p>\(T: V \to W\) <strong>לינארית</strong> אם \(T(u+v) = T(u) + T(v)\) ו-\(T(\alpha v) = \alpha T(v)\) לכל \(u,v \in V\), \(\alpha \in F\).</p>
<p>נובע: \(T(0) = 0\), \(T(-v) = -T(v)\), ו-\(T\) משמרת צירופים לינאריים.</p>
</div>
<h4>גרעין ותמונה</h4>
<p><strong>גרעין:</strong> \(\ker T = \{v \in V : T(v) = 0\}\) — תת-מרחב של \(V\).</p>
<p><strong>תמונה:</strong> \(\text{Im}\, T = \{T(v) : v \in V\}\) — תת-מרחב של \(W\).</p>
<p>\(T\) <strong>חד-חד-ערכית</strong> (חח״ע) אם״ם \(\ker T = \{0\}\).</p>
<div class="theorem-box">
<div class="theorem-box__label">משפט המימדים (דרגה-אפסיות)</div>
<p>אם \(\dim V &lt; \infty\) אז: \(\dim(\ker T) + \dim(\text{Im}\, T) = \dim V\).</p>
</div>
<p><strong>איזומורפיזם:</strong> העתקה לינארית חח״ע ועל. שני מרחבים סוף-ממדיים מעל אותו שדה <strong>איזומורפיים</strong> אם״ם להם אותו מימד.</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – גרעין ותמונה</div>
<p><strong>שאלה:</strong> נתונה \(T: \mathbb{R}^3 \to \mathbb{R}^2\) המוגדרת ע״י \(T(x,y,z) = (x+y, y+z)\). מצאו את \(\ker T\) ו-\(\text{Im}\, T\).</p>
<p><strong>פתרון:</strong></p>
<p>\(\ker T\): \(x+y=0\), \(y+z=0\) ⟹ \(y = -x\), \(z = -y = x\). לכן \(\ker T = \text{Span}\{(1,-1,1)\}\), \(\dim\ker T = 1\).</p>
<p>לפי משפט המימדים: \(\dim\text{Im}\, T = 3 - 1 = 2 = \dim\mathbb{R}^2\). לכן \(\text{Im}\, T = \mathbb{R}^2\) (\(T\) על).</p>
</div>
<!-- ===== 6. MATRIX REPRESENTATION ===== -->
<h3>ו. ייצוג מטריצי של העתקות</h3>
<p>עבור \(T: V \to W\) עם בסיסים \(B\) ל-\(V\) ו-\(C\) ל-\(W\):</p>
<div class="theorem-box">
<div class="theorem-box__label">המטריצה המייצגת</div>
<p>\([T]_C^B\) — עמודותיה הן \([T(v_1)]_C, \ldots, [T(v_n)]_C\).</p>
<p><strong>נוסחת הקואורדינטות:</strong> \([T(v)]_C = [T]_C^B \cdot [v]_B\).</p>
</div>
<ul>
<li>\([S+T] = [S] + [T]\), \([\alpha T] = \alpha[T]\).</li>
<li><strong>הרכבה = כפל מטריצות:</strong> \([T \circ S] = [T][S]\) (בבסיסים מתאימים).</li>
<li>\(T\) איזומורפיזם אם״ם \([T]\) הפיכה, ואז \([T^{-1}] = [T]^{-1}\).</li>
<li>\(\text{rank}([T]) = \dim(\text{Im}\, T)\).</li>
</ul>
<h4>שינוי בסיס ודמיון</h4>
<div class="theorem-box">
<div class="theorem-box__label">דמיון מטריצות</div>
<p>אם \(M\) מטריצת מעבר מ-\(B\) ל-\(B'\), אז:</p>
            \[[T]_{B'} = M^{-1}[T]_B M\]
            <p>\(A\) ו-\(B\) <strong>דומות</strong> אם \(B = P^{-1}AP\) עבור \(P\) הפיכה — מייצגות את אותו אופרטור בבסיסים שונים.</p>
</div>
<p><strong>שמורות דמיון:</strong> \(\det\), \(\text{tr}\) (עקבה), דרגה, פולינום אופייני, ע.ע.</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – מטריצה מייצגת</div>
<p><strong>שאלה:</strong> \(T: \mathbb{R}^2 \to \mathbb{R}^2\) מוגדרת ע״י \(T(x,y) = (2x+y, x-y)\). מצאו את \([T]_E\) (בסיס סטנדרטי) ואת \([T]_B\) עבור \(B = \{(1,1),(1,-1)\}\).</p>
<p><strong>פתרון:</strong></p>
<p>\([T]_E = \begin{pmatrix}2&amp;1\\1&amp;-1\end{pmatrix}\) (עמודות = \(T(e_1), T(e_2)\)).</p>
<p>מטריצת מעבר: \(M = \begin{pmatrix}1&amp;1\\1&amp;-1\end{pmatrix}\) (עמודות = וקטורי \(B\) בבסיס \(E\)).</p>
<p>\([T]_B = M^{-1}[T]_E M = \frac{1}{-2}\begin{pmatrix}-1&amp;-1\\-1&amp;1\end{pmatrix}\begin{pmatrix}2&amp;1\\1&amp;-1\end{pmatrix}\begin{pmatrix}1&amp;1\\1&amp;-1\end{pmatrix}\).</p>
<p>\(M^{-1} = \frac{1}{2}\begin{pmatrix}1&amp;1\\1&amp;-1\end{pmatrix}\). \(M^{-1}[T]_E = \frac{1}{2}\begin{pmatrix}3&amp;0\\1&amp;2\end{pmatrix}\).</p>
<p>\([T]_B = \frac{1}{2}\begin{pmatrix}3&amp;0\\1&amp;2\end{pmatrix}\begin{pmatrix}1&amp;1\\1&amp;-1\end{pmatrix} = \frac{1}{2}\begin{pmatrix}3&amp;3\\3&amp;-1\end{pmatrix} = \begin{pmatrix}3/2&amp;3/2\\3/2&amp;-1/2\end{pmatrix}\).</p>
</div>
<!-- ===== 7. EIGENVALUES ===== -->
<h3>ז. ערכים עצמיים ולכסון</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרות</div>
<p>\(\lambda\) <strong>ערך עצמי</strong> של \(T\) (או \(A\)) אם קיים \(v \neq 0\) כך ש-\(T(v) = \lambda v\) (או \(Av = \lambda v\)). \(v\) נקרא <strong>וקטור עצמי</strong>.</p>
<p><strong>המרחב העצמי:</strong> \(V_\lambda = \ker(\lambda I - A) = \{v : Av = \lambda v\}\) — תת-מרחב.</p>
</div>
<h4>הפולינום האופייני</h4>
<p>\(p_A(\lambda) = \det(\lambda I - A)\) — פולינום ממעלה \(n\). <strong>השורשים שלו הם הערכים העצמיים</strong>.</p>
<p>קשרים: מקדם \(\lambda^{n-1}\) קשור ל-\(\text{tr}(A)\); האיבר החופשי \(= \det(-A) = (-1)^n \det(A)\).</p>
<h4>ריבוי אלגברי וגיאומטרי</h4>
<div class="theorem-box">
<div class="theorem-box__label">הגדרות ומשפט</div>
<p><strong>ריבוי אלגברי</strong> של \(\lambda\): הריבוי שלו כשורש של \(p_A\).</p>
<p><strong>ריבוי גיאומטרי</strong> של \(\lambda\): \(\dim V_\lambda = n - \text{rank}(\lambda I - A)\).</p>
<p><strong>תמיד:</strong> \(1 \le\) ריבוי גיאומטרי \(\le\) ריבוי אלגברי.</p>
</div>
<h4>תנאי לכסון</h4>
<div class="theorem-box">
<div class="theorem-box__label">משפט הלכסון</div>
<p>\(A\) (או \(T\)) <strong>לכסינה</strong> אם ורק אם:</p>
<ol>
<li>הפולינום האופייני <strong>מתפרק לגורמים לינאריים</strong> מעל \(F\), <strong>וגם</strong></li>
<li>לכל ע.ע., <strong>הריבוי הגיאומטרי = הריבוי האלגברי</strong>.</li>
</ol>
<p>שקול ל: קיים <strong>בסיס של וקטורים עצמיים</strong>.</p>
</div>
<div class="logic-note">
<p><strong>מקרה פשוט:</strong> אם ל-\(A\) מסדר \(n\) יש \(n\) ע.ע. <strong>שונים</strong>, אז \(A\) לכסינה (כי ו.ע. מע.ע. שונים בת״ל).</p>
</div>
<h4>תהליך הלכסון</h4>
<ol>
<li>חשבו \(p_A(\lambda) = \det(\lambda I - A)\) ומצאו את השורשים.</li>
<li>לכל ע.ע. \(\lambda_i\), מצאו בסיס ל-\(V_{\lambda_i} = \ker(\lambda_i I - A)\).</li>
<li>בדקו: ריבוי גיאומטרי = אלגברי לכל ע.ע.?</li>
<li>אם כן: \(P\) = מטריצה שעמודותיה הו.ע., ואז \(P^{-1}AP = D\).</li>
</ol>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – לכסון</div>
<p><strong>שאלה:</strong> לכסנו את \(A = \begin{pmatrix}4&amp;1\\2&amp;3\end{pmatrix}\) אם אפשר.</p>
<p><strong>פתרון:</strong></p>
<p>\(p_A(\lambda) = (\lambda-4)(\lambda-3) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)\).</p>
<p>ע.ע.: \(\lambda_1 = 2,\; \lambda_2 = 5\) — שני ע.ע. שונים, \(A\) לכסינה.</p>
<p>\(V_2\): \((2I-A)v = 0 \Rightarrow \begin{pmatrix}-2&amp;-1\\-2&amp;-1\end{pmatrix}v = 0\), בסיס: \(\{(1,-2)\}\).</p>
<p>\(V_5\): \((5I-A)v = 0 \Rightarrow \begin{pmatrix}1&amp;-1\\-2&amp;2\end{pmatrix}v = 0\), בסיס: \(\{(1,1)\}\).</p>
<p>\(P = \begin{pmatrix}1&amp;1\\-2&amp;1\end{pmatrix}\), \(P^{-1}AP = \begin{pmatrix}2&amp;0\\0&amp;5\end{pmatrix}\).</p>
</div>
<!-- ===== 8. RANK & SYSTEMS ===== -->
<h3>ח. דרגה ומערכות משוואות</h3>
<p><strong>דרגה:</strong> \(\rho(A) = \dim\text{(מרחב השורות)} = \dim\text{(מרחב העמודות)}\) = מספר הפיבוטים ב-RREF.</p>
<div class="theorem-box">
<div class="theorem-box__label">מימד מרחב הפתרונות</div>
<p>עבור \(Ax = 0\) עם \(A\) מסדר \(m \times n\): \(\dim\ker A = n - \rho(A)\).</p>
<p>פתרונות של \(Ax = b\) (אם קיימים): \(x = x_0 + \ker A\) (פתרון פרטי + מרחב הפתרונות ההומוגני).</p>
</div>
<p><strong>מערכת הומוגנית</strong> עם יותר נעלמים מאשר משוואות (\(n &gt; m\)): תמיד יש פתרון <strong>לא-טריוויאלי</strong>.</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – מערכת הומוגנית</div>
<p><strong>שאלה:</strong> מצאו בסיס למרחב הפתרונות של \(\begin{pmatrix}1&amp;2&amp;1\\2&amp;4&amp;2\end{pmatrix}x = 0\).</p>
<p><strong>פתרון:</strong> \(R_2 \to R_2 - 2R_1\): \(\begin{pmatrix}1&amp;2&amp;1\\0&amp;0&amp;0\end{pmatrix}\). פיבוט אחד, \(\rho = 1\), \(\dim\ker = 3-1 = 2\).</p>
<p>\(x_1 = -2x_2 - x_3\). בסיס: \(\{(-2,1,0),\; (-1,0,1)\}\).</p>
</div>
<!-- ===== 9. DOT PRODUCT BRIDGE ===== -->
<h3>ט. המכפלה הסקלרית ב-\(\mathbb{R}^n\) (גשר ללינארית 2)</h3>
<div class="logic-note">
<p>פרק 12 בלינארית 1 הוא <strong>הבסיס</strong> לכל לינארית 2. הוא מגדיר את המכפלה הסקלרית הסטנדרטית ב-\(\mathbb{R}^n\), ובקורס לינארית 2 מכלילים את הרעיון למרחבים מופשטים ולמרחבים מעל \(\mathbb{C}\).</p>
</div>
<p><strong>מכפלה סקלרית:</strong> \(a \cdot b = \sum_{i=1}^{n} a_i b_i\). תכונות: סימטריות, בי-לינאריות, חיוביות (\(v \cdot v \ge 0\), \(= 0 \iff v = 0\)).</p>
<p><strong>נורמה:</strong> \(\|v\| = \sqrt{v \cdot v}\). <strong>נרמול:</strong> \(v / \|v\|\).</p>
<p><strong>קושי-שוורץ:</strong> \(|a \cdot b| \le \|a\|\|b\|\).</p>
<p><strong>אורתוגונליות:</strong> \(u \perp v \iff u \cdot v = 0\).</p>
<p><strong>משלים אורתוגונלי:</strong> \(U^\perp = \{v : v \cdot u = 0 \;\forall u \in U\}\). מתקיים: \(\mathbb{R}^n = U \oplus U^\perp\).</p>
<p><strong>בסיס אורתונורמלי:</strong> מקדמים \(a_i = v \cdot e_i\). <strong>פרסבל:</strong> \(\|v\|^2 = \sum (v \cdot e_i)^2\).</p>
<p><strong>גרם-שמידט:</strong> מבסיס כלשהו בונים בסיס אורתוגונלי/אורתונורמלי (ראו פירוט במפגש 1).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – מרחב שורות ומשלים אורתוגונלי</div>
<p><strong>שאלה:</strong> נתונה \(A = \begin{pmatrix}1&amp;1&amp;0\\0&amp;1&amp;1\end{pmatrix}\). מצאו את \((\text{מרחב השורות})^\perp\).</p>
<p><strong>פתרון:</strong> מרחב השורות של \(A\) הוא \(U = \text{Span}\{(1,1,0),(0,1,1)\}\).</p>
<p>\(U^\perp = \ker(A)\): \(x_1 + x_2 = 0\), \(x_2 + x_3 = 0\) ⟹ \(x_2 = -x_1\), \(x_3 = x_1\).</p>
<p>\(U^\perp = \text{Span}\{(1,-1,1)\}\). (מרחב השורות של \(A\) הוא תמיד המשלים האורתוגונלי של מרחב האפס של \(A\).)</p>
</div>
<!-- ===== SUMMARY TABLE ===== -->
<h3>י. טבלת סיכום</h3>
<table>
<thead><tr><th>נושא</th><th>מה צריך לדעת</th><th>איפה בלינארית 2</th></tr></thead>
<tbody>
<tr><td>מספרים מרוכבים</td><td>צמוד, מודול, הצגה קוטבית, שורשים</td><td>מרחבים אוניטריים, ע.ע. מרוכבים</td></tr>
<tr><td>מרחבים, בסיס, מימד</td><td>תת-מרחב, סכום ישר, Span, בת״ל</td><td>בסיס לכל תת-מרחב / ו.ע.</td></tr>
<tr><td>מטריצות</td><td>שחלוף, הפיכות, אלמנטריות</td><td>\(A^* = \bar{A}^t\), ייצוג הצמודה</td></tr>
<tr><td>דטרמיננטות</td><td>\(\det(AB)\), סימן, הפיכות</td><td>\(\det(T)\), \(|\lambda|=1\) לאוניטרית</td></tr>
<tr><td>העתקות לינאריות</td><td>ker, Im, משפט מימדים, הרכבה</td><td>\(T^*\), \(\ker(T^*) = (\text{Im}\,T)^\perp\)</td></tr>
<tr><td>ייצוג מטריצי, דמיון</td><td>\([T]_B\), \(P^{-1}AP\), שמורות</td><td>לכסון אוניטרי: \(Q^*AQ = D\)</td></tr>
<tr><td>ע.ע. ולכסון</td><td>פולינום אופייני, ריבוי אלג./גיאו.</td><td>בסיס הלכסון האוניטרי, משפט ספקטרלי</td></tr>
<tr><td>דרגה ומערכות</td><td>\(\rho(A)\), מרחב פתרונות, RREF</td><td>\(\dim V_\lambda = n - \rho(\lambda I - A)\)</td></tr>
<tr><td>מכפלה סקלרית ב-\(\mathbb{R}^n\)</td><td>מכפלה, נורמה, אורתוגונליות, ג״ש</td><td>המודל להכללה: מכפלה פנימית מופשטת</td></tr>
</tbody>
</table>
</div>
</div>
<!-- ========== MEETING 1 ========== -->
<div class="summary-panel" id="s1">
<div class="summary-content">
<h2>מפגש 1 – מכפלה פנימית, נורמה ואורתוגונליות</h2>
<h3>א. מכפלה פנימית – הגדרה</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 1.1.1</div>
<p>יהי \(V\) מרחב לינארי מעל \(\mathbb{R}\). <strong>מכפלה פנימית</strong> על \(V\) היא פונקציה \((\cdot,\cdot): V \times V \to \mathbb{R}\) המקיימת:</p>
<p><strong>א. סימטריות:</strong> \((u,v) = (v,u)\) לכל \(u,v \in V\).</p>
<p><strong>ב. לינאריות ברכיב הראשון:</strong></p>
<ul>
<li>\((u+v, w) = (u,w) + (v,w)\)</li>
<li>\((\alpha u, v) = \alpha(u,v)\) לכל סקלר \(\alpha\)</li>
</ul>
<p><strong>ג. חיוביות:</strong> \((v,v) \ge 0\) לכל \(v\), ו-\((v,v)=0 \iff v=0\).</p>
</div>
<div class="logic-note">
<p>מהסימטריות והלינאריות ברכיב הראשון נובעת <strong>לינאריות ברכיב השני</strong> גם כן.</p>
</div>
<h4>מרחב אוקלידי ומרחב אוניטרי</h4>
<p><strong>מרחב אוקלידי:</strong> מרחב לינארי מעל \(\mathbb{R}\) עם מכפלה פנימית.</p>
<p><strong>מרחב אוניטרי:</strong> מרחב לינארי מעל \(\mathbb{C}\) עם מכפלה פנימית (הסימטריות מוחלפת ב: \((u,v) = \overline{(v,u)}\)).</p>
<h4>דוגמאות</h4>
<div class="example-box">
<div class="example-box__label">דוגמה – המכפלה הסטנדרטית</div>
<p>ב-\(\mathbb{R}^n\): \((a,b) = \sum_{i=1}^n a_i b_i\).</p>
<p>ב-\(\mathbb{C}^n\): \((a,b) = \sum_{i=1}^n a_i \overline{b_i}\).</p>
</div>
<div class="example-box">
<div class="example-box__label">דוגמה – מכפלה משוקללת</div>
<p>נתונים סקלרים חיוביים \(\lambda_1, \ldots, \lambda_n &gt; 0\). ב-\(\mathbb{R}^n\):</p>
            \[(a,b) = \sum_{i=1}^n \lambda_i a_i b_i\]
          </div>
<div class="example-box">
<div class="example-box__label">דוגמה – מכפלה אינטגרלית</div>
<p>במרחב \(C[a,b]\) של פונקציות רציפות:</p>
            \[(f,g) = \int_a^b f(x)g(x)\,dx\]
          </div>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – אימות מכפלה פנימית</div>
<p><strong>שאלה:</strong> נתונה \((a,b) = 2a_1b_1 + 3a_2b_2\) על \(\mathbb{R}^2\). הוכיחו שזו מכפלה פנימית.</p>
<p><strong>פתרון:</strong></p>
<p><em>סימטריות:</em> \((a,b) = 2a_1b_1 + 3a_2b_2 = 2b_1a_1 + 3b_2a_2 = (b,a)\). ✓</p>
<p><em>לינאריות:</em> \((a+c, b) = 2(a_1+c_1)b_1 + 3(a_2+c_2)b_2 = (2a_1b_1 + 3a_2b_2) + (2c_1b_1 + 3c_2b_2) = (a,b)+(c,b)\). וכן \((\alpha a, b) = 2\alpha a_1 b_1 + 3\alpha a_2 b_2 = \alpha(a,b)\). ✓</p>
<p><em>חיוביות:</em> \((a,a) = 2a_1^2 + 3a_2^2 \ge 0\), ו-\((a,a) = 0 \iff a_1 = a_2 = 0 \iff a = 0\) (כי המקדמים 2, 3 חיוביים). ✓</p>
</div>
<h3>ב. נורמה (אורך) ומרחק</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 1.3.1</div>
<p>הנורמה של וקטור \(v\) מוגדרת כ: \(\|v\| = \sqrt{(v,v)}\).</p>
<p><strong>וקטור יחידה:</strong> וקטור שנורמתו 1. <strong>נרמול:</strong> \(\hat{v} = \frac{v}{\|v\|}\).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 1.3.2 — מרחק</div>
<p>\(d(u,v) = \|u - v\|\). המרחק מקיים: סימטריה, אי-שליליות, ואי-שוויון המשולש \(d(u,w) \le d(u,v) + d(v,w)\).</p>
</div>
<h4>תכונות הנורמה</h4>
<ul>
<li>\(\|v\| \ge 0\) ו-\(\|v\| = 0 \iff v = 0\)</li>
<li>\(\|\alpha v\| = |\alpha| \cdot \|v\|\)</li>
<li><strong>אי-שוויון קושי-שוורץ:</strong> \(|(u,v)| \le \|u\| \cdot \|v\|\), עם שוויון אם״ם \(u,v\) תלויים לינארית.</li>
<li><strong>אי-שוויון המשולש:</strong> \(\|u+v\| \le \|u\| + \|v\|\)</li>
</ul>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – נורמה וקושי-שוורץ</div>
<p><strong>שאלה:</strong> נתון \(v = (1, 2, -1)\) ו-\(u = (3, 0, 1)\) ב-\(\mathbb{R}^3\) עם המכפלה הסטנדרטית. חשבו \(\|v\|\), \(\|u\|\), \((u,v)\) ואמתו את אי-שוויון קושי-שוורץ.</p>
<p><strong>פתרון:</strong></p>
<p>\(\|v\| = \sqrt{1+4+1} = \sqrt{6}\), \(\|u\| = \sqrt{9+0+1} = \sqrt{10}\).</p>
<p>\((u,v) = 3 \cdot 1 + 0 \cdot 2 + 1 \cdot (-1) = 2\).</p>
<p>בדיקה: \(|(u,v)| = 2\) ואילו \(\|u\|\|v\| = \sqrt{60} \approx 7.75\). אכן \(2 \le 7.75\). ✓</p>
</div>
<h3>ג. אורתוגונליות (ניצבות)</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה</div>
<p>\(u\) ו-\(v\) <strong>אורתוגונליים</strong> (ניצבים) אם \((u,v) = 0\). סימון: \(u \perp v\).</p>
<p>\(v\) אורתוגונלי לתת-מרחב \(U\) אם \((v,u) = 0\) לכל \(u \in U\).</p>
</div>
<h4>משפט פיתגורס</h4>
<p>אם \(u \perp v\) אז \(\|u+v\|^2 = \|u\|^2 + \|v\|^2\).</p>
<div class="logic-note">
<p><strong>הוכחה:</strong> \(\|u+v\|^2 = (u+v, u+v) = (u,u) + (u,v) + (v,u) + (v,v) = \|u\|^2 + 0 + 0 + \|v\|^2\).</p>
</div>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – אורתוגונליות ופיתגורס</div>
<p><strong>שאלה:</strong> ב-\(\mathbb{R}^3\) עם המכפלה הסטנדרטית, נתונים \(u=(1,1,0)\) ו-\(v=(-1,1,2)\). בדקו אם \(u \perp v\) ואם כן אמתו את משפט פיתגורס.</p>
<p><strong>פתרון:</strong></p>
<p>\((u,v) = 1 \cdot (-1) + 1 \cdot 1 + 0 \cdot 2 = 0\). אכן \(u \perp v\).</p>
<p>פיתגורס: \(\|u+v\|^2 = \|(0,2,2)\|^2 = 0+4+4 = 8\). ו-\(\|u\|^2 + \|v\|^2 = 2 + 6 = 8\). ✓</p>
</div>
<h4>המשלים האורתוגונלי</h4>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה</div>
<p>עבור תת-מרחב \(U\) של \(V\):</p>
            \[U^\perp = \{v \in V \mid (v,u) = 0 \text{ לכל } u \in U\}\]
          </div>
<p>\(U^\perp\) הוא תת-מרחב של \(V\). בנוסף: \(U \cap U^\perp = \{0\}\).</p>
<h3>ד. בסיס אורתוגונלי ואורתונורמלי</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרות</div>
<p><strong>בסיס אורתוגונלי:</strong> בסיס שבו כל שני וקטורים שונים אורתוגונליים: \((v_i, v_j) = 0\) לכל \(i \neq j\).</p>
<p><strong>בסיס אורתונורמלי:</strong> בסיס אורתוגונלי שבו כל וקטור הוא וקטור יחידה: \(\|v_i\| = 1\).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 1.5.2 — אי-תלות</div>
<p>כל קבוצה אורתוגונלית (שאינה מכילה את וקטור האפס) היא <strong>בלתי תלויה לינארית</strong>.</p>
</div>
<div class="logic-note">
<p><strong>יתרון:</strong> בבסיס אורתונורמלי \(\{e_1, \ldots, e_n\}\), המקדמים בהצגת \(v\) הם פשוט: \(a_i = (v, e_i)\).</p>
</div>
<h4>זהות פרסבל (Parseval)</h4>
<p>אם \(\{e_1, \ldots, e_n\}\) בסיס אורתונורמלי של \(V\), אז לכל \(u \in V\):</p>
          \[\|u\|^2 = \sum_{i=1}^{n} |(u, e_i)|^2\]
          <p>ובאופן כללי: \((u,w) = \sum_{i=1}^{n} (u,e_i)\overline{(w,e_i)}\).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – מקדמים בבסיס אורתונורמלי</div>
<p><strong>שאלה:</strong> נתון הבסיס האורתונורמלי \(B = \left\{\frac{1}{\sqrt{2}}(1,1),\, \frac{1}{\sqrt{2}}(1,-1)\right\}\) של \(\mathbb{R}^2\). מצאו את ההצגה של \(v = (3, 1)\) לפי \(B\).</p>
<p><strong>פתרון:</strong></p>
<p>נסמן \(e_1 = \frac{1}{\sqrt{2}}(1,1)\), \(e_2 = \frac{1}{\sqrt{2}}(1,-1)\).</p>
<p>\(a_1 = (v, e_1) = \frac{1}{\sqrt{2}}(3+1) = \frac{4}{\sqrt{2}} = 2\sqrt{2}\).</p>
<p>\(a_2 = (v, e_2) = \frac{1}{\sqrt{2}}(3-1) = \frac{2}{\sqrt{2}} = \sqrt{2}\).</p>
<p>אכן: \(2\sqrt{2} \cdot \frac{1}{\sqrt{2}}(1,1) + \sqrt{2} \cdot \frac{1}{\sqrt{2}}(1,-1) = (2,2) + (1,-1) = (3,1)\). ✓</p>
<p><em>אימות פרסבל:</em> \(\|v\|^2 = 9+1 = 10\), ו-\(|a_1|^2 + |a_2|^2 = 8 + 2 = 10\). ✓</p>
</div>
<h3>ה. תהליך גרם-שמידט</h3>
<div class="theorem-box">
<div class="theorem-box__label">אלגוריתם</div>
<p>קלט: סדרת וקטורים בלתי תלויים \(v_1, \ldots, v_k\).</p>
<p>פלט: סדרה אורתונורמלית \(e_1, \ldots, e_k\) הפורשת את אותו תת-מרחב.</p>
<p><strong>שלב 1:</strong> \(e_1 = \frac{v_1}{\|v_1\|}\).</p>
<p><strong>שלב \(i\):</strong> \(w_i = v_i - \sum_{j=1}^{i-1}(v_i, e_j)e_j\), ואז \(e_i = \frac{w_i}{\|w_i\|}\).</p>
</div>
<div class="example-box">
<div class="example-box__label">אינטואיציה</div>
<p>בכל שלב, מוציאים מ-\(v_i\) את ההיטלים על כל הכיוונים שכבר ״הובטחו״. מה שנשאר — \(w_i\) — אורתוגונלי לכולם. מנרמלים אותו ומקבלים \(e_i\).</p>
</div>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – תהליך גרם-שמידט</div>
<p><strong>שאלה:</strong> הפעילו את תהליך גרם-שמידט על הבסיס \(\{v_1=(1,1,0),\, v_2=(1,0,1),\, v_3=(0,1,1)\}\) ב-\(\mathbb{R}^3\).</p>
<p><strong>פתרון:</strong></p>
<p><em>שלב 1:</em> \(\|v_1\| = \sqrt{2}\), לכן \(e_1 = \frac{1}{\sqrt{2}}(1,1,0)\).</p>
<p><em>שלב 2:</em> \((v_2, e_1) = \frac{1}{\sqrt{2}}(1+0+0) = \frac{1}{\sqrt{2}}\).</p>
<p>\(w_2 = v_2 - (v_2,e_1)e_1 = (1,0,1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1,1,0) = (1,0,1) - \tfrac{1}{2}(1,1,0) = (\tfrac{1}{2}, -\tfrac{1}{2}, 1)\).</p>
<p>\(\|w_2\| = \sqrt{\tfrac{1}{4}+\tfrac{1}{4}+1} = \sqrt{\tfrac{3}{2}}\), לכן \(e_2 = \frac{1}{\sqrt{3/2}}(\tfrac{1}{2}, -\tfrac{1}{2}, 1) = \frac{1}{\sqrt{6}}(1,-1,2)\).</p>
<p><em>שלב 3:</em> \((v_3, e_1) = \frac{1}{\sqrt{2}}(0+1+0) = \frac{1}{\sqrt{2}}\), \((v_3, e_2) = \frac{1}{\sqrt{6}}(0-1+2) = \frac{1}{\sqrt{6}}\).</p>
<p>\(w_3 = (0,1,1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1,1,0) - \frac{1}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(1,-1,2) = (0,1,1) - \tfrac{1}{2}(1,1,0) - \tfrac{1}{6}(1,-1,2)\).</p>
<p>\(= (0 - \tfrac{1}{2} - \tfrac{1}{6},\; 1 - \tfrac{1}{2} + \tfrac{1}{6},\; 1 - 0 - \tfrac{1}{3}) = (-\tfrac{2}{3},\; \tfrac{2}{3},\; \tfrac{2}{3})\).</p>
<p>\(\|w_3\| = \tfrac{2}{3}\sqrt{3}\), לכן \(e_3 = \frac{1}{\sqrt{3}}(-1, 1, 1)\).</p>
<p><strong>תוצאה:</strong> \(\left\{\frac{1}{\sqrt{2}}(1,1,0),\; \frac{1}{\sqrt{6}}(1,-1,2),\; \frac{1}{\sqrt{3}}(-1,1,1)\right\}\).</p>
</div>
<h3>ו. סיכום</h3>
<table>
<thead><tr><th>מושג</th><th>תוכן מרכזי</th></tr></thead>
<tbody>
<tr><td>מכפלה פנימית</td><td>סימטריות (הרמיטיות) + לינאריות + חיוביות</td></tr>
<tr><td>מרחב אוקלידי / אוניטרי</td><td>מ.ל. מעל \(\mathbb{R}\) / \(\mathbb{C}\) + מכפלה פנימית</td></tr>
<tr><td>נורמה ומרחק</td><td>\(\|v\| = \sqrt{(v,v)}\), \(d(u,v)=\|u-v\|\)</td></tr>
<tr><td>קושי-שוורץ</td><td>\(|(u,v)| \le \|u\|\|v\|\)</td></tr>
<tr><td>אורתוגונליות</td><td>\((u,v)=0\); משפט פיתגורס</td></tr>
<tr><td>בסיס אורתונורמלי</td><td>מקדמים: \(a_i=(v,e_i)\); פרסבל: \(\|u\|^2 = \sum|(u,e_i)|^2\)</td></tr>
<tr><td>גרם-שמידט</td><td>בניית בסיס אורתונורמלי מבסיס כלשהו</td></tr>
</tbody>
</table>
</div>
</div>
<!-- ========== MEETING 2 ========== -->
<div class="summary-panel" id="s2">
<div class="summary-content">
<h2>מפגש 2 – הפירוק האורתוגונלי וההעתקה הצמודה</h2>
<h3>א. ההיטל האורתוגונלי</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 1.4.4</div>
<p>יהי \(U\) תת-מרחב של \(V\), ויהי \(v \in V\). <strong>ההיטל האורתוגונלי</strong> של \(v\) על \(U\) הוא הוקטור \(u_0 \in U\) המקיים: \(v - u_0 \perp U\).</p>
<p>ההיטל הוא הוקטור ב-\(U\) <strong>הקרוב ביותר</strong> ל-\(v\): \(d(v, U) = \|v - u_0\| \le \|v - u\|\) לכל \(u \in U\).</p>
</div>
<p>אם \(\{e_1, \ldots, e_k\}\) בסיס אורתונורמלי של \(U\), אז:</p>
          \[P_U(v) = \sum_{i=1}^{k} (v, e_i) e_i\]

          <div class="example-box">
<div class="example-box__label">שאלה לדוגמה – היטל אורתוגונלי</div>
<p><strong>שאלה:</strong> יהי \(U = \text{Span}\{(1,0,1)\}\) ב-\(\mathbb{R}^3\). מצאו את ההיטל האורתוגונלי של \(v = (2, 3, 0)\) על \(U\).</p>
<p><strong>פתרון:</strong></p>
<p>נסמן \(u = (1,0,1)\). נמצא בסיס אורתונורמלי: \(e_1 = \frac{u}{\|u\|} = \frac{1}{\sqrt{2}}(1,0,1)\).</p>
<p>\(P_U(v) = (v, e_1)e_1 = \frac{1}{\sqrt{2}}(2+0+0) \cdot \frac{1}{\sqrt{2}}(1,0,1) = 1 \cdot (1,0,1) = (1,0,1)\).</p>
<p><em>אימות:</em> \(v - P_U(v) = (1, 3, -1)\). בדיקה: \(((1,3,-1),(1,0,1)) = 1+0-1 = 0\). ✓</p>
</div>
<h3>ב. משפט הפירוק האורתוגונלי</h3>
<div class="theorem-box">
<div class="theorem-box__label">משפט 1.6.1</div>
<p>יהי \(V\) מרחב מכפלה פנימית נוצר-סופית, ויהי \(U\) תת-מרחב שלו. אזי:</p>
<p><strong>א.</strong> \(V = U \oplus U^\perp\) (סכום ישר).</p>
<p><strong>ב.</strong> \((U^\perp)^\perp = U\).</p>
</div>
<p><strong>משמעות:</strong> כל וקטור \(v \in V\) מתפרק באופן <strong>יחיד</strong> לסכום \(v = u + w\) כאשר \(u \in U\) ו-\(w \in U^\perp\).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – פירוק אורתוגונלי</div>
<p><strong>שאלה:</strong> יהי \(U = \text{Span}\{(1,1,0), (0,0,1)\}\) ב-\(\mathbb{R}^3\). פרקו את \(v = (3, 1, 2)\) לסכום \(v = u + w\) כאשר \(u \in U\) ו-\(w \in U^\perp\).</p>
<p><strong>פתרון:</strong></p>
<p>הבסיס \(\{(1,1,0),(0,0,1)\}\) כבר אורתוגונלי. ננרמל: \(e_1 = \frac{1}{\sqrt{2}}(1,1,0)\), \(e_2 = (0,0,1)\).</p>
<p>\(u = P_U(v) = (v,e_1)e_1 + (v,e_2)e_2\).</p>
<p>\((v,e_1) = \frac{1}{\sqrt{2}}(3+1) = 2\sqrt{2}\), \((v,e_2) = 2\).</p>
<p>\(u = 2\sqrt{2} \cdot \frac{1}{\sqrt{2}}(1,1,0) + 2(0,0,1) = (2,2,0) + (0,0,2) = (2,2,2)\).</p>
<p>\(w = v - u = (3,1,2)-(2,2,2) = (1,-1,0)\).</p>
<p><em>אימות:</em> \((w, e_1) = \frac{1}{\sqrt{2}}(1-1) = 0\), \((w,e_2) = 0\). ✓</p>
</div>
<h3>ג. המרחב הדואלי ומשפט ההצגה של ריס</h3>
<div class="theorem-box">
<div class="theorem-box__label">תזכורת: המרחב הדואלי</div>
<p>\(V^* = \{f: V \to F \mid f \text{ לינארית}\}\) — מרחב כל הפונקציונלים הלינאריים על \(V\).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט ההצגה של ריס</div>
<p>יהי \(V\) מרחב מכפלה פנימית נוצר-סופית. לכל פונקציונל לינארי \(f \in V^*\) קיים וקטור <strong>יחיד</strong> \(u \in V\) כך ש:</p>
            \[f(v) = (v, u) \quad \text{לכל } v \in V\]
          </div>
<p><strong>משמעות:</strong> כל פונקציונל לינארי ניתן ״להציג״ כמכפלה פנימית עם וקטור קבוע. זה מאפשר לזהות \(V^* \cong V\).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – משפט ריס</div>
<p><strong>שאלה:</strong> נתון הפונקציונל \(f: \mathbb{R}^3 \to \mathbb{R}\) המוגדר ע״י \(f(x_1, x_2, x_3) = 2x_1 - x_2 + 3x_3\). מצאו את הוקטור \(u \in \mathbb{R}^3\) שמייצג את \(f\) לפי משפט ריס (כלומר \(f(v) = (v, u)\) לכל \(v\)).</p>
<p><strong>פתרון:</strong></p>
<p>עם המכפלה הסטנדרטית, \(f(v) = (v, u)\) פירושו \(\sum v_i u_i = 2v_1 - v_2 + 3v_3\).</p>
<p>לכן \(u = (2, -1, 3)\).</p>
<p><em>אימות:</em> \(f(1,0,0) = 2 = ((1,0,0),(2,-1,3)) = 2\). ✓</p>
</div>
<h3>ד. ההעתקה הלינארית הצמודה (Adjoint)</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה</div>
<p>יהי \(T: V \to V\) העתקה לינארית. ההעתקה <strong>הצמודה</strong> \(T^*: V \to V\) היא ההעתקה היחידה המקיימת:</p>
            \[(Tv, w) = (v, T^*w) \quad \text{לכל } v, w \in V\]
          </div>
<p>קיום ויחידות \(T^*\) נובעים ממשפט ריס.</p>
<h4>תכונות ההעתקה הצמודה</h4>
<ul>
<li>\((S+T)^* = S^* + T^*\)</li>
<li>\((\alpha T)^* = \bar{\alpha} T^*\)</li>
<li>\((ST)^* = T^* S^*\)</li>
<li>\((T^*)^* = T\)</li>
<li>\(\text{Im}(T)^\perp = \ker(T^*)\)</li>
</ul>
<h4>ייצוג מטריצי</h4>
<p>אם \(A\) המטריצה המייצגת את \(T\) לפי בסיס אורתונורמלי, אז \(T^*\) מיוצגת ע״י \(A^* = \bar{A}^t\) (הצמודה-שחלופה). במרחב אוקלידי: \(A^* = A^t\).</p>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – מציאת ההעתקה הצמודה</div>
<p><strong>שאלה:</strong> נתונה \(T: \mathbb{R}^2 \to \mathbb{R}^2\) המוגדרת ע״י \(T(x,y) = (2x+3y,\; x-y)\). מצאו את \(T^*\).</p>
<p><strong>פתרון:</strong></p>
<p>הבסיס הסטנדרטי הוא אורתונורמלי. מטריצת \(T\):</p>
            \[A = \begin{pmatrix} 2 &amp; 3 \\ 1 &amp; -1 \end{pmatrix}\]
            <p>מכיוון שמדובר במרחב ממשי: \(A^* = A^t = \begin{pmatrix} 2 &amp; 1 \\ 3 &amp; -1 \end{pmatrix}\).</p>
<p>לכן \(T^*(x,y) = (2x + y,\; 3x - y)\).</p>
<p><em>אימות:</em> \((T(1,0),(0,1)) = ((2,1),(0,1)) = 1\). \(((1,0),T^*(0,1)) = ((1,0),(1,-1)) = 1\). ✓</p>
</div>
<h3>ה. העתקה צמודה לעצמה (Self-Adjoint)</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 2.2.1 — העתקה צמודה לעצמה</div>
<p>\(T\) נקראת <strong>צמודה לעצמה</strong> אם \(T^* = T\). שקול ל:</p>
            \[(Tu, v) = (u, Tv) \quad \text{לכל } u, v\]
            <p>במרחב אוקלידי (\(F = \mathbb{R}\)) נקראת גם <strong>סימטרית</strong>; במרחב אוניטרי (\(F = \mathbb{C}\)) — <strong>הרמיטית</strong>.</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 2.2.2 — מטריצה צמודה לעצמה</div>
<p>\(A \in M_n(F)\) נקראת <strong>צמודה לעצמה</strong> אם \(A = A^*\). כאשר \(F = \mathbb{R}\): <strong>סימטרית</strong> (\(A = A^t\)); כאשר \(F = \mathbb{C}\): <strong>הרמיטית</strong> (\(A = \bar{A}^t\)).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">טענה 2.2.3 — הגשר בין העתקה למטריצה</div>
<p>העתקה לינארית \(T: V \to V\) במרחב מכפלה פנימית היא <strong>צמודה לעצמה</strong> (סימטרית / הרמיטית) <strong>אם ורק אם</strong> המטריצה המייצגת את \(T\) בבסיס אורתונורמלי כלשהו של \(V\) היא מטריצה צמודה לעצמה (סימטרית / הרמיטית).</p>
</div>
<p><strong>תכונות ע.ע. של העתקה צמודה לעצמה:</strong></p>
<ul>
<li>כל הערכים העצמיים הם <strong>ממשיים</strong> (טענה 2.4.1).</li>
<li>הפולינום האופייני מתפרק לגורמים לינאריים מעל \(\mathbb{R}\) (טענה 2.4.2).</li>
<li>וקטורים עצמיים השייכים לערכים עצמיים שונים הם <strong>אורתוגונליים</strong>.</li>
</ul>
<h4>למות ומשפטים חשובים על העתקות צמודות לעצמן</h4>
<div class="theorem-box">
<div class="theorem-box__label">למה 2.2.4</div>
<p>אם \(T\) צמודה לעצמה ו-\((Tu,u) = 0\) לכל \(u \in V\), אזי \(T = 0\) (העתקת האפס).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">מסקנה 2.2.5</div>
<p>אם \(V\) מרחב <strong>אוניטרי</strong> ו-\(T: V \to V\) העתקה לינארית (לאו דווקא צמודה לעצמה) המקיימת \((Tu,u) = 0\) לכל \(u\), אז \(T = 0\).</p>
</div>
<div class="logic-note">
<p><strong>שימו לב:</strong> מסקנה 2.2.5 חלה רק במרחב אוניטרי (\(\mathbb{C}\)). במרחב אוקלידי (\(\mathbb{R}\)) יש צורך בתנאי הנוסף שהעתקה צמודה לעצמה (למה 2.2.4).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 2.2.6 — איפיון הרמיטיות</div>
<p>במרחב <strong>אוניטרי</strong>: \(T\) הרמיטית <strong>אם ורק אם</strong> \((Tu,u) \in \mathbb{R}\) לכל \(u \in V\).</p>
</div>
<h4>העתקות אי-שליליות וחיוביות (הגדרה 2.2.7)</h4>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 2.2.7</div>
<p>תהי \(T: V \to V\) העתקה צמודה לעצמה:</p>
<p><strong>א. אי-שלילית:</strong> \((Tu,u) \ge 0\) לכל \(u \in V\).</p>
<p><strong>ב. חיובית לחלוטין:</strong> אי-שלילית ו-\((Tu,u) = 0\) רק כאשר \(u = 0\).</p>
<p><strong>ג. אי-חיובית:</strong> \((Tu,u) \le 0\) לכל \(u \in V\).</p>
<p><strong>ד. שלילית לחלוטין:</strong> אי-חיובית ו-\((Tu,u) = 0\) רק כאשר \(u = 0\).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">טענה 2.2.8 — הגשר למטריצות חיוביות</div>
<p>\(T\) חיובית לחלוטין <strong>אם ורק אם</strong> המטריצה המייצגת אותה בבסיס אורתונורמלי כלשהו היא מטריצה חיובית לחלוטין.</p>
</div>
<div class="logic-note">
<p><strong>הערה חשובה:</strong> ההטלה האורתוגונלית \(P_U\) היא העתקה <strong>צמודה לעצמה</strong>: \((P_Uv, w) = (v, P_Uw)\) לכל \(v,w\). בנוסף \(P_U^2 = P_U\) (הטלה היא אידמפוטנטית).</p>
</div>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – העתקה צמודה לעצמה</div>
<p><strong>שאלה:</strong> נתונה \(A = \begin{pmatrix} 3 &amp; 1 \\ 1 &amp; 3 \end{pmatrix}\). הוכיחו ש-\(A\) סימטרית, מצאו את ערכיה העצמיים ואמתו שהם ממשיים ושהו.ע. אורתוגונליים.</p>
<p><strong>פתרון:</strong></p>
<p>\(A^t = A\), לכן \(A\) סימטרית. ✓</p>
<p>פולינום אופייני: \(\det(A - \lambda I) = (3-\lambda)^2 - 1 = \lambda^2 - 6\lambda + 8 = (\lambda-2)(\lambda-4)\).</p>
<p>ע.ע.: \(\lambda_1 = 2,\; \lambda_2 = 4\) — שניהם ממשיים. ✓</p>
<p>ו.ע. עבור \(\lambda_1=2\): \((A-2I)v=0 \Rightarrow \begin{pmatrix}1&amp;1\\1&amp;1\end{pmatrix}v=0\), לכן \(v_1 = (1,-1)\).</p>
<p>ו.ע. עבור \(\lambda_2=4\): \((A-4I)v=0 \Rightarrow \begin{pmatrix}-1&amp;1\\1&amp;-1\end{pmatrix}v=0\), לכן \(v_2 = (1,1)\).</p>
<p>אימות אורתוגונליות: \((v_1, v_2) = 1 \cdot 1 + (-1) \cdot 1 = 0\). ✓</p>
</div>
<h3>ו. סיכום</h3>
<table>
<thead><tr><th>מושג</th><th>תוכן מרכזי</th></tr></thead>
<tbody>
<tr><td>היטל אורתוגונלי</td><td>\(P_U(v) = \sum (v,e_i)e_i\); הנקודה הקרובה ביותר ב-\(U\)</td></tr>
<tr><td>הפירוק</td><td>\(V = U \oplus U^\perp\), \((U^\perp)^\perp = U\)</td></tr>
<tr><td>משפט ריס</td><td>\(f(v) = (v,u)\) — כל פונקציונל הוא מכפלה פנימית</td></tr>
<tr><td>צמודה</td><td>\((Tv,w)=(v,T^*w)\), במטריצות: \(A^* = \bar{A}^t\)</td></tr>
<tr><td>צמודה לעצמה</td><td>\(T=T^*\), ע.ע. ממשיים, ו.ע. מע.ע. שונים ⊥</td></tr>
</tbody>
</table>
</div>
</div>
<!-- ========== MEETING 3 ========== -->
<div class="summary-panel" id="s3">
<div class="summary-content">
<h2>מפגש 3 – העתקות אוניטריות, נורמליות ולכסון אוניטרי</h2>
<h3>א. העתקה אוניטרית</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה</div>
<p>העתקה לינארית \(T: V \to V\) נקראת <strong>אוניטרית</strong> (אורתוגונלית במרחב אוקלידי) אם:</p>
            \[(Tu, Tv) = (u, v) \quad \text{לכל } u, v \in V\]
            <p>שקול ל: \(T^* T = I\) (כלומר \(T^* = T^{-1}\)).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 2.3.2 — שקילויות</div>
<p>התנאים הבאים שקולים:</p>
<ol>
<li>\(T^*T = I\) (כלומר \(T^* = T^{-1}\)).</li>
<li>\((Tu,Tv) = (u,v)\) לכל \(u,v\) (משמרת מכפלה פנימית).</li>
<li>\(\|Tv\| = \|v\|\) לכל \(v\) (משמרת נורמות / איזומטריה).</li>
<li>\(T\) מעבירה בסיס אורתונורמלי לבסיס אורתונורמלי.</li>
</ol>
</div>
<p><strong>תכונות נוספות:</strong></p>
<ul>
<li>\(T\) משמרת מרחקים ואורתוגונליות.</li>
<li>כל שורשי הפולינום האופייני (ובפרט הע.ע.) מקיימים \(|\lambda| = 1\) (טענה 2.4.3).</li>
<li>\(T\) הפיכה תמיד.</li>
<li>\(|\det(T)| = 1\). במרחב אוקלידי: \(\det(T) = \pm 1\).</li>
</ul>
<h4>מטריצה אוניטרית</h4>
<p>\(U^*U = I\) — העמודות (וגם השורות) מהוות בסיס אורתונורמלי (משפט 2.3.6). במרחב אוקלידי: <strong>מטריצה אורתוגונלית</strong> \(Q^tQ = I\).</p>
<div class="theorem-box">
<div class="theorem-box__label">משפט 2.3.5 — הגשר בין העתקה למטריצה</div>
<p>\(T\) העתקה אוניטרית (אורתוגונלית) <strong>אם ורק אם</strong> המטריצה המייצגת את \(T\) לפי בסיס אורתונורמלי כלשהו היא מטריצה אוניטרית (אורתוגונלית).</p>
</div>
<div class="logic-note">
<p><strong>מטריצת מעבר:</strong> מטריצת המעבר בין שני בסיסים אורתונורמליים היא תמיד מטריצה אוניטרית (משפט 2.3.7).</p>
</div>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – מטריצה אוניטרית</div>
<p><strong>שאלה:</strong> בדקו אם \(A = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 &amp; 1 \\ -1 &amp; 1 \end{pmatrix}\) אורתוגונלית, ומצאו את ערכיה העצמיים.</p>
<p><strong>פתרון:</strong></p>
<p>\(A^tA = \frac{1}{2}\begin{pmatrix}1 &amp; -1 \\ 1 &amp; 1\end{pmatrix}\begin{pmatrix}1 &amp; 1 \\ -1 &amp; 1\end{pmatrix} = \frac{1}{2}\begin{pmatrix}2 &amp; 0 \\ 0 &amp; 2\end{pmatrix} = I\). ✓ — אכן אורתוגונלית.</p>
<p>ע.ע.: \(\det(A - \lambda I) = 0\). \(A\) היא סיבוב בזווית \(45°\), לכן \(\lambda = \frac{1}{\sqrt{2}}(1 \pm i)\) (ע.ע. מרוכבים, שניהם מקיימים \(|\lambda| = 1\)).</p>
<p>הפולינום האופייני: \(\lambda^2 - \sqrt{2}\lambda + 1 = 0\), \(\lambda = \frac{\sqrt{2} \pm \sqrt{2-4}}{2} = \frac{\sqrt{2} \pm i\sqrt{2}}{2} = \frac{1\pm i}{\sqrt{2}}\). אכן \(|\lambda| = 1\). ✓</p>
</div>
<h3>ב. העתקה אנטי-צמודה (Skew-Adjoint)</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה</div>
<p>\(T\) נקראת <strong>אנטי-צמודה לעצמה</strong> אם \(T^* = -T\).</p>
</div>
<p><strong>תכונות:</strong></p>
<ul>
<li>הערכים העצמיים הם מדומים טהורים (או אפס).</li>
<li>במטריצות: \(A^* = -A\).</li>
</ul>
<h3>ג. העתקה נורמלית</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה</div>
<p>\(T\) נקראת <strong>נורמלית</strong> אם \(T^*T = TT^*\) (מתחלפת עם הצמודה שלה).</p>
</div>
<div class="logic-note">
<p>כל העתקה צמודה לעצמה היא נורמלית (\(T^*T = T^2 = TT^*\)). כל העתקה אוניטרית היא נורמלית (\(T^*T = I = TT^*\)). כל העתקה אנטי-צמודה היא נורמלית.</p>
</div>
<h4>לכסון אוניטרי — הגדרות ומשפטי גישור</h4>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 3.1.1 — לכסינה אוניטרית</div>
<p><strong>מטריצה:</strong> \(A\) לכסינה אוניטרית אם קיימת מטריצה אוניטרית \(Q\) כך ש-\(Q^{-1}AQ = D\) אלכסונית (כלומר \(Q^*AQ = D\)).</p>
<p><strong>העתקה:</strong> \(T\) לכסינה אוניטרית אם קיים <strong>בסיס אורתונורמלי</strong> שבו \(T\) מיוצגת ע״י מטריצה אלכסונית.</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 3.1.3 — הגשר בין העתקה למטריצה</div>
<p>\(T\) לכסינה אוניטרית <strong>אם ורק אם</strong> המטריצה \([T]_B\) (לפי בסיס אורתונורמלי \(B\) נתון) היא לכסינה אוניטרית.</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">טענה 3.1.5</div>
<p>העתקה (מטריצה) לכסינה אוניטרית היא <strong>נורמלית</strong>. במקרה \(F = \mathbb{R}\), היא אף <strong>סימטרית</strong>.</p>
</div>
<h4>שילוש ולכסון</h4>
<h4>למת שילוש שור (Schur)</h4>
<div class="theorem-box">
<div class="theorem-box__label">למה 3.2.2</div>
<p>אם הפולינום האופייני של \(T\) מתפרק לגורמים לינאריים (בפרט: תמיד מעל \(\mathbb{C}\)), אז קיים <strong>בסיס אורתונורמלי</strong> שבו מטריצת \(T\) היא <strong>משולשת עליונה</strong>.</p>
</div>
<div class="logic-note">
<p>למה זו היא כלי עזר מרכזי: נורמליות + משולשיות ⟹ אלכסוניות (למה 3.2.3: מטריצה נורמלית ומשולשת היא בהכרח אלכסונית).</p>
</div>
<h3>ד. משפט הלכסון האוניטרי</h3>
<div class="theorem-box">
<div class="theorem-box__label">משפט 3.2.1 (המשפט המרכזי)</div>
<p>יהי \(V\) מרחב מכפלה פנימית נוצר-סופית מעל \(\mathbb{C}\), ויהי \(T: V \to V\) העתקה לינארית. אזי:</p>
<p>\(T\) <strong>ניתנת ללכסון אוניטרי</strong> (קיים בסיס אורתונורמלי של וקטורים עצמיים) <strong>אם ורק אם</strong> \(T\) <strong>נורמלית</strong>.</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">למה 3.2.5 — ו.ע. של נורמלית הם ו.ע. של הצמודה</div>
<p>אם \(T\) נורמלית ו-\(v\) ו.ע. של \(T\) השייך לע.ע. \(\lambda\), אז \(v\) הוא גם ו.ע. של \(T^*\), השייך לע.ע. \(\bar{\lambda}\).</p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 3.2.6 — אורתוגונליות מרחבים עצמיים</div>
<p>אם \(T\) נורמלית ו-\(\lambda \neq \mu\) ערכים עצמיים שונים, אז \(V_\lambda \perp V_\mu\) (מרחבים עצמיים של ע.ע. שונים <strong>אורתוגונליים</strong> זה לזה).</p>
</div>
<div class="warning-box">
<div class="warning-box__label">שימו לב</div>
<p>המשפט דורש שהשדה הוא \(\mathbb{C}\). במרחב אוקלידי (מעל \(\mathbb{R}\)), לכסון אוניטרי אפשרי אם ורק אם \(T\) <strong>סימטרית</strong> (צמודה לעצמה).</p>
</div>
<h4>מסקנות חשובות</h4>
<ol>
<li>כל מטריצה הרמיטית (\(A = A^*\)) ניתנת ללכסון אוניטרי, והע.ע. כולם ממשיים.</li>
<li>כל מטריצה אוניטרית (\(U^*U = I\)) ניתנת ללכסון אוניטרי, והע.ע. מקיימים \(|\lambda|=1\).</li>
<li>כל מטריצה אנטי-הרמיטית (\(A^* = -A\)) ניתנת ללכסון אוניטרי.</li>
</ol>
<h3>ה. סיווג סוגי העתקות</h3>
<table>
<thead><tr><th>סוג</th><th>תנאי</th><th>ע.ע.</th><th>מטריצה</th></tr></thead>
<tbody>
<tr><td>צמודה לעצמה</td><td>\(T^*=T\)</td><td>ממשיים</td><td>\(A=A^*\) (הרמיטית)</td></tr>
<tr><td>אנטי-צמודה</td><td>\(T^*=-T\)</td><td>מדומים</td><td>\(A^*=-A\)</td></tr>
<tr><td>אוניטרית</td><td>\(T^*T=I\)</td><td>\(|\lambda|=1\)</td><td>\(U^*U=I\)</td></tr>
<tr><td>נורמלית</td><td>\(T^*T=TT^*\)</td><td>כלליים</td><td>\(A^*A=AA^*\)</td></tr>
<tr><td>אי-שלילית</td><td>\(T^*=T\), \((Tv,v)\ge 0\)</td><td>\(\lambda \ge 0\)</td><td>הרמיטית אי-שלילית</td></tr>
<tr><td>חיובית</td><td>\(T^*=T\), \((Tv,v)&gt; 0\)</td><td>\(\lambda &gt; 0\)</td><td>הרמיטית חיובית</td></tr>
</tbody>
</table>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – לכסון אוניטרי</div>
<p><strong>שאלה:</strong> נתונה \(A = \begin{pmatrix} 2 &amp; 1 \\ 1 &amp; 2 \end{pmatrix}\). בצעו לכסון אוניטרי (מצאו מטריצה אורתוגונלית \(Q\) כך ש-\(Q^tAQ\) אלכסונית).</p>
<p><strong>פתרון:</strong></p>
<p>\(A = A^t\), לכן \(A\) סימטרית — ניתנת ללכסון אורתוגונלי.</p>
<p>ע.ע.: \(\det(A-\lambda I) = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda-1)(\lambda-3)\). לכן \(\lambda_1 = 1,\; \lambda_2 = 3\).</p>
<p>ו.ע. עבור \(\lambda_1=1\): \((A-I)v = 0 \Rightarrow \begin{pmatrix}1&amp;1\\1&amp;1\end{pmatrix}v=0\), לכן \(v_1 = (1,-1)\).</p>
<p>ו.ע. עבור \(\lambda_2=3\): \((A-3I)v = 0 \Rightarrow \begin{pmatrix}-1&amp;1\\1&amp;-1\end{pmatrix}v=0\), לכן \(v_2 = (1,1)\).</p>
<p>נרמול: \(q_1 = \frac{1}{\sqrt{2}}(1,-1),\; q_2 = \frac{1}{\sqrt{2}}(1,1)\).</p>
            \[Q = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 &amp; 1 \\ -1 &amp; 1 \end{pmatrix}, \quad Q^tAQ = \begin{pmatrix} 1 &amp; 0 \\ 0 &amp; 3 \end{pmatrix}\]
          </div>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – בדיקת נורמליות</div>
<p><strong>שאלה:</strong> בדקו אם \(A = \begin{pmatrix} 1 &amp; i \\ -i &amp; 1 \end{pmatrix}\) ניתנת ללכסון אוניטרי.</p>
<p><strong>פתרון:</strong></p>
<p>\(A^* = \bar{A}^t = \begin{pmatrix} 1 &amp; i \\ -i &amp; 1 \end{pmatrix} = A\). כלומר \(A\) הרמיטית (\(A=A^*\)), ולכן נורמלית, ולכן ניתנת ללכסון אוניטרי. ✓</p>
<p>מכיוון שהיא הרמיטית, ע.ע. ממשיים: \(\det(A-\lambda I) = (1-\lambda)^2 - i(-i) = (1-\lambda)^2 - 1 = \lambda^2 - 2\lambda = \lambda(\lambda-2)\).</p>
<p>ע.ע.: \(\lambda_1 = 0,\; \lambda_2 = 2\). שניהם ממשיים. ✓</p>
</div>
<h3>ו. סיכום</h3>
<table>
<thead><tr><th>מושג</th><th>תוכן מרכזי</th></tr></thead>
<tbody>
<tr><td>אוניטרית</td><td>משמרת מכ״פ / נורמות / אורתוגונליות; \(T^*=T^{-1}\); \(|\lambda|=1\)</td></tr>
<tr><td>אנטי-צמודה</td><td>\(T^*=-T\); ע.ע. מדומים טהורים</td></tr>
<tr><td>נורמלית</td><td>\(T^*T = TT^*\); מקיפה: צמודה, אנטי, אוניטרית</td></tr>
<tr><td>שילוש שור</td><td>מעל \(\mathbb{C}\): קיים ב.א.נ. שבו \(T\) משולשת עליונה</td></tr>
<tr><td>לכסון אוניטרי</td><td>מעל \(\mathbb{C}\): \(T\) נורמלית. מעל \(\mathbb{R}\): \(T\) סימטרית</td></tr>
</tbody>
</table>
</div>
</div>
<!-- ========== MEETING 4 ========== -->
<div class="summary-panel" id="s4">
<div class="summary-content">
<h2>מפגש 4 – המשפט הספקטרלי ויישומים</h2>
<h3>א. המשפט הספקטרלי</h3>
<div class="theorem-box">
<div class="theorem-box__label">המשפט הספקטרלי (גרסה 1 – פירוק)</div>
<p>יהי \(V\) מרחב מכפלה פנימית נוצר-סופית מעל \(\mathbb{C}\), ויהי \(T\) אופרטור נורמלי על \(V\). אם \(\lambda_1, \ldots, \lambda_k\) הם הערכים העצמיים השונים של \(T\), ו-\(P_i\) ההטלה האורתוגונלית על מרחב הע.ע. \(V_{\lambda_i}\), אז:</p>
            \[T = \lambda_1 P_1 + \lambda_2 P_2 + \cdots + \lambda_k P_k\]
            <p>כאשר:</p>
<ul>
<li>\(P_i P_j = 0\) לכל \(i \neq j\) (ההטלות אורתוגונליות זו לזו).</li>
<li>\(P_1 + P_2 + \cdots + P_k = I\) (פירוק היחידה).</li>
<li>\(P_i^* = P_i\) ו-\(P_i^2 = P_i\) (כל אחת הטלה אורתוגונלית).</li>
</ul>
</div>
<div class="theorem-box">
<div class="theorem-box__label">המשפט הספקטרלי (גרסה 2 – לכסון)</div>
<p>שקולות:</p>
<ol>
<li>קיים בסיס <strong>אורתונורמלי</strong> של ו.ע. של \(T\).</li>
<li>\(T = \sum_{i=1}^{k} \lambda_i P_i\) כנ״ל.</li>
<li>\(T\) נורמלית.</li>
</ol>
</div>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – פירוק ספקטרלי</div>
<p><strong>שאלה:</strong> מצאו את הפירוק הספקטרלי של \(A = \begin{pmatrix} 5 &amp; 2 \\ 2 &amp; 2 \end{pmatrix}\).</p>
<p><strong>פתרון:</strong></p>
<p>\(A\) סימטרית, ולכן נורמלית. פולינום אופייני: \(\lambda^2 - 7\lambda + 6 = (\lambda-1)(\lambda-6)\).</p>
<p>ע.ע.: \(\lambda_1 = 1,\; \lambda_2 = 6\).</p>
<p>ו.ע. מנורמלים: \(v_1 = \frac{1}{\sqrt{5}}(1,-2)\) עבור \(\lambda_1=1\), \(v_2 = \frac{1}{\sqrt{5}}(2,1)\) עבור \(\lambda_2=6\).</p>
<p>הטלות אורתוגונליות (\(P_i = v_i v_i^t\)):</p>
            \[P_1 = \frac{1}{5}\begin{pmatrix}1 &amp; -2 \\ -2 &amp; 4\end{pmatrix}, \quad P_2 = \frac{1}{5}\begin{pmatrix}4 &amp; 2 \\ 2 &amp; 1\end{pmatrix}\]
            <p><em>אימות:</em> \(P_1 + P_2 = I\) ✓, \(P_1 P_2 = 0\) ✓.</p>
<p>הפירוק הספקטרלי:</p>
            \[A = 1 \cdot P_1 + 6 \cdot P_2 = \frac{1}{5}\begin{pmatrix}1&amp;-2\\-2&amp;4\end{pmatrix} + \frac{6}{5}\begin{pmatrix}4&amp;2\\2&amp;1\end{pmatrix} = \frac{1}{5}\begin{pmatrix}25&amp;10\\10&amp;10\end{pmatrix} = \begin{pmatrix}5&amp;2\\2&amp;2\end{pmatrix} \checkmark\]
          </div>
<h3>ב. שימושים של הפירוק הספקטרלי</h3>
<h4>חישוב חזקות</h4>
<p>אם \(T = \sum \lambda_i P_i\), אז:</p>
          \[T^n = \sum_{i=1}^{k} \lambda_i^n P_i\]

          <h4>חישוב ההופכי</h4>
<p>אם \(T\) הפיכה (כל \(\lambda_i \neq 0\)):</p>
          \[T^{-1} = \sum_{i=1}^{k} \frac{1}{\lambda_i} P_i\]

          <h4>חישוב פולינומים</h4>
<p>לכל פולינום \(p\):</p>
          \[p(T) = \sum_{i=1}^{k} p(\lambda_i) P_i\]

          <div class="example-box">
<div class="example-box__label">שאלה לדוגמה – חזקה באמצעות פירוק ספקטרלי</div>
<p><strong>שאלה:</strong> חשבו את \(A^3\) עבור \(A = \begin{pmatrix} 5 &amp; 2 \\ 2 &amp; 2 \end{pmatrix}\) מהדוגמה הקודמת.</p>
<p><strong>פתרון:</strong></p>
<p>מהפירוק הספקטרלי: \(A^3 = 1^3 P_1 + 6^3 P_2 = P_1 + 216 P_2\).</p>
            \[A^3 = \frac{1}{5}\begin{pmatrix}1&amp;-2\\-2&amp;4\end{pmatrix} + \frac{216}{5}\begin{pmatrix}4&amp;2\\2&amp;1\end{pmatrix} = \frac{1}{5}\begin{pmatrix}865&amp;430\\430&amp;220\end{pmatrix} = \begin{pmatrix}173&amp;86\\86&amp;44\end{pmatrix}\]
          </div>
<h4>סיווג באמצעות ע.ע. (משפט 3.3.1)</h4>
<div class="theorem-box">
<div class="theorem-box__label">משפט 3.3.1</div>
<p>יהי \(T\) אופרטור <strong>נורמלי</strong>:</p>
<ul>
<li>אם כל ע.ע. <strong>ממשיים</strong> — אז \(T\) <strong>צמודה לעצמה</strong>.</li>
<li>אם כל ע.ע. מקיימים \(|\lambda|=1\) — אז \(T\) <strong>אוניטרית</strong>.</li>
<li>אם כל ע.ע. מדומים טהורים — אז \(T\) <strong>אנטי-צמודה</strong>.</li>
</ul>
</div>
<h3>ג. מטריצות אי-שליליות וחיוביות</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרות</div>
<p>העתקה צמודה לעצמה \(T\) נקראת:</p>
<p><strong>אי-שלילית:</strong> \((Tv,v) \ge 0\) לכל \(v\). שקול ל: כל הע.ע. אי-שליליים.</p>
<p><strong>חיובית לחלוטין:</strong> \((Tv,v) &gt; 0\) לכל \(v \neq 0\). שקול ל: כל הע.ע. חיוביים ממש.</p>
</div>
<div class="example-box">
<div class="example-box__label">שורש ריבועי</div>
<p>אם \(T\) אי-שלילית וצמודה לעצמה עם \(T = \sum \lambda_i P_i\), אז:</p>
            \[\sqrt{T} = \sum_{i=1}^{k} \sqrt{\lambda_i} P_i\]
            <p>מקיימת \((\sqrt{T})^2 = T\) והיא גם אי-שלילית וצמודה לעצמה.</p>
</div>
<div class="example-box">
<div class="example-box__label">שאלה לדוגמה – שורש ריבועי וחיוביות</div>
<p><strong>שאלה:</strong> נתונה \(A = \begin{pmatrix} 5 &amp; 2 \\ 2 &amp; 2 \end{pmatrix}\). הוכיחו שהיא חיובית לחלוטין ומצאו את \(\sqrt{A}\).</p>
<p><strong>פתרון:</strong></p>
<p>\(A\) סימטרית עם ע.ע. \(\lambda_1 = 1 &gt; 0\) ו-\(\lambda_2 = 6 &gt; 0\). לכן \(A\) חיובית לחלוטין (משפט 3.3.2). ✓</p>
<p>מהפירוק הספקטרלי:</p>
            \[\sqrt{A} = \sqrt{1} \cdot P_1 + \sqrt{6} \cdot P_2 = \frac{1}{5}\begin{pmatrix}1&amp;-2\\-2&amp;4\end{pmatrix} + \frac{\sqrt{6}}{5}\begin{pmatrix}4&amp;2\\2&amp;1\end{pmatrix} = \frac{1}{5}\begin{pmatrix}1+4\sqrt{6} &amp; -2+2\sqrt{6} \\ -2+2\sqrt{6} &amp; 4+\sqrt{6}\end{pmatrix}\]
            <p><em>אימות:</em> \((\sqrt{A})^2 = 1 \cdot P_1 + 6 \cdot P_2 = A\). ✓</p>
</div>
<h4>פירוק קוטבי (Polar Decomposition)</h4>
<div class="theorem-box">
<div class="theorem-box__label">משפט 3.3.7</div>
<p>כל העתקה <strong>הפיכה</strong> \(T\) ניתנת לכתיבה בצורה \(T = HU\), כאשר \(H\) צמודה לעצמה ואי-שלילית ו-\(U\) אוניטרית.</p>
<p>הבניה: \(H = \sqrt{T^*T}\) ו-\(U = H^{-1}T\).</p>
</div>
<div class="logic-note">
<p>זהו אנלוג של הייצוג הקוטבי של מספר מרוכב \(z = r e^{i\theta}\), כאשר \(r = |z| \ge 0\) ו-\(|e^{i\theta}| = 1\).</p>
</div>
<h3>ד. מושגים מקבילים במטריצות</h3>
<table>
<thead><tr><th>העתקה</th><th>מטריצה</th></tr></thead>
<tbody>
<tr><td>צמודה לעצמה (\(T=T^*\))</td><td>הרמיטית (\(A=A^*\))</td></tr>
<tr><td>אנטי-צמודה (\(T^*=-T\))</td><td>אנטי-הרמיטית (\(A^*=-A\))</td></tr>
<tr><td>אוניטרית (\(T^*T=I\))</td><td>מטריצה אוניטרית (\(U^*U=I\))</td></tr>
<tr><td>נורמלית (\(T^*T=TT^*\))</td><td>מטריצה נורמלית (\(A^*A=AA^*\))</td></tr>
<tr><td>אי-שלילית</td><td>\(A=A^*\) וכל ע.ע. \(\ge 0\)</td></tr>
<tr><td>חיובית לחלוטין</td><td>\(A=A^*\) וכל ע.ע. \(&gt; 0\)</td></tr>
</tbody>
</table>
<h3>ה. סיכום</h3>
<table>
<thead><tr><th>נושא</th><th>תוכן מרכזי</th></tr></thead>
<tbody>
<tr><td>המשפט הספקטרלי</td><td>\(T = \sum \lambda_i P_i\) עם הטלות אורתוגונליות</td></tr>
<tr><td>פירוק היחידה</td><td>\(\sum P_i = I\), \(P_i P_j = 0\)</td></tr>
<tr><td>שימושים</td><td>חזקות \(T^n\), הופכי \(T^{-1}\), פולינומים \(p(T)\), שורש \(\sqrt{T}\)</td></tr>
<tr><td>סיווג מע.ע. (3.3.1)</td><td>ע.ע. ממשיים ⟹ צמודה לעצמה; \(|\lambda|=1\) ⟹ אוניטרית</td></tr>
<tr><td>אי-שלילית / חיובית</td><td>\((Tv,v)\ge 0 \iff \lambda_i \ge 0\); חיובית: \(\lambda_i &gt; 0\)</td></tr>
<tr><td>פירוק קוטבי</td><td>\(T = HU\) עם \(H\) א״ש אי-שלילית ו-\(U\) אוניטרית</td></tr>
</tbody>
</table>
</div>
</div>
<!-- ========== MEETING 4.5 ========== -->
<div class="summary-panel" id="s45">
<div class="summary-content">
<h2>מפגש 4.5 – תבניות בילינאריות ותבניות ריבועיות</h2>
<div class="logic-note">
<p>
              יחידה זו פותחת את פרק 4 בכרך ב. בניגוד לפרקים הקודמים שעסקו במכפלה פנימית,
              כאן עובדים מעל שדה כללי \(F\), ולכן התבנית אינה חייבת להיות חיובית ואינה חייבת להיות סימטרית.
              המטרה המרכזית: להבין איך מתארים תבנית בילינארית או ריבועית באמצעות מטריצה, ואיך המטריצה משתנה כשמחליפים בסיס.
            </p>
</div>
<h3>א. תבנית לינארית ותבנית בילינארית</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 4.1.1 – תבנית לינארית</div>
<p>
              אם \(V\) מרחב לינארי מעל שדה \(F\), אז העתקה לינארית
              \[
                \ell:V \to F
              \]
              נקראת <strong>תבנית לינארית</strong> או פונקציונל לינארי על \(V\).
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 4.1.2 – תבנית בילינארית</div>
<p>
              פונקציה
              \[
                h:V \times V \to F
              \]
              נקראת <strong>תבנית בילינארית</strong> אם היא לינארית בכל אחד משני המשתנים בנפרד:
            </p>
<ul>
<li>\(h(u_1+u_2,w)=h(u_1,w)+h(u_2,w)\)</li>
<li>\(h(\lambda u,w)=\lambda h(u,w)\)</li>
<li>\(h(u,w_1+w_2)=h(u,w_1)+h(u,w_2)\)</li>
<li>\(h(u,\lambda w)=\lambda h(u,w)\)</li>
</ul>
</div>
<div class="warning-box">
<div class="warning-box__label">הבדל חשוב ממכפלה פנימית</div>
<p>
              מכפלה פנימית מעל \(\mathbb{C}\) אינה תבנית בילינארית רגילה, כי באחד הרכיבים מופיע צמוד.
              תבנית בילינארית היא לינארית ממש בשני הרכיבים, בלי צמודים.
            </p>
</div>
<h3>ב. פולינום בילינארי ומטריצה מייצגת</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 4.1.3 – פולינום בילינארי הומוגני</div>
<p>
              ביטוי מהצורה
              \[
                p(x_1,\ldots,x_n;y_1,\ldots,y_n)
                =
                \sum_{i=1}^{n}\sum_{j=1}^{n} a_{ij}x_i y_j
              \]
              נקרא פולינום בילינארי הומוגני מעל \(F\).
            </p>
<p>
              בצורה מטריציונית:
              \[
                p(X,Y)=X^tAY
              \]
              כאשר \(A=(a_{ij})\).
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">טענה 4.1.4 ומשפט 4.1.5 – מטריצה מייצגת של תבנית בילינארית</div>
<p>
              יהי \(B=(v_1,\ldots,v_n)\) בסיס של \(V\). לכל תבנית בילינארית \(h\) קיימת מטריצה יחידה
              \[
                [h]_B=A
              \]
              כך שלכל \(u,w\in V\):
              \[
                h(u,w)=[u]_B^t A [w]_B.
              \]
            </p>
<p>
              איברי המטריצה נקבעים על ידי ערכי התבנית על זוגות איברי הבסיס:
              \[
                a_{ij}=h(v_i,v_j).
              \]
            </p>
</div>
<div class="example-box">
<div class="example-box__label">דוגמה – איך בונים את המטריצה</div>
<p>
              אם \(B=(v_1,v_2)\), אז:
              \[
                [h]_B=
                \begin{pmatrix}
                  h(v_1,v_1) &amp; h(v_1,v_2)\\
                  h(v_2,v_1) &amp; h(v_2,v_2)
                \end{pmatrix}.
              \]
            </p>
<p>
              לכן כדי למצוא מטריצה מייצגת לא צריך לנחש פולינום; מספיק לחשב את \(h\) על כל זוגות איברי הבסיס.
            </p>
</div>
<h3>ג. סימטריות ואנטי־סימטריות</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 4.2.1 – תבנית סימטרית</div>
<p>
              תבנית בילינארית \(h\) נקראת <strong>סימטרית</strong> אם:
              \[
                h(u,w)=h(w,u)
              \]
              לכל \(u,w\in V\).
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">למה 4.2.2</div>
<p>
              תבנית בילינארית \(h\) היא סימטרית אם ורק אם המטריצה שלה בבסיס כלשהו היא מטריצה סימטרית:
              \[
                [h]_B^t=[h]_B.
              \]
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 4.2.3 – תבנית אנטי־סימטרית</div>
<p>
              תבנית בילינארית \(h\) נקראת <strong>אנטי־סימטרית</strong> אם:
              \[
                h(u,w)=-h(w,u)
              \]
              לכל \(u,w\in V\).
            </p>
<p>
              במקרה כזה, בפרט:
              \[
                h(u,u)=0
              \]
              לכל \(u\in V\), כל עוד עובדים בשדה שבו \(2\neq 0\).
            </p>
</div>
<h3>ד. תבנית ריבועית</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 4.3.1 – תבנית ריבועית מסומכת</div>
<p>
              אם \(h:V\times V\to F\) תבנית בילינארית, אז הפונקציה
              \[
                q:V\to F,\qquad q(u)=h(u,u)
              \]
              נקראת <strong>התבנית הריבועית המסומכת</strong> ל-\(h\).
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 4.3.4 – התאמה בין תבניות סימטריות לתבניות ריבועיות</div>
<p>
              קיימת התאמה חד־חד־ערכית בין תבניות בילינאריות סימטריות לבין תבניות ריבועיות.
              אם \(h\) סימטרית ו-\(q(u)=h(u,u)\), אז:
              \[
                h(u,w)=\frac{1}{2}\big(q(u+w)-q(u)-q(w)\big).
              \]
            </p>
<p>
              נוסחה זו נקראת לפעמים <strong>נוסחת הקיטוב</strong>.
            </p>
</div>
<div class="logic-note">
<p>
              אם \(h\) אינה סימטרית, אז \(q(u)=h(u,u)\) תלויה רק בחלק הסימטרי של \(h\).
              ברמת מטריצות, אם \(A=[h]_B\), אז המטריצה הסימטרית של \(q\) היא:
              \[
                \frac{1}{2}(A+A^t).
              \]
              החלק האנטי־סימטרי \(\frac{1}{2}(A-A^t)\) אינו משפיע על \(q\).
            </p>
</div>
<h3>ה. תבנית לא־מנוונת</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה – לא־מנוונות</div>
<p>
              תבנית בילינארית \(h\) נקראת <strong>לא־מנוונת</strong> אם:
              \[
                h(u,w)=0 \text{ לכל } u\in V \quad \Rightarrow \quad w=0.
              \]
            </p>
<p>
              בממד סופי, אם \(A=[h]_B\), אז:
              \[
                h \text{ לא־מנוונת} \iff A \text{ הפיכה} \iff \rho(A)=\dim V.
              \]
            </p>
</div>
<h3>ו. הצגת פונקציונל לינארי בעזרת תבנית לא־מנוונת</h3>
<div class="theorem-box">
<div class="theorem-box__label">רעיון מרכזי</div>
<p>
              אם \(h\) תבנית בילינארית לא־מנוונת ו-\(\ell:V\to F\) פונקציונל לינארי,
              אז קיים וקטור יחיד \(v_0\in V\) כך שלכל \(u\in V\):
              \[
                \ell(u)=h(u,v_0).
              \]
            </p>
<p>
              זה דומה למשפט ההצגה של ריס, אבל כאן המכפלה הפנימית מוחלפת בתבנית בילינארית לא־מנוונת.
            </p>
</div>
<h3>ז. צמוד ביחס לתבנית בילינארית</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה – צמוד ביחס ל-\(h\)</div>
<p>
              תהי \(T:V\to V\) העתקה לינארית, ו-\(h\) תבנית בילינארית לא־מנוונת.
              הצמוד של \(T\) ביחס ל-\(h\) הוא העתקה \(S:V\to V\) המקיימת:
              \[
                h(Tu,w)=h(u,Sw)
              \]
              לכל \(u,w\in V\).
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">נוסחה מטריציונית</div>
<p>
              אם \(A=[h]_B\), \(C=[T]_B\), ו-\(D=[S]_B\), אז:
              \[
                D=A^{-1}C^tA.
              \]
            </p>
<p>
              במקרה שבו \(h\) היא המכפלה הסקלרית הסטנדרטית, \(A=I\), ולכן \(D=C^t\), בדיוק כמו הצמוד הרגיל במרחב ממשי.
            </p>
</div>
<h3>ח. סיכום מפגש 4.5</h3>
<table>
<thead>
<tr>
<th>נושא</th>
<th>מה צריך לדעת</th>
<th>מספרים בספר</th>
</tr>
</thead>
<tbody>
<tr>
<td>תבנית לינארית</td>
<td>\(\ell:V\to F\) לינארית</td>
<td>הגדרה 4.1.1</td>
</tr>
<tr>
<td>תבנית בילינארית</td>
<td>לינאריות בכל משתנה בנפרד</td>
<td>הגדרה 4.1.2</td>
</tr>
<tr>
<td>מטריצה מייצגת</td>
<td>\(h(u,w)=[u]_B^t[h]_B[w]_B\)</td>
<td>טענה 4.1.4, משפט 4.1.5, מסקנה 4.1.6</td>
</tr>
<tr>
<td>סימטריות</td>
<td>\(h(u,w)=h(w,u)\), שקול למטריצה סימטרית</td>
<td>הגדרה 4.2.1, למה 4.2.2</td>
</tr>
<tr>
<td>תבנית ריבועית</td>
<td>\(q(u)=h(u,u)\)</td>
<td>הגדרה 4.3.1</td>
</tr>
<tr>
<td>קיטוב</td>
<td>\(h(u,w)=\frac12(q(u+w)-q(u)-q(w))\)</td>
<td>משפט 4.3.4</td>
</tr>
<tr>
<td>לא־מנוונות</td>
<td>\([h]_B\) הפיכה</td>
<td>נלמד במפגש כהמשך רעיוני לפרק 4</td>
</tr>
<tr>
<td>צמוד ביחס ל-\(h\)</td>
<td>\([S]_B=A^{-1}[T]_B^tA\)</td>
<td>יישום של לא־מנוונות</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- ========== MEETING 5 ========== -->
<div class="summary-panel" id="s5">
<div class="summary-content">
<h2>מפגש 5 – שינוי בסיס, חפיפה ולכסון תבניות ריבועיות</h2>
<div class="logic-note">
<p>
              מפגש זה ממשיך את פרק 4 ועובר לפרק 5. הרעיון המרכזי:
              עבור העתקות לינאריות שינוי בסיס מתואר על ידי <strong>דמיון</strong>, אבל עבור תבניות בילינאריות וריבועיות שינוי בסיס מתואר על ידי <strong>חפיפה</strong>.
            </p>
</div>
<h3>א. שינוי בסיס בתבנית בילינארית</h3>
<div class="theorem-box">
<div class="theorem-box__label">משפט 4.5.1 – נוסחת שינוי בסיס</div>
<p>
              יהיו \(B\) ו-\(B'\) שני בסיסים של \(V\), ותהי \(M\) מטריצת המעבר המתאימה.
              אם \(h\) תבנית בילינארית, אז:
              \[
                [h]_{B'}=M^t[h]_B M.
              \]
            </p>
<p>
              אותה נוסחה מתקיימת גם עבור מטריצה מייצגת של תבנית ריבועית:
              \[
                [q]_{B'}=M^t[q]_B M.
              \]
            </p>
</div>
<div class="warning-box">
<div class="warning-box__label">לא להתבלבל עם דמיון</div>
<p>
              עבור העתקה לינארית:
              \[
                [T]_{B'}=M^{-1}[T]_B M.
              \]
              אבל עבור תבנית בילינארית/ריבועית:
              \[
                [h]_{B'}=M^t[h]_B M.
              \]
              לכן כאן לא מדברים על דמיון אלא על חפיפה.
            </p>
</div>
<h3>ב. חפיפה של מטריצות</h3>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 4.5.2 – חפיפה</div>
<p>
              תהיינה \(A,B\) מטריצות ריבועיות מאותו סדר. נאמר ש-\(B\) <strong>חופפת</strong> ל-\(A\)
              אם קיימת מטריצה הפיכה \(M\) כך ש:
              \[
                B=M^tAM.
              \]
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">טענה 4.5.3 – חפיפה היא יחס שקילות</div>
<p>
              יחס החפיפה הוא רפלקסיבי, סימטרי וטרנזיטיבי.
              כלומר: כל מטריצה חופפת לעצמה, אם \(B\) חופפת ל-\(A\) אז \(A\) חופפת ל-\(B\), ואם \(C\) חופפת ל-\(B\) ו-\(B\) חופפת ל-\(A\), אז \(C\) חופפת ל-\(A\).
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 4.5.4 – משמעות החפיפה</div>
<p>
              שתי מטריצות מייצגות את אותה תבנית בילינארית או ריבועית בבסיסים שונים אם ורק אם הן חופפות.
            </p>
</div>
<h3>ג. מה נשמר תחת חפיפה?</h3>
<div class="theorem-box">
<div class="theorem-box__label">טענה 5.1.3 – דרגה נשמרת</div>
<p>
              למטריצות חופפות יש אותה דרגה.
              לכן אפשר להגדיר דרגה של תבנית בלי תלות בבסיס.
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 5.1.4 – דרגת תבנית</div>
<p>
              אם \(h\) תבנית בילינארית ו-\([h]_B=A\), אז:
              \[
                \rho(h)=\rho(A).
              \]
              ההגדרה אינה תלויה בבסיס, כי דרגה נשמרת תחת חפיפה.
            </p>
</div>
<div class="logic-note">
<p>
              אם \(B=M^tAM\), אז:
              \[
                \det(B)=\det(M)^2\det(A).
              \]
              לכן הדטרמיננטה עצמה לא בהכרח נשמרת, אבל השאלה האם הדטרמיננטה אפס או לא אפס כן נשמרת.
            </p>
</div>
<h3>ד. לכסון תבניות סימטריות וריבועיות</h3>
<div class="theorem-box">
<div class="theorem-box__label">טענה 5.1.1</div>
<p>
              מטריצה החופפת למטריצה סימטרית היא סימטרית.
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 5.1.2 – משפט הלכסון בחפיפה</div>
<p>
              א. כל מטריצה סימטרית מעל שדה \(F\) חופפת למטריצה אלכסונית.
            </p>
<p>
              ב. כל תבנית בילינארית סימטרית במרחב נוצר־סופית ניתנת להצגה, בבסיס מתאים, בצורה אלכסונית.
            </p>
<p>
              ג. כל תבנית ריבועית במרחב נוצר־סופית ניתנת להצגה, בבסיס מתאים, כסכום ריבועים.
            </p>
</div>
<div class="example-box">
<div class="example-box__label">צורה אלכסונית של תבנית ריבועית</div>
<p>
              אם אחרי שינוי בסיס מתקבל:
              \[
                [q]_{B'}=
                \begin{pmatrix}
                  d_1 &amp; 0 &amp; \cdots &amp; 0\\
                  0 &amp; d_2 &amp; \cdots &amp; 0\\
                  \vdots &amp; \vdots &amp; \ddots &amp; \vdots\\
                  0 &amp; 0 &amp; \cdots &amp; d_n
                \end{pmatrix},
              \]
              אז התבנית הריבועית נכתבת:
              \[
                q(y_1,\ldots,y_n)=d_1y_1^2+\cdots+d_ny_n^2.
              \]
            </p>
</div>
<h3>ה. שיטת לגרנז' – השלמה לריבועים</h3>
<div class="theorem-box">
<div class="theorem-box__label">הרעיון החישובי</div>
<p>
              כאשר נתונה תבנית ריבועית עם איברים מעורבים, למשל:
              \[
                q(x_1,x_2)=3x_1^2-3x_1x_2-x_2^2,
              \]
              מחפשים שינוי משתנים שיבטל את האיבר המעורב.
            </p>
<p>
              לדוגמה:
              \[
                x'_1=x_1-\frac12x_2,\qquad x'_2=x_2.
              \]
              אחרי הצבה מתקבלת צורה אלכסונית:
              \[
                q=3{x'_1}^2-\frac74{x'_2}^2.
              \]
            </p>
</div>
<h3>ו. הקשר בין שינוי משתנים לבסיס חדש</h3>
<div class="logic-note">
<p>
              שינוי משתנים אינו רק טריק אלגברי. הוא בעצם מעבר לבסיס חדש.
              אם
              \[
                [u]_{B'}=P[u]_B,
              \]
              אז העמודות של מטריצת המעבר ההפוכה נותנות את וקטורי הבסיס החדש בקואורדינטות של הבסיס הישן.
            </p>
</div>
<div class="example-box">
<div class="example-box__label">דוגמה מהמפגש</div>
<p>
              אם שינוי המשתנים הוא:
              \[
                \begin{pmatrix}
                  x'_1\\x'_2
                \end{pmatrix}
                =
                \begin{pmatrix}
                  1 &amp; -\frac12\\
                  0 &amp; 1
                \end{pmatrix}
                \begin{pmatrix}
                  x_1\\x_2
                \end{pmatrix},
              \]
              אז:
              \[
                P=
                \begin{pmatrix}
                  1 &amp; -\frac12\\
                  0 &amp; 1
                \end{pmatrix},
                \qquad
                P^{-1}=
                \begin{pmatrix}
                  1 &amp; \frac12\\
                  0 &amp; 1
                \end{pmatrix}.
              \]
              לכן בסיס מתאים הוא:
              \[
                B'=\left\{(1,0),\left(\frac12,1\right)\right\}.
              \]
            </p>
</div>
<h3>ז. חפיפות אלמנטריות</h3>
<div class="theorem-box">
<div class="theorem-box__label">טענות 5.3.1–5.3.2</div>
<p>
              פעולה אלמנטרית על עמודות מתקבלת על ידי כפל מימין במטריצה אלמנטרית מתאימה.
              הפעולה המקבילה על השורות מתקבלת על ידי כפל משמאל בטרנספוז של אותה מטריצה.
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">הגדרה 5.3.3 – חפיפה אלמנטרית</div>
<p>
              פעולה מהצורה
              \[
                A \mapsto E^tAE
              \]
              כאשר \(E\) מטריצת עמודה אלמנטרית, נקראת <strong>חפיפה אלמנטרית</strong>.
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">משפט 5.3.4</div>
<p>
              שתי מטריצות \(A,B\) חופפות אם ורק אם אפשר לקבל את \(B\) מ-\(A\) על ידי סדרה סופית של חפיפות אלמנטריות.
            </p>
</div>
<h3>ח. דרך עבודה מסודרת בתרגילים</h3>
<div class="example-box">
<div class="example-box__label">אלגוריתם ללכסון תבנית ריבועית</div>
<ol>
<li>כותבים את מטריצת התבנית \(A=[q]_B\).</li>
<li>בודקים שהיא סימטרית.</li>
<li>מבצעים השלמה לריבועים או חפיפות אלמנטריות.</li>
<li>מקבלים מטריצה אלכסונית \(D=M^tAM\).</li>
<li>מתרגמים את \(M\) לבסיס החדש במידת הצורך.</li>
<li>כותבים את הצורה הסופית:
                \[
                  q=d_1y_1^2+\cdots+d_ny_n^2.
                \]
              </li>
</ol>
</div>
<h3>ט. סיכום מפגש 5</h3>
<table>
<thead>
<tr>
<th>נושא</th>
<th>נוסחה / רעיון</th>
<th>מספרים בספר</th>
</tr>
</thead>
<tbody>
<tr>
<td>שינוי בסיס</td>
<td>\([h]_{B'}=M^t[h]_B M\)</td>
<td>משפט 4.5.1</td>
</tr>
<tr>
<td>חפיפה</td>
<td>\(B=M^tAM\)</td>
<td>הגדרה 4.5.2</td>
</tr>
<tr>
<td>חפיפה כיחס שקילות</td>
<td>רפלקסיבית, סימטרית, טרנזיטיבית</td>
<td>טענה 4.5.3</td>
</tr>
<tr>
<td>משמעות החפיפה</td>
<td>אותה תבנית בבסיסים שונים</td>
<td>משפט 4.5.4</td>
</tr>
<tr>
<td>סימטריות נשמרת</td>
<td>חופפת לסימטרית ⇒ סימטרית</td>
<td>טענה 5.1.1</td>
</tr>
<tr>
<td>לכסון</td>
<td>מטריצה סימטרית חופפת לאלכסונית</td>
<td>משפט 5.1.2</td>
</tr>
<tr>
<td>דרגה</td>
<td>דרגה נשמרת בחפיפה</td>
<td>טענה 5.1.3, הגדרה 5.1.4</td>
</tr>
<tr>
<td>חפיפה אלמנטרית</td>
<td>\(A\mapsto E^tAE\)</td>
<td>הגדרה 5.3.3, משפט 5.3.4</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- ========== MEETING 6 ========== -->
<div class="summary-panel" id="s6">
<div class="summary-content">
<h2>מפגש 6 – צורה קנונית, חפיפות אלמנטריות ולכסון ממשי</h2>
<div class="logic-note">
<p>
              מפגש זה ממשיך את פרק 5 ועובר לחומר של פרק 6. עד עכשיו ראינו שכל תבנית ריבועית
              ניתנת להצגה כסכום ריבועים בבסיס מתאים. במפגש זה מחדדים את השאלה:
              <strong>לאיזו צורה הכי פשוטה אפשר להביא תבנית ריבועית ממשית?</strong>
              התשובה מעל \(\mathbb{R}\): לצורה קנונית עם מקדמים \(1\), \(-1\), ו-\(0\).
            </p>
<p>
              בנוסף נלמדת דרך חישובית מלאה: השלמה לריבועים, חפיפות אלמנטריות, מציאת מטריצת
              המעבר \(M\), ומעבר לבסיס שבו המטריצה אלכסונית או קנונית.
            </p>
</div>
<h3>א. תזכורת: מטריצה של תבנית ריבועית</h3>
<div class="theorem-box">
<div class="theorem-box__label">תזכורת מפרקים 4–5</div>
<p>
              אם \(h:V\times V\to \mathbb{R}\) תבנית בילינארית סימטרית, והתבנית הריבועית המסומכת היא
              \[
                q(u)=h(u,u),
              \]
              אז בבסיס \(B\):
              \[
                q(u)=[u]_B^t[h]_B[u]_B.
              \]
            </p>
<p>
              אם מחליפים בסיס בעזרת מטריצה הפיכה \(M\), אז המטריצה משתנה לפי חפיפה:
              \[
                [q]_{B'}=M^t[q]_B M.
              \]
            </p>
</div>
<div class="warning-box">
<div class="warning-box__label">דמיון לעומת חפיפה</div>
<p>
              עבור העתקה לינארית שינוי בסיס הוא:
              \[
                [T]_{B'}=M^{-1}[T]_B M.
              \]
              אבל עבור תבנית בילינארית/ריבועית שינוי בסיס הוא:
              \[
                [q]_{B'}=M^t[q]_B M.
              \]
              לכן כאן לא מחפשים מטריצות דומות, אלא מטריצות חופפות.
            </p>
</div>
<h3>ב. דוגמה מלאה: לכסון תבנית ריבועית ב-\(\mathbb{R}^3\) בהשלמה לריבועים</h3>
<div class="example-box">
<div class="example-box__label">דוגמה מהמפגש – תבנית ריבועית עם מטריצה סימטרית</div>
<p>
              נתונה תבנית ריבועית \(q:\mathbb{R}^3\to\mathbb{R}\) שהמטריצה שלה בבסיס הסטנדרטי \(E\) היא:
              \[
                [q]_E=[h]_E=
                \begin{pmatrix}
                  2 &amp; 1 &amp; 2\\
                  1 &amp; 3 &amp; -\frac32\\
                  2 &amp; -\frac32 &amp; 4
                \end{pmatrix}.
              \]
            </p>
<p>
              לכן עבור \(u=(t_1,t_2,t_3)\):
              \[
                q(u)=2t_1^2+3t_2^2+4t_3^2+2t_1t_2+4t_1t_3-3t_2t_3.
              \]
            </p>
</div>
<h4>שלב 1 – מרכזים את כל האיברים שיש בהם \(t_1\)</h4>
<p>
            נכתוב:
            \[
              q(u)=
              2(t_1^2+t_1t_2+2t_1t_3)+3t_2^2+4t_3^2-3t_2t_3.
            \]
            בתוך הסוגריים:
            \[
              t_1^2+t_1t_2+2t_1t_3
              =
              t_1^2+2t_1\left(\frac12t_2+t_3\right).
            \]
            לכן משלימים לריבוע:
            \[
              t_1^2+2t_1\left(\frac12t_2+t_3\right)
              =
              \left(t_1+\frac12t_2+t_3\right)^2
              -
              \left(\frac12t_2+t_3\right)^2.
            \]
          </p>
<div class="logic-note">
<p>
              לכן מגדירים משתנה חדש:
              \[
                t_1'=t_1+\frac12t_2+t_3.
              \]
              אחרי ההצבה מתקבל:
              \[
                q(u)=
                2{t_1'}^2
                -2\left(\frac12t_2+t_3\right)^2
                +3t_2^2+4t_3^2-3t_2t_3.
              \]
            </p>
</div>
<h4>שלב 2 – מפשטים את החלק שנשאר ב-\(t_2,t_3\)</h4>
<p>
            נפתח:
            \[
              -2\left(\frac12t_2+t_3\right)^2
              =
              -\frac12t_2^2-2t_2t_3-2t_3^2.
            \]
            ולכן:
            \[
              q(u)=
              2{t_1'}^2
              +\frac52t_2^2
              -5t_2t_3
              +2t_3^2.
            \]
          </p>
<p>
            כעת משלימים ריבוע בחלק:
            \[
              \frac52t_2^2-5t_2t_3+2t_3^2.
            \]
            נכתוב:
            \[
              \frac52t_2^2-5t_2t_3
              =
              \frac52(t_2^2-2t_2t_3).
            \]
            ולכן:
            \[
              t_2^2-2t_2t_3=(t_2-t_3)^2-t_3^2.
            \]
          </p>
<div class="logic-note">
<p>
              נגדיר:
              \[
                t_2'=t_2-t_3,
                \qquad
                t_3'=t_3.
              \]
              ואז:
              \[
                q(u)=2{t_1'}^2+\frac52{t_2'}^2-\frac12{t_3'}^2.
              \]
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">התוצאה האלכסונית</div>
<p>
              קיבלנו צורה אלכסונית:
              \[
                q(u)=2{t_1'}^2+\frac52{t_2'}^2-\frac12{t_3'}^2.
              \]
              לכן בבסיס מתאים \(B\):
              \[
                [q]_B=
                \begin{pmatrix}
                  2 &amp; 0 &amp; 0\\
                  0 &amp; \frac52 &amp; 0\\
                  0 &amp; 0 &amp; -\frac12
                \end{pmatrix}.
              \]
            </p>
</div>
<h4>מציאת הבסיס החדש מתוך שינוי המשתנים</h4>
<p>
            שינוי המשתנים שקיבלנו הוא:
            \[
              \begin{cases}
                t_1'=t_1+\frac12t_2+t_3,\\
                t_2'=t_2-t_3,\\
                t_3'=t_3.
              \end{cases}
            \]
            לכן:
            \[
              \begin{pmatrix}
                t_1'\\t_2'\\t_3'
              \end{pmatrix}
              =
              M
              \begin{pmatrix}
                t_1\\t_2\\t_3
              \end{pmatrix},
              \qquad
              M=
              \begin{pmatrix}
                1 &amp; \frac12 &amp; 1\\
                0 &amp; 1 &amp; -1\\
                0 &amp; 0 &amp; 1
              \end{pmatrix}.
            \]
          </p>
<p>
            כדי למצוא את וקטורי הבסיס החדש \(B\) בקואורדינטות של \(E\), מחשבים את \(M^{-1}\):
            \[
              \begin{pmatrix}
                t_1\\t_2\\t_3
              \end{pmatrix}
              =
              M^{-1}
              \begin{pmatrix}
                t_1'\\t_2'\\t_3'
              \end{pmatrix}
              =
              \begin{pmatrix}
                1 &amp; -\frac12 &amp; -\frac32\\
                0 &amp; 1 &amp; 1\\
                0 &amp; 0 &amp; 1
              \end{pmatrix}
              \begin{pmatrix}
                t_1'\\t_2'\\t_3'
              \end{pmatrix}.
            \]
            לכן עמודות \(M^{-1}\) הן וקטורי הבסיס החדש:
            \[
              B=
              \left\{
                (1,0,0),
                \left(-\frac12,1,0\right),
                \left(-\frac32,1,1\right)
              \right\}.
            \]
          </p>
<h3>ג. דוגמה נוספת: תבנית ריבועית בלי איברי ריבוע בהתחלה</h3>
<div class="example-box">
<div class="example-box__label">דוגמה מהמפגש – \(q(t_1,t_2,t_3)=t_1t_2+t_2t_3\)</div>
<p>
              נתונה:
              \[
                q(t_1,t_2,t_3)=t_1t_2+t_2t_3.
              \]
              המטריצה הסימטרית של התבנית היא:
              \[
                [q]_E=
                \begin{pmatrix}
                  0 &amp; \frac12 &amp; 0\\
                  \frac12 &amp; 0 &amp; \frac12\\
                  0 &amp; \frac12 &amp; 0
                \end{pmatrix}.
              \]
            </p>
</div>
<p>
            מפני שאין איבר ריבועי \(t_1^2\) או \(t_2^2\), משתמשים בזהות:
            \[
              ab=\left(\frac{a+b}{2}\right)^2-\left(\frac{a-b}{2}\right)^2.
            \]
            לכן מגדירים:
            \[
              t_1'=\frac12t_1+\frac12t_2,
              \qquad
              t_2'=\frac12t_1-\frac12t_2,
              \qquad
              t_3'=t_3.
            \]
            אז:
            \[
              t_1=t_1'+t_2',
              \qquad
              t_2=t_1'-t_2'.
            \]
          </p>
<p>
            מציבים:
            \[
              q=(t_1'+t_2')(t_1'-t_2')+(t_1'-t_2')t_3'
            \]
            ולכן:
            \[
              q={t_1'}^2-{t_2'}^2+t_1't_3'-t_2't_3'.
            \]
          </p>
<p>
            כעת משלימים ריבועים שוב:
            \[
              {t_1'}^2+t_1't_3'
              =
              \left(t_1'+\frac12t_3'\right)^2-\frac14{t_3'}^2,
            \]
            וגם:
            \[
              -{t_2'}^2-t_2't_3'
              =
              -\left(t_2'+\frac12t_3'\right)^2+\frac14{t_3'}^2.
            \]
            שני איברי \(\frac14{t_3'}^2\) מתבטלים, ולכן:
            \[
              q={t_1''}^2-{t_2''}^2+0\cdot {t_3''}^2.
            \]
          </p>
<div class="theorem-box">
<div class="theorem-box__label">התוצאה</div>
<p>
              מצאנו בסיס \(B\) שבו:
              \[
                [q]_B=
                \begin{pmatrix}
                  1 &amp; 0 &amp; 0\\
                  0 &amp; -1 &amp; 0\\
                  0 &amp; 0 &amp; 0
                \end{pmatrix}.
              \]
              כלומר:
              \[
                q=y_1^2-y_2^2.
              \]
            </p>
<p>
              בדוגמה במפגש התקבל בסיס מתאים, למשל:
              \[
                B=\{(1,1,0),(1,-1,0),(-1,0,1)\}.
              \]
            </p>
</div>
<h3>ד. חפיפות אלמנטריות</h3>
<div class="theorem-box">
<div class="theorem-box__label">הרעיון</div>
<p>
              במקום לבצע השלמה לריבועים ידנית, אפשר לבצע פעולות ישירות על המטריצה.
              אבל בגלל שמדובר בחפיפה ולא בדמיון, כל פעולה על שורה חייבת לבוא יחד עם הפעולה המקבילה על העמודה.
            </p>
<p>
              אם \(E\) מטריצה אלמנטרית, אז פעולה אלמנטרית של חפיפה היא:
              \[
                A\mapsto E^tAE.
              \]
            </p>
</div>
<div class="warning-box">
<div class="warning-box__label">כלל עבודה</div>
<p>
              אסור לבצע רק פעולת שורה או רק פעולת עמודה. כדי לשמור על חפיפה צריך לבצע:
            </p>
<ul>
<li>פעולת שורה מסוימת,</li>
<li>ואז את אותה פעולה מקבילה על העמודה המתאימה.</li>
</ul>
<p>
              כך נשארים בתחום של מטריצות חופפות.
            </p>
</div>
<div class="example-box">
<div class="example-box__label">דוגמה מהמפגש – חפיפות אלמנטריות</div>
<p>
              נתחיל מהמטריצה:
              \[
                A=
                \begin{pmatrix}
                  0 &amp; \frac12 &amp; 0\\
                  \frac12 &amp; 0 &amp; \frac12\\
                  0 &amp; \frac12 &amp; 0
                \end{pmatrix}.
              \]
              המטרה היא להביא אותה למטריצה אלכסונית על ידי חפיפות אלמנטריות.
            </p>
<p>
              למשל, מבצעים תחילה פעולה מהסוג:
              \[
                R_1\to R_1+R_2,
              \]
              ולאחר מכן את הפעולה המקבילה:
              \[
                C_1\to C_1+C_2.
              \]
              מטריצת הפעולה המתאימה היא \(E_1\), ולכן אחרי שתי הפעולות מתקבלת:
              \[
                E_1AE_1^t.
              \]
            </p>
<p>
              ממשיכים באותו עיקרון: בכל פעם שמנקים איבר מחוץ לאלכסון בעזרת פעולה על שורה,
              מבצעים גם את הפעולה המקבילה על העמודה.
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">צורה כללית של התוצאה</div>
<p>
              אחרי סדרה סופית של חפיפות אלמנטריות מתקבלת מטריצה אלכסונית:
              \[
                D=M^tAM.
              \]
              כאן \(M\) היא מכפלת המטריצות האלמנטריות שביצענו.
            </p>
<p>
              בדוגמה זו אפשר לקבל למשל:
              \[
                D=
                \begin{pmatrix}
                  1 &amp; 0 &amp; 0\\
                  0 &amp; -\frac14 &amp; 0\\
                  0 &amp; 0 &amp; 0
                \end{pmatrix}.
              \]
              מעל \(\mathbb{R}\) אפשר לנרמל את \(-\frac14\) ל-\(-1\), ולכן הצורה הקנונית היא:
              \[
                \operatorname{diag}(1,-1,0).
              \]
            </p>
</div>
<h3>ה. מציאת מטריצת המעבר \(M\)</h3>
<div class="logic-note">
<p>
              אם במהלך החפיפות האלמנטריות ביצענו מטריצות אלמנטריות \(E_1,E_2,\ldots,E_k\),
              אז:
              \[
                D=M^tAM
              \]
              כאשר \(M\) היא המכפלה המתאימה של המטריצות האלמנטריות מצד ימין.
            </p>
<p>
              שיטה פרקטית מהמפגש: מבצעים את אותן פעולות גם על מטריצת היחידה כדי לעקוב אחרי \(M\).
              בסוף, מה שמתקבל בצד של היחידה נותן את \(M\) או את \(M^t\), לפי אופן הרישום.
            </p>
</div>
<h3>ו. נרמול המקדמים האלכסוניים מעל \(\mathbb{R}\)</h3>
<div class="theorem-box">
<div class="theorem-box__label">נרמול סימנים</div>
<p>
              נניח שכבר קיבלנו מטריצה אלכסונית:
              \[
                D=\operatorname{diag}(\delta_1,\ldots,\delta_n).
              \]
              מעל \(\mathbb{R}\), אם \(\delta_k&gt;0\), אפשר להפוך אותה ל-\(1\).
              אם \(\delta_k&lt;0\), אפשר להפוך אותה ל-\(-1\).
              אם \(\delta_k=0\), היא נשארת \(0\).
            </p>
<p>
              עושים זאת על ידי כפל השורה והעמודה ה-\(k\) באותו מספר ממשי מתאים.
              למשל:
              \[
                \delta_k \mapsto \frac{1}{\sqrt{\delta_k}}\delta_k\frac{1}{\sqrt{\delta_k}}=1
                \qquad(\delta_k&gt;0).
              \]
              ואם \(\delta_k&lt;0\):
              \[
                \delta_k \mapsto
                \frac{1}{\sqrt{-\delta_k}}\delta_k\frac{1}{\sqrt{-\delta_k}}=-1.
              \]
            </p>
</div>
<div class="example-box">
<div class="example-box__label">המשך הדוגמה הראשונה</div>
<p>
              קודם קיבלנו:
              \[
                [q]_B=
                \begin{pmatrix}
                  2 &amp; 0 &amp; 0\\
                  0 &amp; \frac52 &amp; 0\\
                  0 &amp; 0 &amp; -\frac12
                \end{pmatrix}.
              \]
              מעל \(\mathbb{R}\) מנרמלים:
              \[
                2\mapsto 1,\qquad
                \frac52\mapsto 1,\qquad
                -\frac12\mapsto -1.
              \]
              לכן הצורה הקנונית היא:
              \[
                \operatorname{diag}(1,1,-1).
              \]
            </p>
<p>
              כלומר התבנית חופפת לתבנית:
              \[
                y_1^2+y_2^2-y_3^2.
              \]
            </p>
</div>
<h3>ז. צורה קנונית של תבנית ריבועית ממשית</h3>
<div class="theorem-box">
<div class="theorem-box__label">צורה קנונית מעל \(\mathbb{R}\)</div>
<p>
              כל תבנית ריבועית ממשית ניתנת, בבסיס מתאים, לצורה:
              \[
                q(y_1,\ldots,y_n)=
                y_1^2+\cdots+y_p^2
                -
                y_{p+1}^2-\cdots-y_{p+r}^2.
              \]
              שאר המשתנים, אם יש, מופיעים עם מקדם \(0\).
            </p>
<p>
              כלומר המטריצה הקנונית היא:
              \[
                \operatorname{diag}(
                  \underbrace{1,\ldots,1}_{p},
                  \underbrace{-1,\ldots,-1}_{r},
                  \underbrace{0,\ldots,0}_{s}
                ).
              \]
            </p>
</div>
<div class="theorem-box">
<div class="theorem-box__label">חוק ההתמדה של סילבסטר – הרעיון</div>
<p>
              המספרים \(p,r,s\) אינם תלויים בתהליך הלכסון או בבסיס שנבחר.
            </p>
<ul>
<li>\(p\) – מספר המקדמים החיוביים בצורת האלכסון.</li>
<li>\(r\) – מספר המקדמים השליליים.</li>
<li>\(s\) – מספר האפסים.</li>
</ul>
<p>
              לכן שתי תבניות ריבועיות ממשיות חופפות אם ורק אם יש להן אותה שלשה:
              \[
                (p,r,s).
              \]
            </p>
</div>
<div class="logic-note">
<p>
              בפרט, הדרגה היא:
              \[
                \rho(q)=p+r.
              \]
              מספר האפסים הוא:
              \[
                s=n-\rho(q).
              \]
            </p>
</div>
<h3>ח. חפיפה, דטרמיננטה וסימן הדטרמיננטה</h3>
<div class="theorem-box">
<div class="theorem-box__label">דטרמיננטה תחת חפיפה</div>
<p>
              אם:
              \[
                B=M^tAM,
              \]
              אז:
              \[
                \det(B)=\det(M)^2\det(A).
              \]
            </p>
<p>
              מכיוון ש-\(\det(M)^2&gt;0\) מעל \(\mathbb{R}\), הסימן של הדטרמיננטה נשמר עבור מטריצות ממשיות הפיכות.
            </p>
</div>
<div class="warning-box">
<div class="warning-box__label">מסקנה שימושית לתרגילים</div>
<p>
              אם \(A\) ו-\(B\) מטריצות סימטריות ממשיות הפיכות, ולדטרמיננטות שלהן סימנים שונים,
              אז \(A\) ו-\(B\) אינן חופפות.
            </p>
<p>
              זהו כלי שימושי במיוחד בשאלות ממ״ן על חפיפה.
            </p>
</div>
<h3>ט. לכסון אורתוגונלי של מטריצה סימטרית</h3>
<div class="theorem-box">
<div class="theorem-box__label">משפט הלכסון האורתוגונלי</div>
<p>
              אם \(A\) מטריצה ממשית סימטרית, אז קיימת מטריצה אורתוגונלית \(U\) כך ש:
              \[
                U^{-1}AU=U^tAU=D,
              \]
              כאשר \(D\) אלכסונית.
            </p>
<p>
              כלומר אפשר לבחור בסיס אורתונורמלי של וקטורים עצמיים של \(A\).
            </p>
</div>
<div class="logic-note">
<p>
              כאן קורה דבר מיוחד: בגלל ש-\(U\) אורתוגונלית, מתקיים \(U^{-1}=U^t\).
              לכן הלכסון האורתוגונלי הוא גם דמיון וגם חפיפה:
              \[
                U^{-1}AU=U^tAU.
              \]
            </p>
</div>
<h3>י. דוגמה: מטריצה עם \(3\) באלכסון ו-\(2\) מחוץ לאלכסון</h3>
<div class="example-box">
<div class="example-box__label">דוגמה מהמפגש</div>
<p>
              נתונה:
              \[
                A=
                \begin{pmatrix}
                  3 &amp; 2 &amp; 2\\
                  2 &amp; 3 &amp; 2\\
                  2 &amp; 2 &amp; 3
                \end{pmatrix}.
              \]
              זו מטריצה סימטרית, ולכן היא לכסינה אורתוגונלית.
            </p>
</div>
<h4>מציאת הערכים העצמיים</h4>
<p>
            נשים לב שלכל שורה הסכום הוא:
            \[
              3+2+2=7.
            \]
            לכן:
            \[
              A
              \begin{pmatrix}
                1\\1\\1
              \end{pmatrix}
              =
              7
              \begin{pmatrix}
                1\\1\\1
              \end{pmatrix}.
            \]
            לכן \(\lambda=7\) ערך עצמי, עם וקטור עצמי:
            \[
              v_1=(1,1,1).
            \]
          </p>
<p>
            עבור כל וקטור שסכום רכיביו \(0\), מקבלים ערך עצמי:
            \[
              \lambda=1.
            \]
            לדוגמה:
            \[
              v_2=(1,-1,0),
              \qquad
              v_3=(1,1,-2).
            \]
            לכן הערכים העצמיים הם:
            \[
              7,\quad 1,\quad 1.
            \]
          </p>
<h4>נרמול הווקטורים העצמיים</h4>
<p>
            הווקטורים \(v_1,v_2,v_3\) אורתוגונליים זה לזה. ננרמל:
            \[
              w_1=\frac1{\sqrt3}(1,1,1),
            \]
            \[
              w_2=\frac1{\sqrt2}(1,-1,0),
            \]
            \[
              w_3=\frac1{\sqrt6}(1,1,-2).
            \]
          </p>
<p>
            לכן:
            \[
              B=\{w_1,w_2,w_3\}
            \]
            הוא בסיס אורתונורמלי של \(\mathbb{R}^3\), ובו:
            \[
              [h]_B=
              \begin{pmatrix}
                7 &amp; 0 &amp; 0\\
                0 &amp; 1 &amp; 0\\
                0 &amp; 0 &amp; 1
              \end{pmatrix}.
            \]
          </p>
<div class="theorem-box">
<div class="theorem-box__label">המטריצה האורתוגונלית המלכסנת</div>
<p>
              אם \(U\) היא המטריצה שעמודותיה הן \(w_1,w_2,w_3\), אז:
              \[
                U=
                \begin{pmatrix}
                  \frac1{\sqrt3} &amp; \frac1{\sqrt2} &amp; \frac1{\sqrt6}\\
                  \frac1{\sqrt3} &amp; -\frac1{\sqrt2} &amp; \frac1{\sqrt6}\\
                  \frac1{\sqrt3} &amp; 0 &amp; -\frac2{\sqrt6}
                \end{pmatrix},
              \]
              ומתקיים:
              \[
                U^{-1}AU=U^tAU=
                \begin{pmatrix}
                  7 &amp; 0 &amp; 0\\
                  0 &amp; 1 &amp; 0\\
                  0 &amp; 0 &amp; 1
                \end{pmatrix}.
              \]
            </p>
</div>
<h3>יא. הכללה: מטריצה עם \(a\) באלכסון ו-\(b\) מחוץ לאלכסון</h3>
<div class="theorem-box">
<div class="theorem-box__label">משפחה חשובה</div>
<p>
              נתונה מטריצה מסדר \(n\):
              \[
                A=
                \begin{pmatrix}
                  a &amp; b &amp; \cdots &amp; b\\
                  b &amp; a &amp; \cdots &amp; b\\
                  \vdots &amp; \vdots &amp; \ddots &amp; \vdots\\
                  b &amp; b &amp; \cdots &amp; a
                \end{pmatrix}.
              \]
            </p>
<p>
              אז:
              \[
                (1,1,\ldots,1)
              \]
              הוא וקטור עצמי עם ערך עצמי:
              \[
                a+(n-1)b.
              \]
            </p>
<p>
              וכל וקטור שסכום רכיביו \(0\) הוא וקטור עצמי עם ערך עצמי:
              \[
                a-b.
              \]
              לכן ל-\(a-b\) יש ריבוי \(n-1\).
            </p>
</div>
<div class="logic-note">
<p>
              בסיס נוח לתת־המרחב שסכום רכיביו \(0\) הוא:
              \[
                (1,-1,0,\ldots,0),
              \]
              \[
                (1,1,-2,0,\ldots,0),
              \]
              \[
                (1,1,1,-3,0,\ldots,0),
              \]
              וכן הלאה.
            </p>
<p>
              עבור הווקטור שבו יש \(k-1\) פעמים \(1\), ואז \(-(k-1)\), הנורמה היא:
              \[
                \sqrt{k(k-1)}.
              \]
            </p>
</div>
<h3>יב. בסיס אורתונורמלי ביחס לתבנית חיובית</h3>
<div class="example-box">
<div class="example-box__label">דוגמה מהמפגש – תהליך גרם־שמידט ביחס ל-\(h\)</div>
<p>
              נתונה תבנית בילינארית סימטרית על \(\mathbb{R}^2\):
              \[
                h(u,w)=x_1y_1-x_1y_2-x_2y_1+2x_2y_2,
              \]
              כלומר:
              \[
                [h]_E=
                \begin{pmatrix}
                  1 &amp; -1\\
                  -1 &amp; 2
                \end{pmatrix}.
              \]
            </p>
<p>
              המטריצה סימטרית וחיובית לחלוטין, ולכן אפשר למצוא בסיס \(B\) שבו:
              \[
                [h]_B=I.
              \]
            </p>
</div>
<p>
            מתחילים עם:
            \[
              v_1=e_1=(1,0).
            \]
            נחשב:
            \[
              h(v_1,v_1)=1.
            \]
            לכן \(v_1\) כבר מנורמל ביחס ל-\(h\).
          </p>
<p>
            כעת נבנה וקטור שני אורתוגונלי ל-\(v_1\). לפי גרם־שמידט:
            \[
              v_2=e_2-\frac{h(e_2,v_1)}{h(v_1,v_1)}v_1.
            \]
            אבל:
            \[
              h(e_2,v_1)=-1,
            \]
            ולכן:
            \[
              v_2=e_2-(-1)v_1=e_1+e_2=(1,1).
            \]
          </p>
<p>
            בדיקה:
            \[
              h((1,1),(1,0))=0,
            \]
            וגם:
            \[
              h((1,1),(1,1))=1.
            \]
            לכן:
            \[
              B=\{(1,0),(1,1)\}
            \]
            הוא בסיס \(h\)-אורתונורמלי, ובו:
            \[
              [h]_B=
              \begin{pmatrix}
                1 &amp; 0\\
                0 &amp; 1
              \end{pmatrix}.
            \]
          </p>
<h3>יג. מציאת משלים אורתוגונלי ביחס לתבנית בילינארית</h3>
<div class="example-box">
<div class="example-box__label">דוגמה מהמפגש – \(h\)-אורתוגונליות ל-\(\operatorname{Sp}\{(1,1)\}\)</div>
<p>
              נתונה תבנית על \(\mathbb{R}^2\) עם מטריצה:
              \[
                [h]_E=
                \begin{pmatrix}
                  3 &amp; 2\\
                  2 &amp; 6
                \end{pmatrix}.
              \]
              נרצה למצוא בסיס אורתונורמלי שמתחיל בכיוון של:
              \[
                \operatorname{Sp}\{(1,1)\}.
              \]
            </p>
</div>
<p>
            מחשבים:
            \[
              h((\alpha,\beta),(1,1))
              =
              (\alpha,\beta)
              \begin{pmatrix}
                3 &amp; 2\\
                2 &amp; 6
              \end{pmatrix}
              \begin{pmatrix}
                1\\1
              \end{pmatrix}
              =
              (\alpha,\beta)
              \begin{pmatrix}
                5\\8
              \end{pmatrix}
              =
              5\alpha+8\beta.
            \]
            לכן המשלים האורתוגונלי ל-\(\operatorname{Sp}\{(1,1)\}\) ביחס ל-\(h\) נתון על ידי:
            \[
              5\alpha+8\beta=0.
            \]
            אפשר לבחור:
            \[
              w=(8,-5).
            \]
          </p>
<p>
            לכן בסיס \(h\)-אורתוגונלי מתאים הוא:
            \[
              \{(1,1),(8,-5)\}.
            \]
            כדי להפוך אותו לאורתונורמלי ביחס ל-\(h\), מנרמלים לפי:
            \[
              \|v\|_h=\sqrt{h(v,v)}.
            \]
          </p>
<p>
            לדוגמה:
            \[
              h((8,-5),(8,-5))
              =
              (8,-5)
              \begin{pmatrix}
                3 &amp; 2\\
                2 &amp; 6
              \end{pmatrix}
              \begin{pmatrix}
                8\\-5
              \end{pmatrix}
              =
              (8,-5)
              \begin{pmatrix}
                14\\-14
              \end{pmatrix}
              =
              112+70=182.
            \]
            לכן הווקטור המנורמל הוא:
            \[
              \frac1{\sqrt{182}}(8,-5).
            \]
          </p>
<h3>יד. איך ניגשים לתרגיל ממפגש 6?</h3>
<div class="example-box">
<div class="example-box__label">אלגוריתם עבודה מסודר</div>
<ol>
<li>
                אם נתונה תבנית ריבועית, כתבו קודם את המטריצה הסימטרית שלה.
              </li>
<li>
                אם יש איבר ריבועי נוח, התחילו ממנו והשלימו לריבוע.
              </li>
<li>
                אם אין איבר ריבועי, השתמשו בזהות:
                \[
                  ab=\left(\frac{a+b}{2}\right)^2-\left(\frac{a-b}{2}\right)^2.
                \]
              </li>
<li>
                לאחר קבלת צורה אלכסונית, רשמו את המטריצה האלכסונית.
              </li>
<li>
                מעל \(\mathbb{R}\), נרמלו כל מקדם חיובי ל-\(1\), כל מקדם שלילי ל-\(-1\), ואפסים השאירו אפסים.
              </li>
<li>
                מספר ה-\(1\)-ים, מספר ה-\(-1\)-ים ומספר האפסים הם אינווריאנטים של התבנית.
              </li>
<li>
                אם צריך למצוא בסיס, עקבו אחרי שינוי המשתנים או אחרי מטריצות החפיפה האלמנטריות.
              </li>
</ol>
</div>
<h3>טו. סיכום מפגש 6</h3>
<table>
<thead>
<tr>
<th>נושא</th>
<th>מה צריך לדעת</th>
<th>נוסחה מרכזית</th>
</tr>
</thead>
<tbody>
<tr>
<td>לכסון תבנית ריבועית</td>
<td>השלמה לריבועים או חפיפות אלמנטריות</td>
<td>\(D=M^tAM\)</td>
</tr>
<tr>
<td>חפיפה אלמנטרית</td>
<td>פעולת שורה יחד עם פעולת העמודה המקבילה</td>
<td>\(A\mapsto E^tAE\)</td>
</tr>
<tr>
<td>צורה אלכסונית</td>
<td>כתיבת \(q\) כסכום ריבועים עם מקדמים</td>
<td>\(q=d_1y_1^2+\cdots+d_ny_n^2\)</td>
</tr>
<tr>
<td>צורה קנונית מעל \(\mathbb{R}\)</td>
<td>נרמול מקדמים חיוביים/שליליים</td>
<td>\(\operatorname{diag}(1,\ldots,1,-1,\ldots,-1,0,\ldots,0)\)</td>
</tr>
<tr>
<td>חוק ההתמדה</td>
<td>מספר החיוביים, השליליים והאפסים נשמר</td>
<td>\((p,r,s)\)</td>
</tr>
<tr>
<td>דרגה</td>
<td>מספר המקדמים הלא־אפסיים בצורה הקנונית</td>
<td>\(\rho(q)=p+r\)</td>
</tr>
<tr>
<td>דטרמיננטה בחפיפה</td>
<td>סימן הדטרמיננטה נשמר עבור מטריצות ממשיות הפיכות</td>
<td>\(\det(M^tAM)=\det(M)^2\det(A)\)</td>
</tr>
<tr>
<td>לכסון אורתוגונלי</td>
<td>למטריצה סימטרית ממשית יש בסיס אורתונורמלי של וקטורים עצמיים</td>
<td>\(U^tAU=D\)</td>
</tr>
<tr>
<td>\(h\)-אורתונורמליות</td>
<td>גרם־שמידט ביחס לתבנית חיובית לחלוטין</td>
<td>\(h(v_i,v_j)=\delta_{ij}\)</td>
</tr>
</tbody>
</table>
</div>
</div>

<div class="summary-panel" id="s7">
<div class="summary-content">
<h2>מפגש 7 – תבניות ריבועיות ממשיות</h2>
<div class="logic-note">
<p>במפגש הזה עוברים להתמקד בתבניות ריבועיות מעל השדה \(\mathbb{R}\). היתרון בעבודה מעל הממשיים הוא שאפשר לדבר על סימן: ערכים חיוביים, שליליים או אפס. מתוך הסימנים האלה מתקבלים הסיווג, הדרגה, החתימה, משפט האינרציה של סילבסטר וההתנהגות של קבוצת האפסים של התבנית.</p>
</div>

<h3>א. נקודת המוצא: מרחב ממשי ותבנית ריבועית</h3>
<p>לאורך המפגש מניחים כי \(V\) הוא מרחב וקטורי מעל \(\mathbb{R}\), וכי \(\dim V=n\). תבנית ריבועית היא פונקציה</p>
\[
q:V\to\mathbb{R}
\]
<p>שמתקבלת מתבנית בילינארית סימטרית \(h:V\times V\to\mathbb{R}\) לפי</p>
\[
q(v)=h(v,v).
\]
<p>אם בוחרים בסיס \(B=(v_1,\ldots,v_n)\), אז לתבנית הבילינארית הסימטרית מתאימה מטריצה סימטרית \([h]_B=[q]_B=A\), ולכל \(v\in V\) מתקיים</p>
\[
q(v)=[v]_B^tA[v]_B.
\]
<p>לכן אפשר לחשוב על תבנית ריבועית גם כעל פולינום הומוגני ממעלה 2 בקואורדינטות של הווקטור.</p>

<div class="theorem-box">
<div class="theorem-box__label">תכונות בסיסיות</div>
<p>לכל \(v\in V\) ולכל \(\lambda\in\mathbb{R}\):</p>
\[
q(\lambda v)=\lambda^2q(v).
\]
<p>בפרט:</p>
\[
q(0)=0.
\]
</div>
<p><strong>הסבר קצר:</strong> אם \(q(v)=h(v,v)\), אז</p>
\[
q(\lambda v)=h(\lambda v,\lambda v)=\lambda^2h(v,v)=\lambda^2q(v).
\]
<p>חשוב מאוד: מהשוויון \(q(v)=0\) <strong>לא</strong> נובע בהכרח \(v=0\). למשל, עבור \(q(x,y)=x^2-y^2\) מתקיים \(q(1,1)=0\), אף על פי ש-\((1,1)\neq(0,0)\).</p>

<h3>ב. צורה אלכסונית של תבנית ריבועית</h3>
<p>משפט הלכסון לתבניות ריבועיות אומר שבבסיס מתאים אפשר לכתוב את התבנית בצורה אלכסונית:</p>
\[
q(u)=\delta_1\beta_1^2+\delta_2\beta_2^2+\cdots+\delta_n\beta_n^2,
\]
<p>כאשר \(u=\beta_1v_1+\cdots+\beta_nv_n\) לפי אותו בסיס, ו-\(\delta_i\in\mathbb{R}\). במטריצה, המשמעות היא</p>
\[
[q]_B=\operatorname{diag}(\delta_1,\ldots,\delta_n).
\]
<p>מעל \(\mathbb{R}\) אפשר גם לנרמל את המקדמים הלא־אפסיים: כל מקדם חיובי נהפך ל-\(1\), וכל מקדם שלילי נהפך ל-\(-1\). לכן הצורה הקנונית היא מהצורה</p>
\[
\operatorname{diag}(\underbrace{1,\ldots,1}_{\pi},\underbrace{-1,\ldots,-1}_{\nu},\underbrace{0,\ldots,0}_{n-\rho}).
\]
<p>הצורה האלכסונית עצמה אינה יחידה: בבסיסים שונים נקבל לעיתים מקדמים שונים. מה שכן נשמר הוא מספר המקדמים החיוביים ומספר המקדמים השליליים.</p>

<div class="theorem-box">
<div class="theorem-box__label">משפט האינרציה של סילבסטר</div>
<p>אם תבנית ריבועית ממשית מוצגת בצורה אלכסונית בשני בסיסים שונים, אז מספר המקדמים החיוביים ומספר המקדמים השליליים אינם משתנים.</p>
<p>כלומר: אפשר לשנות את הבסיס ואת הערכים המספריים של המקדמים, אבל אי אפשר לשנות כמה כיוונים חיוביים וכמה כיוונים שליליים יש לתבנית.</p>
</div>

<h3>ג. סיווג לפי סימן</h3>
<p>בגלל שהערכים של \(q\) הם מספרים ממשיים, מסווגים את התבנית לפי הסימן של \(q(v)\) עבור וקטורים לא־אפסיים.</p>
<table>
<thead>
<tr><th>סוג התבנית</th><th>הגדרה</th><th>בצורה קנונית</th></tr>
</thead>
<tbody>
<tr><td>חיובית לחלוטין</td><td>\(q(v)>0\) לכל \(v\neq0\)</td><td>\(\pi=n,\ \nu=0\)</td></tr>
<tr><td>שלילית לחלוטין</td><td>\(q(v)<0\) לכל \(v\neq0\)</td><td>\(\pi=0,\ \nu=n\)</td></tr>
<tr><td>לא מוגדרת</td><td>קיימים וקטורים שעליהם \(q\) חיובית וקיימים וקטורים שעליהם \(q\) שלילית</td><td>\(\pi>0\) וגם \(\nu>0\)</td></tr>
<tr><td>חצי חיובית / חיובית למחצה</td><td>\(q(v)\ge0\) לכל \(v\), ויש וקטור לא־אפסי עם \(q(v)=0\)</td><td>\(\nu=0\), ויש לפחות מקדם אפסי</td></tr>
<tr><td>חצי שלילית / שלילית למחצה</td><td>\(q(v)\le0\) לכל \(v\), ויש וקטור לא־אפסי עם \(q(v)=0\)</td><td>\(\pi=0\), ויש לפחות מקדם אפסי</td></tr>
</tbody>
</table>
<p>במילים אחרות: מקדמים חיוביים מייצרים כיוונים שבהם התבנית חיובית; מקדמים שליליים מייצרים כיוונים שבהם היא שלילית; ומקדמים אפסיים מייצרים כיוונים שבהם התבנית מתאפסת.</p>

<div class="example-box">
<div class="example-box__label">דוגמה – קריאת הסיווג מצורה אלכסונית</div>
<p>עבור</p>
\[
q(x,y,z,t)=3x^2-2y^2+5z^2+0t^2
\]
<p>יש שני מקדמים חיוביים, מקדם שלילי אחד ומקדם אפסי אחד. לכן התבנית לא מוגדרת, כי היא מקבלת גם ערכים חיוביים וגם ערכים שליליים.</p>
</div>

<h3>ד. המספרים \(\pi(q)\), \(\nu(q)\), הדרגה והחתימה</h3>
<div class="theorem-box">
<div class="theorem-box__label">סימונים מרכזיים</div>
<p>\(\pi(q)\) — מספר המקדמים החיוביים בצורה אלכסונית.</p>
<p>\(\nu(q)\) — מספר המקדמים השליליים בצורה אלכסונית.</p>
<p>\(\rho(q)=\pi(q)+\nu(q)\) — דרגת התבנית, כלומר מספר המקדמים הלא־אפסיים.</p>
<p>\(\sigma(q)=\pi(q)-\nu(q)\) — החתימה, או ה-signature, של התבנית.</p>
</div>
<p>מהדרגה ומהחתימה אפשר לשחזר את מספר המקדמים החיוביים והשליליים:</p>
\[
\pi(q)=\frac{\rho(q)+\sigma(q)}{2},
\qquad
\nu(q)=\frac{\rho(q)-\sigma(q)}{2}.
\]
<p>בנוסף מתקיים תמיד</p>
\[
|\sigma(q)|\le \rho(q),
\]
<p>כי</p>
\[
|\pi(q)-\nu(q)|\le \pi(q)+\nu(q).
\]

<div class="example-box">
<div class="example-box__label">דוגמה – דרגה וחתימה</div>
<p>אם הצורה הקנונית היא</p>
\[
\operatorname{diag}(1,1,-1,0,0),
\]
<p>אז \(\pi=2\), \(\nu=1\), ולכן</p>
\[
\rho=3,
\qquad
\sigma=1.
\]
</div>

<h3>ה. קבוצת האפסים: \(\ker q\)</h3>
<p>במפגש משתמשים בסימון</p>
\[
\ker q=\{v\in V\mid q(v)=0\}.
\]
<p>צריך להיזהר: זה <strong>לא</strong> גרעין של העתקה לינארית, משום ש-\(q\) בדרך כלל אינה העתקה לינארית. לכן \(\ker q\) לא חייב להיות תת־מרחב.</p>

<div class="example-box">
<div class="example-box__label">דוגמה – \(\ker q\) אינו תמיד תת־מרחב</div>
<p>ניקח</p>
\[
q(x,y)=x^2-y^2.
\]
<p>אז</p>
\[
q(x,y)=0 \iff x^2=y^2 \iff y=x \text{ או } y=-x.
\]
<p>כלומר \(\ker q\) הוא איחוד שני ישרים:</p>
\[
\ker q=\{(t,t):t\in\mathbb{R}\}\cup\{(t,-t):t\in\mathbb{R}\}.
\]
<p>זה לא תת־מרחב, כי למשל \((1,1)\) ו-\((1,-1)\) נמצאים ב-\(\ker q\), אבל סכומם \((2,0)\) לא נמצא ב-\(\ker q\).</p>
</div>

<h4>מתי \(\ker q\) כן תת־מרחב?</h4>
<p>כאשר \(q\) חצי חיובית או חצי שלילית, הצורה האלכסונית מכילה רק מקדמים מאותו סימן ואפסים. למשל, אם</p>
\[
q(u)=\delta_1\beta_1^2+\\cdots+\delta_r\beta_r^2,
\qquad
\delta_i>0,
\]
<p>אז \(q(u)=0\) מחייב \(\beta_1=\cdots=\beta_r=0\). לכן קבוצת האפסים היא בדיוק המרחב הנפרש על ידי וקטורי הבסיס המתאימים למקדמים האפסיים, ולכן היא תת־מרחב.</p>
<p>במצב כזה מתקיים</p>
\[
\dim\ker q=n-
ho(q).
\]
<p>אותו רעיון נכון גם במקרה חצי שלילי, כי אז כל האיברים הלא־אפסיים הם שליליים, ושוב סכום של ריבועים עם אותו סימן יכול להתאפס רק אם כל הרכיבים הלא־אפסיים מתאפסים.</p>

<div class="example-box">
<div class="example-box__label">דוגמה – חצי חיובית</div>
<p>עבור \(q(x,y,z)=x^2+4y^2\) מתקיים \(q\ge0\), ו-\(q(x,y,z)=0\) אם ורק אם \(x=0\) וגם \(y=0\). לכן</p>
\[
\ker q=\{(0,0,z):z\in\mathbb{R}\},
\]
<p>וזה תת־מרחב מממד \(1\). כאן \(n=3\), \(\rho=2\), ולכן \(\dim\ker q=3-2=1\).</p>
</div>

<h3>ו. תבניות מהצורה \(q(u)=\ell_1(u)\ell_2(u)\)</h3>
<p>חלק מרכזי במפגש עוסק בתבניות ריבועיות שנבנות ממכפלה של שני פונקציונלים לינאריים:</p>
\[
\ell_1,\ell_2:V\to\mathbb{R},
\qquad
q(u)=\ell_1(u)\ell_2(u).
\]
<p>זו תבנית ריבועית משום שאפשר להגדיר תבנית בילינארית</p>
\[
h(u,w)=\ell_1(u)\ell_2(w),
\]
<p>ואז</p>
\[
h(u,u)=\ell_1(u)\ell_2(u)=q(u).
\]
<p>התבנית \(h\) עצמה לא חייבת להיות סימטרית. התבנית הבילינארית הסימטרית המתאימה ל-\(q\) היא</p>
\[
\frac12\bigl(\ell_1(u)\ell_2(w)+\ell_2(u)\ell_1(w)\bigr).
\]

<h4>המקרה התלוי לינארית</h4>
<p>אם \(\ell_1\) ו-\(\ell_2\) תלויים לינארית, למשל \(\ell_2=c\ell_1\), אז</p>
\[
q(u)=c\ell_1(u)^2.
\]
<p>אם \(c>0\), זו תבנית חצי חיובית מדרגה \(1\) כל עוד \(\ell_1\neq0\). אם \(c<0\), זו תבנית חצי שלילית מדרגה \(1\). אם אחד הפונקציונלים הוא אפס, אז \(q=0\) ודרגתה \(0\).</p>

<div class="example-box">
<div class="example-box__label">דוגמה – פונקציונלים תלויים</div>
<p>ב-\(\mathbb{R}^2\), ניקח \(\ell_1(x,y)=x\) ו-\(\ell_2(x,y)=-x\). אז</p>
\[
q(x,y)=-x^2.
\]
<p>הצורה הקנונית היא \(\operatorname{diag}(-1,0)\), ולכן \(\pi=0\), \(\nu=1\), \(\rho=1\), \(\sigma=-1\). התבנית שלילית למחצה.</p>
</div>

<h4>המקרה הבלתי תלוי לינארית</h4>
<p>אם \(\ell_1\) ו-\(\ell_2\) בלתי תלויים לינארית, אפשר לחשוב על \(\ell_1(u)\) ו-\(\ell_2(u)\) כשתי קואורדינטות בלתי תלויות. בעזרת שינוי משתנים</p>
\[
a=\ell_1(u)+\ell_2(u),
\qquad
b=\ell_1(u)-\ell_2(u),
\]
<p>מקבלים</p>
\[
\ell_1(u)\ell_2(u)=\frac14(a^2-b^2).
\]
<p>לכן במקרה הבלתי תלוי מתקבלת תבנית לא מוגדרת מדרגה \(2\), עם</p>
\[
\pi(q)=1,
\qquad
\nu(q)=1,
\qquad
\rho(q)=2,
\qquad
\sigma(q)=0.
\]

<div class="example-box">
<div class="example-box__label">דוגמה – פונקציונלים בלתי תלויים</div>
<p>ניקח ב-\(\mathbb{R}^2\):</p>
\[
\ell_1(x,y)=x+y,
\qquad
\ell_2(x,y)=x-y.
\]
<p>אז</p>
\[
q(x,y)=(x+y)(x-y)=x^2-y^2.
\]
<p>זו תבנית לא מוגדרת: למשל \(q(1,0)=1>0\), ואילו \(q(0,1)=-1<0\). לכן \(\pi=1\), \(\nu=1\), \(\rho=2\), \(\sigma=0\).</p>
</div>

<h4>הגרעינים \(U=\ker\ell_1\) ו-\(W=\ker\ell_2\)</h4>
<p>מסמנים</p>
\[
U=\ker\ell_1,
\qquad
W=\ker\ell_2.
\]
<p>אם \(\ell_1\) פונקציונל לינארי לא־אפס, אז \(U\) הוא תת־מרחב מממד \(n-1\). אותו דבר עבור \(W\). בנוסף, עבור המכפלה</p>
\[
q(u)=\ell_1(u)\\ell_2(u)
\]
<p>מתקיים</p>
\[
q(u)=0 \iff u\in U \text{ או } u\in W.
\]
<p>כלומר</p>
\[
\ker q=U\cup W.
\]
<p>אם \(\ell_1,\ell_2\) בלתי תלויים לינארית, אז \(U\) ו-\(W\) הם שני היפר־מישורים שונים, ובדרך כלל האיחוד שלהם אינו תת־מרחב. במקרה זה</p>
\[
\dim(U\cap W)=n-2.
\]
<p>אם הם תלויים לינארית ולא־אפסיים, אז \(U=W\), ולכן \(\ker q=U\) הוא תת־מרחב מממד \(n-1\).</p>

<h3>ז. דרך חשיבה לפתרון שאלות</h3>
<div class="theorem-box">
<div class="theorem-box__label">אלגוריתם עבודה</div>
<ol>
<li>מזהים באיזה שדה עובדים. במפגש זה: \(\mathbb{R}\).</li>
<li>כותבים את התבנית כמטריצה סימטרית או כסכום ריבועים.</li>
<li>מביאים לצורה אלכסונית, ואם אפשר לצורה קנונית עם \(1,-1,0\).</li>
<li>סופרים מקדמים חיוביים, שליליים ואפסיים.</li>
<li>מחשבים \(\pi,\nu,\rho,\sigma\).</li>
<li>מסווגים: חיובית, שלילית, חצי חיובית, חצי שלילית או לא מוגדרת.</li>
<li>אם שואלים על \(\ker q\), בודקים בזהירות אם מדובר בתת־מרחב. זה נכון במקרים חצי־מוגדרים, אבל לא נכון באופן כללי.</li>
</ol>
</div>

<h3>ח. טבלת סיכום</h3>
<table>
<thead>
<tr><th>מושג</th><th>משמעות</th><th>נוסחה / תנאי</th></tr>
</thead>
<tbody>
<tr><td>תבנית ריבועית</td><td>פונקציה שמתקבלת מתבנית בילינארית סימטרית</td><td>\(q(v)=h(v,v)\)</td></tr>
<tr><td>הומוגניות ממעלה 2</td><td>כפל הווקטור בסקלר מכפיל את הערך בריבוע הסקלר</td><td>\(q(\lambda v)=\lambda^2q(v)\)</td></tr>
<tr><td>צורה אלכסונית</td><td>כתיבה כסכום ריבועים בלי איברים מעורבים</td><td>\(\sum\delta_i\beta_i^2\)</td></tr>
<tr><td>משפט סילבסטר</td><td>מספר החיוביים והשליליים אינו תלוי בבסיס</td><td>\(\pi,\nu\) שמורות</td></tr>
<tr><td>דרגה</td><td>מספר המקדמים הלא־אפסיים</td><td>\(\rho=\pi+\nu\)</td></tr>
<tr><td>חתימה</td><td>הפרש בין מספר החיוביים לשליליים</td><td>\(\sigma=\pi-\nu\)</td></tr>
<tr><td>קבוצת אפסים</td><td>וקטורים שעליהם התבנית מתאפסת</td><td>\(\ker q=\{v:q(v)=0\}\)</td></tr>
<tr><td>מקרה חצי־מוגדר</td><td>קבוצת האפסים היא תת־מרחב</td><td>\(\dim\ker q=n-\rho(q)\)</td></tr>
<tr><td>מכפלת פונקציונלים</td><td>תבנית מהצורה \(\ell_1\ell_2\)</td><td>תלויים: דרגה \(0\) או \(1\); בלתי תלויים: \(\pi=\nu=1\)</td></tr>
</tbody>
</table>
</div>
</div>

</div>
</main>
<footer class="footer">
<div class="container">
<div class="footer__inner">
<div>
<div class="footer__brand">אלגברה לינארית 2 · 20229</div>
<p class="footer__text">פורטל לימוד · האוניברסיטה הפתוחה</p>
</div>
<ul class="footer__links">
<li><a href="../../index.html">ראשי</a></li>
<li><a href="index.html">הקורס</a></li>
<li><a href="summaries.html">סיכומים</a></li>
</ul>
</div>
</div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"></script>
<script src="../../js/main.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
      renderMathInElement(document.body, {
        delimiters: [
          {left: '\\[', right: '\\]', display: true},
          {left: '\\(', right: '\\)', display: false}
        ],
        throwOnError: false
      });
    });
  </script>
</body>
</html>
