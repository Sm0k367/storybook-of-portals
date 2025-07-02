document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const pages = document.querySelectorAll('.page');
  const bgMusic = document.getElementById('bg-music');

  let currentPage = 0;

  function showNextPage() {
    if (currentPage < pages.length - 1) {
      pages[currentPage].style.display = 'none';
      currentPage++;
      pages[currentPage].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Hide all pages except the cover
  pages.forEach((page, index) => {
    if (index !== 0) {
      page.style.display = 'none';
    }
  });

  // Handle Start Button
  startBtn.addEventListener('click', () => {
    showNextPage();
    bgMusic.volume = 0.6;
    bgMusic.play().catch((e) => console.warn('Autoplay blocked:', e));
  });

  // Optional: Click anywhere to advance pages
  document.addEventListener('click', (e) => {
    const isButton = e.target.tagName.toLowerCase() === 'button' || e.target.classList.contains('portal-link');
    if (!isButton && currentPage > 0 && currentPage < pages.length - 1) {
      showNextPage();
    }
  });
});

