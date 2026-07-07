async function loadCourses() {

    const response = await fetch("../../data/courses.json");

    const courses = await response.json();

    const completedLessons = JSON.parse(
        localStorage.getItem("completedLessons")
    ) || {};

    const container = document.getElementById("coursesContainer");

        courses.forEach(course => {

            const completedCount = course.lessonsList.filter(lesson => {

                const lessonKey = `${course.id}-${lesson.id}`;

                return completedLessons[lessonKey];

            }).length;

            const progress = Math.round(
                (completedCount / course.lessonsList.length) * 100
            );

            const nextLesson =
                course.lessonsList.find(lesson => {

                    const lessonKey = `${course.id}-${lesson.id}`;

                    return !completedLessons[lessonKey];

                });

            const buttonText =
                progress > 0 && progress < 100
                    ? "Continue Learning"
                    : progress === 100
                        ? "Start Quiz"
                        : "Start Course";
            
            container.innerHTML += `

                <div class="course-card" onclick="openCourse(${course.id})">

                    <div class="course-image">

                        📚

                    </div>

                    <div class="course-content">

                        <span class="course-level">
                            ${course.level}
                        </span>

                        <h2>${course.title}</h2>

                        <p>${course.description}</p>

                        <div class="course-info">

                            <span>📖 ${course.lessons} Lessons</span>

                            <span>⏱ ${course.duration}</span>

                        </div>

                        <div class="progress-bar">

                            <div class="progress-fill"
                                style="width:${progress}%;"></div>

                        </div>

                        <button
                            class="course-btn"
                            onclick="event.stopPropagation(); continueCourse(${course.id})">

                            ${buttonText}

                        </button>

            <h2>${course.title}</h2>

            <p>${course.description}</p>

            <div class="course-info">

                <span>📖 ${course.lessons} Lessons</span>

                <span>⏱ ${course.duration}</span>

            </div>

            <div class="progress-bar">

                <div class="progress-fill"
                    style="width:${progress}%">
                </div>

            </div>

            <button class="course-btn">

                ${buttonText}

            </button>



        </div>

    </div>
    `;

    });

}

loadCourses();
function openCourse(id){

    window.location.href = `course-details.html?id=${id}`;

}
async function continueCourse(courseId) {

    const response = await fetch("../../data/courses.json");

    const courses = await response.json();

    const course = courses.find(c => c.id === courseId);

    const completedLessons = JSON.parse(
        localStorage.getItem("completedLessons")
    ) || {};

    const nextLesson = course.lessonsList.find(lesson => {

        const lessonKey = `${course.id}-${lesson.id}`;

        return !completedLessons[lessonKey];

    });

    if (nextLesson) {

        window.location.href =
            `lesson.html?course=${course.id}&lesson=${nextLesson.id}`;

        return;

    }

    alert("🎉 Course completed! Quiz system will be available soon.");

}
const backButton = document.querySelector(".back-btn");

if (backButton) {

    backButton.addEventListener("click", () => {

        if (window.history.length > 1) {

            window.history.back();

        } else {

            window.location.href = "../../index.html";

        }

    });

}