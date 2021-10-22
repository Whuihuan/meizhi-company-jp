import "./jquery"

import "./jquery.hover3d.min";

$(document).ready(() => {
    $(".mobile-header-button").on('click', () => {
        $(".header").toggleClass('mobile-active');
        $(".header").removeClass('transparent');
    })

    function backToTop(time = 100) {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolltop > 30) {
            $(".BackToTop").show(time);
        }
        else {
            $(".BackToTop").hide(time);
        }
    }

    backToTop(0);
    $(".BackToTop").on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 100);
    });
    $(window).scroll(function() {
        backToTop();
    });
});