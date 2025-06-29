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

const buttons = document.querySelectorAll('.services-list button');
const image = document.getElementById('service-img');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Update image
    const imgSrc = btn.getAttribute('data-img');
    image.setAttribute('src', imgSrc);

    // Update active button
    buttons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Trigger click on the first button to set default state
if (buttons.length > 0) {
  buttons[0].click();
}

const testimonials = [
  {
    image: "assets/images/profile.jpg",
    name: "Aarav Mehta",
    position: "CEO",
    company: "TeamHive",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire." 
  },
  {
    image: "assets/images/profile.jpg",
    name: "Neha Sharma",
    position: "HR Lead",
    company: "Upstride Solutions",
    text: "Their workshops improved our team cohesion and performance remarkably."
  },
  {
    image: "assets/images/profile.jpg",
    name: "Ravi Kulkarni",
    position: "Operations Manager",
    company: "CoreReach",
    text: "Personalized, impactful, and insightful consultation sessions every time!"
  }
];

let current = 0;

function showTestimonial(index) {
  const t = testimonials[index];
  document.getElementById('testimonial-text').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('testimonial-image').src = t.image;
    document.getElementById('testimonial-text').textContent = t.text;
    document.getElementById('testimonial-name').textContent = t.name;
    document.getElementById('testimonial-position').textContent = t.position + ', ' + t.company;
    // document.getElementById('testimonial-company').textContent = t.company;
    document.getElementById('testimonial-text').style.opacity = 1;
  }, 150);
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

window.onload = () => showTestimonial(current);
