'use strict'
let b = document.querySelector('.banner')
document.addEventListener('scroll', e => {
    console.log(window.scrollY);
    b.style.clipPath = `circle(${50 + window.scrollY}px)`
})