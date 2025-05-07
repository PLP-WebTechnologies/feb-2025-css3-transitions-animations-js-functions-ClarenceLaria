const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

// Toggle theme and save preference
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  
  // Add animation on theme toggle
  body.style.animation = "fadeIn 0.5s ease-in";
});
