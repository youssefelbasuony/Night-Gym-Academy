# 🎨 Night Gym Academy - Design System

Version: 1.0

Project Name:
Night Gym Academy

Parent Company:
YFLB

Founder:
Youssef El Basuony

---

# 1. Design Philosophy

Night Gym Academy follows a modern, premium, clean, and professional design.

The interface should feel:

• Modern
• Premium
• Minimal
• Easy to use
• Responsive
• Consistent

---

# 2. Theme

Primary Theme

Dark Mode

Background Color

#111111

Card Color

#1b1f2a

Primary Color

#2563eb

Success Color

#22c55e

Warning Color

#f59e0b

Danger Color

#ef4444

Text Color

#ffffff

Secondary Text

#cbd5e1

Border Color

rgba(255,255,255,.08)

---

# 3. Typography

Primary Font

Arial

Future Fonts

Inter

Poppins

Roboto

Headings

Bold

Body

Regular

---

# 4. Border Radius

Small

10px

Medium

15px

Large

20px

Extra Large

25px

---

# 5. Shadows

Cards

0 15px 35px rgba(0,0,0,.30)

Buttons Hover

0 8px 20px rgba(0,0,0,.25)

---

# 6. Spacing

Small

10px

Medium

20px

Large

30px

Extra Large

40px

---

# 7. Buttons

Primary Button

Blue

Rounded

Hover Animation

Secondary Button

Transparent

Blue Border

Hover Fill

Danger Button

Red

Success Button

Green

Disabled Button

Gray

---

# 8. Cards

Card Style

Rounded

Shadow

Padding

Hover Animation

Cards include

Feature Cards

Exercise Cards

Course Cards

Dashboard Cards

Progress Cards

Certificate Cards

---

# 9. Icons

Use modern emoji icons during development.

Later replace them with SVG icons.

Examples

🏠 Home

📚 Courses

💪 Exercises

📝 Exams

🏆 Certificates

👤 Profile

⚙ Settings

---

# 10. Navigation

Top Navigation

Fixed

Bottom Navigation

Mobile Friendly

Highlight Active Item

Hover Animation

---

# 11. Animations

Smooth transitions

300ms

Hover Lift

Scale Effect

Fade In

Slide Up

Progress Animation

Avoid excessive animations.

---

# 12. Forms

Rounded Inputs

Clear Labels

Validation Messages

Password Toggle

Focused Border

---

# 13. Progress Bars

Rounded

Animated

Gradient Fill

Percentage Text

---

# 14. Responsive Breakpoints

Mobile

0–767px

Tablet

768–1023px

Laptop

1024–1439px

Desktop

1440px+

---

# 15. Accessibility

Readable font sizes

High color contrast

Large clickable buttons

Keyboard friendly

Accessible forms

---

# 16. Future UI Components

Charts

Graphs

Tables

Modals

Dropdowns

Accordions

Tabs

Notifications

Tooltips

Sidebars

Calendar

---

# 17. Branding

Logo

Night Gym Academy

Parent Company

YFLB

Footer

Developed by YFLB

---

# 18. Design Principle

Every screen should feel like part of the same product.

Consistency is more important than decoration.

Simple is better than complicated.

Professional is better than flashy.


# Course Progress System v1

Implemented:

- Dynamic Lesson Page.
- Mark Lesson as Completed.
- LocalStorage persistence.
- Previous / Next Lesson navigation.
- Dynamic lesson completion status.
- Automatic course progress calculation.
- Course Details synchronization with lesson progress.

Current Storage:

LocalStorage

Key:

completedLessons

Example:

{
    "1-1": true,
    "1-2": true
}