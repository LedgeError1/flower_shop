let currentSlide = 0;
const slides = document.querySelectorAll('.gallery img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = '0'; 
        slide.style.transition = 'opacity 0.5s ease-in-out';
        slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
    setTimeout(() => {
        slides[index].style.opacity = '1';
    }, 10);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
