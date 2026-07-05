# 💻 Night Gym Academy - Coding Standards

Version: 1.0

Project Name:
Night Gym Academy

Parent Company:
YFLB

Founder:
Youssef El Basuony

---

# 1. General Principles

Write clean code.

Write readable code.

Write reusable code.

Write scalable code.

Avoid unnecessary complexity.

Always think about future expansion.

---

# 2. HTML Standards

Use Semantic HTML.

Use proper indentation (4 spaces).

Every page must have:

<header>

<main>

<footer>

Use descriptive class names.

Avoid unnecessary divs.

Close all tags properly.

Example:

<header class="navbar">

<section class="hero">

<article class="course-card">

<footer class="footer">

---

# 3. CSS Standards

Organize CSS into sections.

Example:

/* ========================================
   GLOBAL
======================================== */

/* ========================================
   HEADER
======================================== */

/* ========================================
   HERO
======================================== */

/* ========================================
   FOOTER
======================================== */

Use CSS Variables.

Avoid duplicated styles.

Use Flexbox and Grid.

Mobile-first whenever possible.

Keep selectors simple.

---

# 4. JavaScript Standards

Use modern JavaScript (ES6+).

Use const whenever possible.

Use let only when needed.

Avoid global variables.

Split code into reusable functions.

Keep functions small.

Use modules for large features.

Example:

function calculateBMI(){}

function updateProgress(){}

---

# 5. Naming Convention

HTML Classes

Use kebab-case

Examples

hero-card

feature-card

progress-bar

bottom-nav

---

CSS Variables

Use

--primary-color

--secondary-color

--text-color

--background-color

---

JavaScript Variables

Use camelCase

Examples

userName

courseProgress

totalCalories

exerciseList

---

JavaScript Functions

Use camelCase

Examples

calculateBMI()

updateDashboard()

loadCourses()

saveProgress()

---

JavaScript Classes

Use PascalCase

Examples

User

Exercise

Course

Lesson

Dashboard

---

# 6. File Naming

Use lowercase.

Use hyphens.

Examples

home.html

login.html

course-details.html

home.css

dashboard.css

course.js

---

# 7. Folder Naming

Use lowercase.

Examples

css/

js/

images/

videos/

icons/

components/

pages/

database/

---

# 8. Comments

Comment only when useful.

Example

/* Hero Section */

/* Dashboard Cards */

/* Load User Progress */

Avoid obvious comments.

---

# 9. Responsive Design

Desktop

Laptop

Tablet

Mobile

All pages must work correctly.

---

# 10. Performance

Avoid duplicated code.

Optimize images.

Minimize DOM manipulation.

Reuse components.

---

# 11. Accessibility

Use semantic HTML.

Add alt attributes.

Use readable font sizes.

Maintain proper color contrast.

Keyboard navigation should work.

---

# 12. Code Review Checklist

✔ Clean

✔ Organized

✔ Responsive

✔ Reusable

✔ No duplicated code

✔ No unused code

✔ Easy to maintain

✔ Easy to expand

---

# 13. Development Principle

Code should be written for the next developer,
even if that developer is yourself six months later.

Always prioritize clarity over cleverness.