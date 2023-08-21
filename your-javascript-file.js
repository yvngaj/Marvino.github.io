showSchoolInfoButton.addEventListener("click", () => {
  container.style.transform = "translateX(150%)";
  container.style.opacity = 0;
  setTimeout(() => {
    window.location.href = "uae_school_info.html"; // Redirect to the UAE School Info page
  }, 1000); // Delay before redirecting (in milliseconds)
});
