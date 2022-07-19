let slides=document.querySelectorAll('.slide');
let currentSlide='0';
let isEnabled=true;

function changeCurrentSlide(n) {
  currentSlide=(n + slides.length) % slides.length;
}
