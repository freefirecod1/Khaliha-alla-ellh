document.addEventListener('DOMContentLoaded', function() {
  const downloadButton = document.querySelector('.download-button');
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.close-modal');
  let isModalOpen = false;

  function openModal() {
    modal.style.display = 'flex';
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }

  function closeModal() {
    modal.style.display = 'none';
    isModalOpen = false;
    document.body.style.overflow = '';
    downloadButton.focus();
  }

  downloadButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard handling
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  });

  // Fallback for video autoplay
  const video = document.querySelector('video');
  video.play().catch(function(error) {
    console.log("Video autoplay failed:", error);
  });
});