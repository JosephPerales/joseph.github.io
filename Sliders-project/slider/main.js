let currentIndex = 0;
const sliderItems = document.querySelectorAll('.slider-item');
const slider = document.querySelectorAll('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
    [...slider].map(item => {
        item.style.transform = `translateX(-${index * 100}%)`;
    });
    clearControls();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
}

function clearControls() {
    if(currentIndex === 0) {
        prev.style.opacity = "50%";
        prev.removeEventListener("click", prevSlide);
    }else {
        prev.style.opacity = "100%";
        prev.addEventListener("click", prevSlide);
    }
    //Inportante
    if(currentIndex === 2) {
        next.style.opacity = "50%";
        next.removeEventListener("click", nextSlide);
    }else {
        next.style.opacity = "100%";
        next.addEventListener("click", nextSlide);
    }
}

console.log((0 -  1)%4)
showSlide(currentIndex);