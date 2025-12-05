document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Zforge - where the mods come alive!");
});

docuement.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("modUploadForm");
  const status = document.getElementById("uploadStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "Thanks for submitting your Upload! (Feature Coming Soon)"
    });
  }
});
