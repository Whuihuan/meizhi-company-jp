import "./jquery";

import Swiper from './swiper-bundle.min';

$(document).ready(() => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    const splashSwiper = new Swiper('.splash-swiper', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
        },
    });


    function updateNav() {
        if ($(window).scrollTop() > 500) {
            $(".header").removeClass('transparent');
        } else {
            $(".header").addClass('transparent');
        }
    }

    $(window).scroll(function(event) {
        updateNav()
    });

    updateNav();

});