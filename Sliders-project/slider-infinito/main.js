const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const buttomLeft = document.getElementById('button-left');
const buttomRight = document.getElementById('button-right');

const sliderElements = document.querySelectorAll('.slider__element')

const rootStyles = document.documentElement.style;

let slideCounter = 0;
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
    if(slideCounter === (sliderElements.length - 1)) {
        slider.appendChild(slider.firstElementChild);
        rootStyles.setProperty(
            '--slide-transform',
            `${TransformValue + sliderElements[slideCounter].scrollWidth}px`
            )
        slideCounter--;
    } else if (slideCounter === 0) {
        slider.prepend(slider.lastElementChild);
        rootStyles.setProperty(
            '--slide-transform',
            `${TransformValue - sliderElements[slideCounter].scrollWidth}px`
            )
        slideCounter++;
    }

    isInTransition = false;
    console.log("TransformValue ahora es: " +TransformValue)

}

function moveSlide(direction) {
    if(isInTransition) return

    const TransformValue = getTransformValue();
    rootStyles.setProperty("--transition", "transform 1s");
    isInTransition = true;

    if(direction===DIRECTION.LEFT){
        rootStyles.setProperty(
            '--slide-transform',
            `${TransformValue + sliderElements[slideCounter].scrollWidth}px`
            )
        slideCounter--;
    }else if (direction===DIRECTION.RIGHT) {
        rootStyles.setProperty(
            '--slide-transform',
            `${TransformValue - sliderElements[slideCounter].scrollWidth}px`
        )
        slideCounter++;
    }
}

buttomRight.addEventListener('click', ()=>moveSlide(DIRECTION.RIGHT))
buttomLeft.addEventListener('click', ()=>moveSlide(DIRECTION.LEFT))

slider.addEventListener('transitionend', reorderSlide);

reorderSlide();

