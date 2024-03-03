const numCarouselLeft = document.getElementById('num_carousel_left');
const numCarouselRight = document.getElementById('num_carousel_right');
const btnCarouselLeft = document.getElementById('button_left_arrow');
const btnCarouselRight = document.querySelector('.button_right_arrow');

if (numCarouselLeft.innerText == 3) {
    numCarouselRight.style.color = 'gray';
} else {
    numCarouselLeft.style.color = 'black'
}
