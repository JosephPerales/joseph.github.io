
const slider = document.getElementById('slider');
const prev = document.getElementsByClassName('slider-control')[0];
const next = document.getElementsByClassName('slider-control')[1];

const puntos = document.querySelectorAll(".punto");

const sliderElements = slider.getElementsByClassName("slide");

const rootStyles = document.documentElement.style;


const totalSlides = sliderElements.length;
const transitionTime = "1s"; //editable

let currentIndex = 0;
let sliderCounter = 0;
let isInTransition = false;

const DIRECTION = {
    RIGHT: "RIGHT",
    LEFT: "LEFT"
}

function getTransformValue() {
    return Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ""))
}

function reorderSlide() {
    const TransformValue = getTransformValue();
    rootStyles.setProperty("--transition", "none");
    if(sliderCounter === (totalSlides - 1)) {
        slider.appendChild(slider.firstElementChild);
        rootStyles.setProperty(
            '--slide-transform',
            `${TransformValue + sliderElements[sliderCounter].scrollWidth}px`
            )
            sliderCounter--;
    } else if (sliderCounter === 0) {
        slider.prepend(slider.lastElementChild);
        rootStyles.setProperty(
            '--slide-transform',
            `${TransformValue - sliderElements[sliderCounter].scrollWidth}px`
        )
        sliderCounter++;
    }

    isInTransition = false;
}

function reorderPuntos() {
    puntos.forEach((cadaPunto, i) => {
        puntos[i].classList.remove('activo')
    }) 
    puntos[currentIndex].classList.add('activo');
}

function moveSlide(direction) {
    if(isInTransition) return

    const TransformValue = getTransformValue();
    rootStyles.setProperty("--transition", `transform ${transitionTime}`);
    isInTransition = true;

    if(direction===DIRECTION.LEFT){
        rootStyles.setProperty(
            '--slide-transform',
            `${TransformValue + sliderElements[sliderCounter].scrollWidth}px`
        )

        currentIndex === 0 ? currentIndex = (totalSlides - 1) : currentIndex--;

        sliderCounter--;
        
    } else if (direction===DIRECTION.RIGHT) {
        rootStyles.setProperty(
            '--slide-transform',
            `${TransformValue - sliderElements[sliderCounter].scrollWidth}px`
        )

        currentIndex === (totalSlides - 1) ? currentIndex = 0 : currentIndex++;

        sliderCounter++;
    }
    reorderPuntos()
}

next.addEventListener('click', ()=>moveSlide(DIRECTION.RIGHT))
prev.addEventListener('click', ()=>moveSlide(DIRECTION.LEFT))

slider.addEventListener('transitionend', reorderSlide);

reorderSlide();

//Tiempo de movimiento de slider automático

const autoMove = setInterval(moveSlide, 6000, 'RIGHT');
slider.addEventListener('click', () => clearInterval(autoMove));

