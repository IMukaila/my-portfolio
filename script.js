const welcomeButton = document.getElementById("welcomeButton");

welcomeButton.addEventListener("click", function () {
    alert("Welcome to my first website portfolio!");
});

const themeToggle = document.getElementById("theme-toggle");

// Load the saved theme when the page opens
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
}

// Switch between dark mode and light mode
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Dark Mode";
    }
});

const backToTop = document.getElementById("back-to-top");

// Show the button when the visitor scrolls down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Scroll smoothly to the top when clicked
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});