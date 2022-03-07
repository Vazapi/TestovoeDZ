"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let buttonUp = document.querySelector('.button__up');
    let burgerBtn = document.querySelector('.header__burger');
    let navi = document.querySelector('.header__navi');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('header__close');
        navi.classList.toggle('header__navi_mini');
    });



    document.addEventListener('scroll', () => {
            
            if (scrollY > 400) {
                buttonUp.style.cssText = "display: flex;";
            } else {
                buttonUp.style.cssText = "display: none;";
            }
            
    
       
    });

})