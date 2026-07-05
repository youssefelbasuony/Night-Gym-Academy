history.scrollRestoration = "manual";
function goToPage(page) {

    if (page === "index") {
        window.location.href = "index.html";
        return;
    }

    window.location.href = `pages/${page}.html`;

}

function animateCounter(id, target, duration = 1500) {
    const element = document.getElementById(id);

    if (!element) return;

    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        start += increment;

        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}
function animateProgress(target) {

    const progress = document.getElementById("progress-fill");

    if (!progress) return;

    requestAnimationFrame(() => {
        progress.style.width = target + "%";
    });

}
function showToast(message, type = "success") {

    const container = document.getElementById("toast-container");

    if (!container) return;

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {

        toast.style.animation = "toastOut .35s ease forwards";

        setTimeout(() => {

            toast.remove();

        },350);

    },2500);

}
function setActiveNavigation() {

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "");

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.page === currentPage) {
            item.classList.add("active");
        }

    });

}
function initRevealAnimation(){

    const elements = document.querySelectorAll(".reveal, .stagger");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");
                observer.unobserve(entry.target);

            }

        });

    },{
        threshold:0.15
    });

    elements.forEach(element=>{

        observer.observe(element);

    });

}
window.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    setActiveNavigation();
    initRevealAnimation();
    animateCounter("solved-tests", 248);
    animateCounter("completed-sessions", 87);

    animateProgress(72);
    document
    .querySelectorAll(".feature-card, .nav-item")
    .forEach(item=>{

        item.addEventListener("keydown",(event)=>{

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                item.click();

            }

        });

    });
});
function continueLearning(){

    showToast("Opening your learning dashboard...","success");

}

function openDailyQuiz(){

    showToast("Daily Quiz will be available soon.","warning");

}