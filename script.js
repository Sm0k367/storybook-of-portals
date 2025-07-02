document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const startBtn = document.getElementById("start");
  const glitchMusic = document.getElementById("glitch-music");
  const voiceover = document.getElementById("voiceover");

  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.remove("active");
      if (i === index) {
        page.classList.add("active");
      }
    });
  }

  function nextPage() {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  }

  // Start button
  startBtn.addEventListener("click", () => {
    glitchMusic.volume = 0.4;
    glitchMusic.play();

    voiceover.volume = 0.8;
    voiceover.play();

    nextPage();
  });

  // Click anywhere to turn page (except links)
  document.addEventListener("click", (e) => {
    const isLink = e.target.tagName === "A" || e.target.closest("a");
    if (!isLink && currentPage > 0 && currentPage < pages.length - 1) {
      nextPage();
    }
  });

  // Click on page to open portal if it has a data-url
  pages.forEach((page) => {
    page.addEventListener("click", () => {
      const url = page.getAttribute("data-url");
      if (url) window.open(url, "_blank");
    });
  });

  // Show cover on load
  showPage(currentPage);
});
