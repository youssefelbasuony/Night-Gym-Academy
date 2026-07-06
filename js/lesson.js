const params = new URLSearchParams(window.location.search);

const courseId = Number(params.get("course"));

const lessonId = Number(params.get("lesson"));

loadLesson();

async function loadLesson(){

    const response = await fetch("../../data/courses.json");

    const courses = await response.json();

    const course = courses.find(c=>c.id===courseId);

    const lesson = course.lessonsList.find(l=>l.id===lessonId);

    const completedLessons = JSON.parse(
        localStorage.getItem("completedLessons")
    ) || {};

    const lessonKey = `${courseId}-${lessonId}`;

    lesson.completed = completedLessons[lessonKey] || false;

    const lessonIndex = course.lessonsList.findIndex(
        l => l.id === lessonId
    );

    const previousLesson = course.lessonsList[lessonIndex - 1];

    const nextLesson = course.lessonsList[lessonIndex + 1];

    const container = document.getElementById("lessonContainer");

    const objectivesHTML = lesson.objectives
    .map(objective => {

        return `

            <div class="objective-card">

                <span class="objective-icon">

                    ✓

                </span>

                <p>

                    ${objective}

                </p>

            </div>

        `;

    })
    .join("");
    const resourcesHTML = lesson.resources
    .map(resource => {

        return `

            <div class="resource-card">

                <div class="resource-icon">

                    📄

                </div>

                <div>

                    <h3>

                        ${resource.title}

                    </h3>

                    <p>

                        ${resource.type.toUpperCase()}

                    </p>

                </div>

            </div>

        `;

    })
    .join("");
    let videoHTML = "";

    if (lesson.video && lesson.video.url) {

        if (lesson.video.type === "local") {

            videoHTML = `

                <video
                    class="lesson-video"
                    controls
                    preload="metadata">

                    <source
                        src="../../${lesson.video.url}"
                        type="video/mp4">

                    Your browser does not support the video tag.

                </video>

            `;

        }

    } else {

        videoHTML = `

            <div class="video-placeholder">

                <div class="play-icon">

                    ▶

                </div>

                <p>

                    Lesson Video Coming Soon

                </p>

            </div>

        `;

    }

    const isCompleted = lesson.completed;

    const navigationHTML = `

    <section class="lesson-navigation">

        <button
            class="nav-btn previous-btn"
            ${!previousLesson ? "disabled" : ""}>

            ← Previous

        </button>

        <button
            class="complete-btn"
            ${isCompleted ? "disabled" : ""}>

            ${isCompleted ? "✓ Completed" : "✓ Mark as Completed"}

        </button>

        <button
            class="nav-btn next-btn"
            ${!nextLesson ? "disabled" : ""}>

            Next →

        </button>

    </section>

    `;

    container.innerHTML = `
    
    
    <button class="back-btn" aria-label="Back to Course">

        <span class="back-icon">

            ←

        </span>

        <span>

            Back to Course

        </span>

    </button>

    <section class="lesson-header">

        <span class="lesson-course">

            ${course.title}

        </span>

        <span class="lesson-number">

            Lesson ${lesson.id}

        </span>

        <h1>

            ${lesson.title}

        </h1>

        <p>

            ${lesson.duration}

        </p>

    </section>
    <section class="video-section">

        ${videoHTML}

    </section>
    <section class="objectives-section">

        <h2>

            What You'll Learn

        </h2>

        <div class="objectives-grid">

            ${objectivesHTML}

        </div>

    </section>
    <section class="resources-section">

        <h2>

            Resources

        </h2>

        <div class="resources-grid">

            ${resourcesHTML}

        </div>

    </section>

    ${navigationHTML}
    
    `;

    const backButton = document.querySelector(".back-btn");

    const completeButton = document.querySelector(".complete-btn");

    const nextButton = document.querySelector(".next-btn");

    const previousButton = document.querySelector(".previous-btn");


    backButton.addEventListener("click", () => {

    window.location.href =
        `course-details.html?id=${courseId}`;

    });

    completeButton.addEventListener("click", () => {

        if (lesson.completed) return;

        lesson.completed = true;

        completedLessons[lessonKey] = true;

        localStorage.setItem(
            "completedLessons",
            JSON.stringify(completedLessons)
        );

        completeButton.textContent = "✓ Completed";

        completeButton.disabled = true;

    });

    if (nextButton && nextLesson) {

        nextButton.addEventListener("click", () => {

            window.location.href =
                `lesson.html?course=${courseId}&lesson=${nextLesson.id}`;

        });

    }

    if (previousButton && previousLesson) {

        previousButton.addEventListener("click", () => {

            window.location.href =
                `lesson.html?course=${courseId}&lesson=${previousLesson.id}`;

        });

    }

}