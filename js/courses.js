async function loadCourses() {

    const response = await fetch("../../data/courses.json");

    const courses = await response.json();

    const container = document.getElementById("coursesContainer");

        courses.forEach(course => {

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
                    style="width:${course.progress}%;">
                </div>

            </div>

            <button class="course-btn">

                ${course.progress > 0 ? "Continue Learning" : "Start Course"}

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