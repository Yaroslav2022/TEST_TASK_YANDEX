
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




let ofset = 0;
let ofsetPad = 0;
let ofsetMobile = 0;

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
    ofsetPad += 394;
    if (ofsetPad > 1576) {
        ofsetPad = 0
        numSlidePad.innerText = 1
    }
    sliderLinePad.style.left = -ofsetPad + "px"
    numSlidePad.innerText = +numSlidePad.innerText + 1;

});
document.querySelector('.button_left_arrow_pad').addEventListener('click', () => {
    ofsetPad -= 394;
    if (ofsetPad < 0) {
        ofsetPad = 1576
        numSlidePad.innerText = 7

    }
    sliderLinePad.style.left = -ofsetPad + "px";
    numSlidePad.innerText = +numSlidePad.innerText - 1;
});

// ====================================MOBILE=======================================
let numSlideMobile = document.getElementById('num_carousel_left_mobile');
const sliderLineMobile = document.querySelector('.main__content__participant_carousel-line_item_mobile');


document.querySelector('.button_right_arrow_mobile').addEventListener('click', () => {
    ofsetMobile += 300;
    if (ofsetMobile > 1500) {
        ofsetMobile = 0
        numSlideMobile.innerText = 0
    }
    sliderLineMobile.style.left = -ofsetMobile + "px"
    numSlideMobile.innerText = +numSlideMobile.innerText + 1;

});
document.querySelector('.button_left_arrow_mobile').addEventListener('click', () => {
    ofsetMobile -= 300;
    if (ofsetMobile < 0) {
        ofsetMobile = 1500
        numSlideMobile.innerText = 7

    }
    sliderLineMobile.style.left = -ofsetMobile + "px";
    numSlideMobile.innerText = +numSlideMobile.innerText - 1;
});




function showSlide() {
    ofset += 394;
    if (ofset > 1182) {
        ofset = 0
        numSlide.innerText = 2
    }
    sliderLine.style.left = -ofset + "px"
    numSlide.innerText = +numSlide.innerText + 1;
}


function showSlidePad() {
    ofsetPad += 394;
    if (ofsetPad > 1576) {
        ofsetPad = 0
        numSlidePad.innerText = 1
    }
    sliderLinePad.style.left = -ofsetPad + "px"
    numSlidePad.innerText = +numSlidePad.innerText + 1;
}
function showSlideMobile() {
    ofsetMobile += 300;
    if (ofsetMobile > 1500) {
        ofsetMobile = 0
        numSlideMobile.innerText = 0
    }
    sliderLineMobile.style.left = -ofsetMobile + "px"
    numSlideMobile.innerText = +numSlideMobile.innerText + 1;
}




let second = 1000 * 4;
let TimerImage = setInterval(() => showSlide(), second);

let blockSlider = document.querySelector('.main__content__participant_carousel')
blockSlider.addEventListener('mouseover', () => {
    clearInterval(TimerImage)
})

blockSlider.addEventListener('mouseleave', () => {
    TimerImage = setInterval(() => showSlide(), second)
})


let TimerImagePad = setInterval(() => showSlidePad(), second);

let blockSliderPad = document.querySelector('.main__content__participant_carousel_pad')
blockSliderPad.addEventListener('mouseover', () => {
    clearInterval(TimerImagePad)
})

blockSliderPad.addEventListener('mouseleave', () => {
    TimerImagePad = setInterval(() => showSlidePad(), second)
})



let TimerImageMobile = setInterval(() => showSlideMobile(), second);

let blockSliderMobile = document.querySelector('.main__content__participant_carousel_mobile')
blockSliderMobile.addEventListener('mouseover', () => {
    clearInterval(TimerImageMobile)
})

blockSliderMobile.addEventListener('mouseleave', () => {
    TimerImageMobile = setInterval(() => showSlideMobile(), second)
})