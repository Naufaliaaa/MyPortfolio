//Toggle & Responsive
const NavSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");
    
    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

NavSlide();

// Dropdown Click Functionality
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdownMenu.classList.toggle("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
        dropdownMenu.classList.remove("active");
    }
});

// Close dropdown when clicking a link inside it
const dropdownLinks = dropdownMenu.querySelectorAll("a");
dropdownLinks.forEach(link => {
    link.addEventListener("click", () => {
        dropdownMenu.classList.remove("active");
    });
});

// Clear Form Before Unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};