const params = new URLSearchParams(window.location.search);

const courseId = Number(params.get("id"));

loadCourse();

async function loadCourse() {

    const response = await fetch("../data/courses.json");

    const courses = await response.json();

    const course = courses.find(c => c.id === courseId);

    const container = document.getElementById("courseDetails");

    container.innerHTML = `
        <section class="course-header">

            <h1>${course.title}</h1>

            <p>${course.description}</p>

            <div class="course-meta">

                <span>📚 ${course.lessons} Lessons</span>

                <span>⏱ ${course.duration}</span>

                <span>⭐ ${course.level}</span>

                <span>📈 ${course.progress}%</span>

            </div>

        </section>
    `;
}