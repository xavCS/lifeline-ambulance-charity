const hamMenu = document.querySelector('#hamburger-menu');

hamMenu.addEventListener('click', ()=>{
    const pages = document.querySelector('#page-links');
    pages.classList.toggle('unhide');
})

// const sliderOne = document.getElementById('slider-one');
// const sliderTwo = document.getElementById('slider-two');
// const sliderThree = document.getElementById('slider-three');

// sliderOne.addEventListener('click', () => {
//     sliderOne.classList.add('active');
//     sliderTwo.classList.remove('active');
//     sliderThree.classList.remove('active');
// })

// sliderTwo.addEventListener('click', () => {
//     sliderTwo.classList.add('active');
//     sliderOne.classList.remove('active');
//     sliderThree.classList.remove('active');
// })

// sliderThree.addEventListener('click', () => {
//     sliderThree.classList.add('active');
//     sliderOne.classList.remove('active');
//     sliderTwo.classList.remove('active');
// })

const image = document.querySelector('img');

image.addEventListener('click', () => {
    image.classList.toggle('active')
})