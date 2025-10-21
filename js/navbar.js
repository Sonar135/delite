
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

   const prof = document.getElementById("prof");
const profBox = document.querySelector(".prof_box");

if (prof && profBox) {
  // Toggle dropdown when clicking the profile
  prof.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the document click listener from firing
    profBox.classList.toggle("active");
  });

  // Close dropdown when clicking anywhere outside
  document.addEventListener("click", (e) => {
    if (!prof.contains(e.target) && !profBox.contains(e.target)) {
      profBox.classList.remove("active");
    }
  });
}

    })
    .catch(error => console.error("Error loading navbar:", error));
});


