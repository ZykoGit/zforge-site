document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("visited")) {
    alert("Welcome to Zforge - where Minecraft really comes alive!");
    localStorage.setItem("visited", "true");
  }
});

docuement.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("modUploadForm");
  const status = document.getElementById("uploadStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = form.category.value;
      status.textContent = "Thanks for submitting your Upload! (Feature Coming Soon)"
    });
  }
});
