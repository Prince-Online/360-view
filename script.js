document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('galleryGrid');
  const fileInput = document.getElementById('fileInput');
  const items = typeof PANORAMA_ITEMS !== 'undefined' ? PANORAMA_ITEMS : [];

  if (grid) {
    items.forEach(item => {
      const a = document.createElement('a');
      a.className = 'gcard';
      a.href = `viewer.html?id=${encodeURIComponent(item.id)}`;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      a.innerHTML = `
        <div class="gcard-thumb">
          <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
          <div class="explore-btn-overlay">
            <div class="explore-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
          </div>
          <span class="vr-pill">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            360°
          </span>
        </div>
        <div class="gcard-body">
          <h2 class="gcard-title">${item.title}</h2>
          <div class="gcard-arrow">
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </div>
        </div>
      `;

      grid.appendChild(a);
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          sessionStorage.setItem('customPanorama', ev.target.result);
          sessionStorage.setItem('customTitle', file.name);
          window.open('viewer.html?custom=1', '_blank');
        } catch {
          const blobUrl = URL.createObjectURL(file);
          window.open(`viewer.html?blob=${encodeURIComponent(blobUrl)}&title=${encodeURIComponent(file.name)}`, '_blank');
        }
      };
      reader.readAsDataURL(file);
    });
  }
});
