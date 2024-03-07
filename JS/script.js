const numCarouselLeft = document.getElementById('num_carousel_left');
const numCarouselRight = document.getElementById('num_carousel_right');
const btnCarouselLeft = document.querySelector('.button_left_arrow');
const btnCarouselRight = document.querySelector('.button_right_arrow');
const btnCarouselDisable = document.querySelector('.button_left_arrow_disable');
const btnCarouselDisableRight = document.querySelector('.button_right_arrow_disable');
const carouselItems = document.querySelectorAll('.main__content__participant_carousel_item');


btnCarouselLeft.addEventListener('click', () => {
    numCarouselLeft.innerText = 3;
    btnCarouselRight.classList.remove('btn-display-none');
    btnCarouselLeft.classList.add('btn-display-none');
    btnCarouselDisableRight.classList.add('btn-display-none');
    btnCarouselDisable.classList.remove('btn-display-none');
    numCarouselRight.style.color = 'gray';

    carouselItems.forEach((elem) => {
        elem.style.transform = 'translateX(0%)'
        elem.style.transition = 'all .6s ease'
    });
});

btnCarouselRight.addEventListener('click', () => {
    numCarouselLeft.innerText = 6;
    btnCarouselRight.classList.add('btn-display-none');
    btnCarouselDisableRight.classList.remove('btn-display-none');
    btnCarouselDisable.classList.add('btn-display-none');
    numCarouselRight.style.color = 'black';
    btnCarouselLeft.classList.remove('btn-display-none');
    carouselItems.forEach((elem) => {
        elem.style.transform = 'translateX(-301%)'
        elem.style.transition = 'all .6s ease'
    });
});

