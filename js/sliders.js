document.querySelectorAll(".menu-gallery-track, .gallery-track").forEach(track => {
  track.addEventListener("wheel", e => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    }
  }, { passive: false });
});