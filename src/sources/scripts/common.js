import "./jquery"

import "./jquery.hover3d.min";

$(document).ready(() => {
    $(".mobile-header-button").on('click', () => {
        $(".header").toggleClass('mobile-active');
        $(".header").removeClass('transparent');
    })

    $(".product-block-wrapper").hover3d({
        selector: ".product-block",
        perspective: 2400,
        sensitivity: 40,
    });
});