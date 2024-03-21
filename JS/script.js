
const dots = document.querySelectorAll('.main__content__stages_grid_button_dots');
const blockSlide = document.querySelectorAll('.main__content__stages_grid_block_mobile');
const leftBtn = document.querySelector('.main__content__stages_grid_button_left');
const rightBtn = document.querySelector('.main__content__stages_grid_button_right');

dots[0].classList.add('main__content_dots--active');
blockSlide[0].classList.add('main__content__stages_grid_block_mobile--active');

let counter = 0;

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        for (let k = 0; k < blockSlide.length; k++) {
            dots[k].classList.remove('main__content_dots--active');
            blockSlide[k].classList.remove('main__content__stages_grid_block_mobile--active');
        }
        counter = i;
        blockSlide[counter].classList.add('main__content__stages_grid_block_mobile--active');
        dots[counter].classList.add('main__content_dots--active');
        if (i == 1) {
            leftBtn.classList.remove('main__content__stages_grid_button--left-active')
        }
    });
}

leftBtn.addEventListener('click', () => {
    for (let k = 0; k < blockSlide.length; k++) {
        dots[k].classList.remove('main__content_dots--active');
        blockSlide[k].classList.remove('main__content__stages_grid_block_mobile--active');

    }
    counter--;
    if (counter < 0) {
        counter = blockSlide.length = 0;
    }
    blockSlide[counter].classList.add('main__content__stages_grid_block_mobile--active');
    dots[counter].classList.add('main__content_dots--active');

    if (counter == 0) {
        leftBtn.classList.remove('main__content__stages_grid_button--left-active')
    }
    rightBtn.classList.remove('main__content__stages_grid_button--disabled')

})

rightBtn.addEventListener('click', () => {
    for (let k = 0; k < blockSlide.length; k++) {
        dots[k].classList.remove('main__content_dots--active');
        blockSlide[k].classList.remove('main__content__stages_grid_block_mobile--active');
    }
    counter++;
    if (counter >= blockSlide.length) {
        counter = blockSlide.length - 1
    }
    blockSlide[counter].classList.add('main__content__stages_grid_block_mobile--active');
    dots[counter].classList.add('main__content_dots--active');

    if (counter == blockSlide.length - 1) {
        rightBtn.classList.add('main__content__stages_grid_button--disabled')
    }



    leftBtn.classList.add('main__content__stages_grid_button--left-active')

});

const firstDots = dots[dots.length = 0]
firstDots.addEventListener('click', () => {
    leftBtn.classList.remove('main__content__stages_grid_button--left-active')
    rightBtn.classList.remove('main__content__stages_grid_button--disabled')
})

const lastDots = dots[dots.length - 1];
lastDots.addEventListener('click', () => {
    leftBtn.classList.add('main__content__stages_grid_button--left-active')
    rightBtn.classList.add('main__content__stages_grid_button--disabled')
});

const centerDots = dots[dots.length = 1] || dots[dots.length = 2] || dots[dots.length = 3];
centerDots.addEventListener('click', () => {
    leftBtn.classList.add('main__content__stages_grid_button--left-active')
    rightBtn.classList.remove('main__content__stages_grid_button--disabled')
});


// leftBtn.style.display = 'none'


// const leftBtnCarousel = document.querySelector('.button_left_arrow');
// const rightBtnCarousel = document.querySelector('.button_right_arrow');
// const carouselArea = document.querySelector('.main__content__participant_carousel');
// const carouselLeft = document.querySelector('.main__content__participant_carousel_left');
// const carouselRight = document.querySelector('.main__content__participant_carousel_right');

// rightBtnCarousel.addEventListener('click', () => {
//     carouselLeft.style.transform = 'translateX(-100%)';
//     carouselRight.style.transform = 'translateX(-100%)';
// })
// leftBtnCarousel.addEventListener('click', () => {
//     carouselLeft.style.transform = 'translateX(0%)';
//     carouselRight.style.transform = 'translateX(0%)';
// })

let ofset = 0;

// ====================================DESCTOP=======================================

let numSlide = document.getElementById('num_carousel_left');
const sliderLine = document.querySelector('.main__content__participant_carousel-line_item');



document.querySelector('.button_right_arrow').addEventListener('click', () => {
    ofset += 394;
    if (ofset > 1182) {
        ofset = 0
        numSlide.innerText = 2
    }
    sliderLine.style.left = -ofset + "px"
    numSlide.innerText = +numSlide.innerText + 1;

});
document.querySelector('.button_left_arrow').addEventListener('click', () => {
    ofset -= 394;
    if (ofset < 0) {
        ofset = 1182
        numSlide.innerText = 7

    }
    sliderLine.style.left = -ofset + "px";
    numSlide.innerText = +numSlide.innerText - 1;
});

// =============================PAD============================================
let numSlidePad = document.getElementById('num_carousel_left_pad');
const sliderLinePad = document.querySelector('.main__content__participant_carousel-line_item_pad');


document.querySelector('.button_right_arrow_pad').addEventListener('click', () => {
    ofset += 394;
    if (ofset > 1576) {
        ofset = 0
        numSlidePad.innerText = 1
    }
    sliderLinePad.style.left = -ofset + "px"
    numSlidePad.innerText = +numSlidePad.innerText + 1;

});
document.querySelector('.button_left_arrow_pad').addEventListener('click', () => {
    ofset -= 394;
    if (ofset < 0) {
        ofset = 1576
        numSlidePad.innerText = 7

    }
    sliderLinePad.style.left = -ofset + "px";
    numSlidePad.innerText = +numSlidePad.innerText - 1;
});

// ====================================MOBILE=======================================
let numSlideMobile = document.getElementById('num_carousel_left_mobile');
const sliderLineMobile = document.querySelector('.main__content__participant_carousel-line_item_mobile');


document.querySelector('.button_right_arrow_mobile').addEventListener('click', () => {
    ofset += 335;
    if (ofset > 1675) {
        ofset = 0
        numSlideMobile.innerText = 0
    }
    sliderLineMobile.style.left = -ofset + "px"
    numSlideMobile.innerText = +numSlideMobile.innerText + 1;

});
document.querySelector('.button_left_arrow_mobile').addEventListener('click', () => {
    ofset -= 335;
    if (ofset < 0) {
        ofset = 1675
        numSlideMobile.innerText = 7

    }
    sliderLineMobile.style.left = -ofset + "px";
    numSlideMobile.innerText = +numSlideMobile.innerText - 1;
});