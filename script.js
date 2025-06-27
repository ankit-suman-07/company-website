// script.js
document.addEventListener('DOMContentLoaded', () => {
  const serviceButtons = document.querySelectorAll('.services-list button');
  const serviceImg = document.getElementById('service-img');

  serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
      const imgSrc = button.getAttribute('data-img');
      serviceImg.src = imgSrc;
    });
  });
});
