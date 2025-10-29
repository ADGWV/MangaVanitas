// ✨ تأثير ظهور الصفحة تدريجياً
window.addEventListener("load", () => {
  document.body.classList.add("visible");
});

// 🧠 تحميل بيانات المانجات من JSON
async function loadManga() {
  try {
    const response = await fetch("assets/data/manga.json");
    const mangas = await response.json();
    const container = document.querySelector(".manga-grid");
    container.innerHTML = "";

    mangas.forEach((manga) => {
      const card = document.createElement("div");
      card.className = "manga-card fade-in";
      card.innerHTML = `
        <img src="${manga.image}" alt="${manga.title}">
        <div class="manga-info">
          <h3>${manga.title}</h3>
          <p>${manga.genre}</p>
        </div>
      `;
      card.addEventListener("click", () => openManga(manga));
      container.appendChild(card);
    });
  } catch (error) {
    console.error("فشل تحميل بيانات المانجا:", error);
  }
}

// 📖 فتح صفحة المانجا
function openManga(manga) {
  localStorage.setItem("selectedManga", JSON.stringify(manga));
  window.location.href = "manga.html";
}

// 🔎 البحث الفوري
document.querySelector("#search")?.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".manga-card").forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(term) ? "block" : "none";
  });
});

// 📚 صفحة قراءة المانجا
function loadReader() {
  const manga = JSON.parse(localStorage.getItem("selectedManga"));
  if (!manga) return (window.location.href = "index.html");

  document.querySelector(".reader-title").textContent = manga.title;
  const imgContainer = document.querySelector(".reader-images");

  manga.pages.forEach((page, i) => {
    const img = document.createElement("img");
    img.src = page;
    img.alt = `${manga.title} - صفحة ${i + 1}`;
    img.className = "page-fade";
    imgContainer.appendChild(img);
  });
}

// 🚀 تنفيذ تلقائي حسب الصفحة
if (window.location.pathname.includes("index.html")) loadManga();
if (window.location.pathname.includes("manga.html")) loadReader();