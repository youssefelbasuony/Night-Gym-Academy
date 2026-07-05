# 🗄️ Night Gym Academy - Database Plan

Version: 1.0

Project Name:
Night Gym Academy

Parent Company:
YFLB

Founder:
Youssef El Basuony

---

# Database Philosophy

The database must be:

• Scalable

• Secure

• Fast

• Well organized

• Easy to maintain

• Ready for future expansion

---

# Database Type

Current Development

SQLite / Firebase (Prototype)

Future Production

PostgreSQL

Redis (Caching)

Cloud Storage

---

# Main Database Tables

## Users

- User ID
- Full Name
- Username
- Email
- Password
- Profile Image
- Date of Birth
- Age
- Country
- Language
- Role
- Account Status
- Email Verified
- Parent ID
- Created At
- Updated At

---

## Parents

- Parent ID
- Full Name
- Email
- Phone Number
- Relationship
- Verification Status

---

## Roles

- Student
- Coach
- Instructor
- Admin
- Super Admin

---

## Courses

- Course ID
- Title
- Description
- Category
- Difficulty
- Instructor
- Thumbnail
- Duration
- Language
- Status

---

## Chapters

- Chapter ID
- Course ID
- Title
- Order

---

## Lessons

- Lesson ID
- Chapter ID
- Title
- Video
- PDF
- Notes
- Duration

---

## Exercises

- Exercise ID
- Arabic Name
- English Name
- Scientific Name
- Primary Muscle
- Secondary Muscles
- Equipment
- Difficulty
- Instructions
- Breathing
- Tempo
- Safety Tips
- Images
- Videos

---

## Muscles

- Muscle ID
- Arabic Name
- English Name
- Scientific Name
- Origin
- Insertion
- Function
- Innervation
- Blood Supply
- Joint Actions
- Images

---

## Nutrition

- Nutrition ID
- Food Name
- Calories
- Protein
- Carbohydrates
- Fat
- Vitamins
- Minerals

---

## Questions

- Question ID
- Category
- Difficulty
- Question
- Answer
- Explanation
- Reference

---

## Exams

- Exam ID
- Title
- Duration
- Passing Score
- Total Questions

---

## Certificates

- Certificate ID
- User ID
- Course ID
- Certificate Number
- QR Code
- Issue Date

---

## Progress

- User ID
- Course ID
- Lesson ID
- Progress %
- Last Activity

---

## Achievements

- Achievement ID
- User ID
- XP
- Level
- Badge

---

## Notifications

- Notification ID
- User ID
- Title
- Message
- Read Status
- Created At

---

## Community

- Post ID
- User ID
- Content
- Images
- Likes
- Comments
- Created At

---

# Relationships

User
↓

Courses

↓

Lessons

↓

Progress

↓

Exams

↓

Certificates

Users
↓

Achievements

Users
↓

Notifications

Users
↓

Community

Exercises
↓

Muscles

Lessons
↓

Questions

Courses
↓

Exams

---

# Media Storage

Images

Videos

PDF Files

Certificates

Icons

Documents

Stored separately from the database.

---

# Security

Passwords must be encrypted.

Sensitive information must never be stored as plain text.

Every user must have a unique ID.

---

# Future Expansion

The database must support:

Multi-language content

AI features

Mobile applications

Desktop applications

International certifications

Offline synchronization

Cloud synchronization

API integrations

---

# Database Design Principles

Normalize data whenever possible.

Avoid duplicated data.

Use relationships instead of repeating information.

Keep tables simple and maintainable.

Always design with future growth in mind.