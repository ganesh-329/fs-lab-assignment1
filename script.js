const toggleSwitch = document.querySelector(".input");
const body = document.body;

function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
    toggleSwitch.checked = true; 
}

toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});