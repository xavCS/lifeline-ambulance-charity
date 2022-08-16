// const mobile = window.matchMedia('(max-width: 1260px)');

const hamMenu = document.querySelector('#hamburger-menu');

hamMenu.addEventListener('click', ()=>{
    const pages = document.querySelector('#page-links');
    pages.classList.toggle('unhide');
    
    // const content = document.querySelectorAll('.all')
    // for ( section of content) {
    //     section.classList.toggle('blur');
    // }
})