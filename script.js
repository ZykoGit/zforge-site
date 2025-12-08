document.addEventListener("DOMContentLoaded", () => {
  // Welcome alert
  if (!localStorage.getItem("visited")) {
    alert("Welcome to Zforge - where Minecraft really comes alive!");
    localStorage.setItem("visited", "true");
  }

  // Upload form
  const form = document.getElementById("modUploadForm");
  const status = document.getElementById("uploadStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = form.category.value;
      status.textContent = `Thanks for submitting your ${category}! (Feature Coming Soon)`;
    });
  }

  // Mods list
  const modList = document.getElementById("modList");
  if (modList) {
    fetch("mods.json")
      .then(response => response.json())
      .then(mods => {
        mods.forEach(mod => {
          const card = document.createElement("div");
          card.className = "mod-card";
          card.innerHTML = `
            <h3>${mod.name}</h3>
            <p>${mod.description}</p>
            <span class="category">${mod.category}</span>
          `;
          modList.appendChild(card);
        });
      })
      .catch(err => {
        modList.textContent = "Failed to load mods.";
        console.error(err);
      });
  }
  const form = document.getElementById("modUploadForm");
  const status = document.getElementById("uploadStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value;
      const description = form.description.value;
      const category = form.category.value;
      const thumbnail = form.thumbnail.files[0];
      const screenshots = Array.from(form.screenshots.files);

      status.innerHTML = `
        <h3>Preview:</h3>
        <div class="mod-card">
          ${thumbnail ? `<img src="${URL.createObjectURL(thumbnail)}" class="thumb">` : ""}
          <h4>${name}</h4>
          <p>${description}</p>
          <span class="category">${category}</span>
          <div class="screenshots">
            ${screenshots.map(file => `<img src="${URL.createObjectURL(file)}">`).join("")}
          </div>
        </div>
        <p>Thanks for submitting your upload! (Feature Coming Soon)</p>
      `;
    });
  }
});
