const params = new URLSearchParams(window.location.search);

const courseId = Number(params.get("id"));

loadCourse();

async function loadCourse() {

    const response = await fetch("../../data/courses.json");

    const courses = await response.json();

    const course = courses.find(c => c.id === courseId);

    const completedLessons = JSON.parse(
        localStorage.getItem("completedLessons")
    ) || {};

    const completedCount = course.lessonsList.filter(lesson => {

        const lessonKey = `${course.id}-${lesson.id}`;

        return completedLessons[lessonKey];

    }).length;

    const progress = Math.round(
        (completedCount / course.lessonsList.length) * 100
    );

    const container = document.getElementById("courseDetails");

    const learningHTML = course.learningOutcomes
    
    .map(item => `
        <div class="learning-card">

            <span class="learning-icon">✓</span>

            <p>${item}</p>

        </div>
    `)
    .join("");
    const lessonsHTML = course.lessonsList
    .map(lesson => {

        const lessonKey = `${course.id}-${lesson.id}`;

        const isCompleted = completedLessons[lessonKey] || false;

        const status = isCompleted
            ? "✅"
            : "▶";

            return `

                <div class="lesson-card"
                    tabindex="0"
                    role="button"
                    aria-label="Open lesson ${lesson.id}"
                    onclick="openLesson(${lesson.id})">

                    <div class="lesson-left">

                        <span class="lesson-status">

                            ${status}

                        </span>

                        <div>

                            <h3>

                                Lesson ${lesson.id}

                            </h3>

                            <p>

                                ${lesson.title}

                            </p>

                        </div>

                    </div>

                    <div class="lesson-arrow">

                        ❯

                    </div>

                </div>

                `;

    })
    .join("");
    container.innerHTML = `

        <button class="back-btn" aria-label="Back to Courses">

            <span class="back-icon">

                ←

            </span>

            <span>

                Back to Courses

            </span>

        </button>

        <section class="course-header">

            <h1>${course.title}</h1>

            <p>${course.description}</p>

            <div class="course-meta">

                <span>📚 ${course.lessons} Lessons</span>

                <span>⏱ ${course.duration}</span>

                <span>⭐ ${course.level}</span>

                <span>📈 ${progress}%</span>

            </div>

        </section>
        <section class="learning-section">

            <div class="section-header">

                <h2>What You'll Learn</h2>

                <p>
                    By the end of this course you will be able to:
                </p>

            </div>

            <div class="learning-grid">

             ${learningHTML}

            </div>

        </section>
        <section class="curriculum-section">

            <div class="section-header">

              <h2>📚 Course Curriculum</h2>

                <p>Complete lessons in order.</p>

            </div>

            <div class="curriculum-list">

                ${lessonsHTML}

            </div>

        </section>
    `;

    const backButton = document.querySelector(".back-btn");

    backButton.addEventListener("click", () => {

        if (window.history.length > 1) {

            window.history.back();

        } else {

            window.location.href = "../../index.html";

        }

    });

    document
    .querySelectorAll(".lesson-card")
    .forEach(card=>{

        card.addEventListener("keydown",(event)=>{

            if(event.key==="Enter"){

                card.click();

            }

        });

    });
}
function openLesson(lessonId){

    window.location.href =
        `lesson.html?course=${courseId}&lesson=${lessonId}`;

}