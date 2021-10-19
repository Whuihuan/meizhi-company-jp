import "./jquery"

import "./jquery.hover3d.min";

$(document).ready(() => {
    $(".mobile-header-button").on('click', () => {
        $(".header").toggleClass('mobile-active');
        $(".header").removeClass('transparent');
    })

    if ($(".product-block-wrapper").length > 0) {
        $(".product-block-wrapper").hover3d({
            selector: ".product-block",
            perspective: 2400,
            sensitivity: 40,
        });
    }

    function backToTop(time = 100) {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolltop > 30) {
            $(".BackToTop").show(time);
        }
        else {
            $(".BackToTop").hide(time);
        }
    }

    function projectTitleFixed() {
        var fixed = false;
        $(".project-item").each(function (i) {
            var _this = $(this);
            var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            var top = _this[0].offsetTop + 10;
            var bottom = _this[0].offsetTop + _this[0].clientHeight + 10;
            if (scrolltop >= top && scrolltop <= bottom) {
                var title = _this.children(".item-title").html();
                $(".fixed-title").html(title);
                $(".fixed-title").show();
                fixed = true;
            }
            else {
                if (!fixed) {
                    $(".fixed-title").hide();
                }
            }
        });
    }

    window.onload = function () {
        backToTop(0);
        projectTitleFixed();
        $(".BackToTop").on("click", function () {
            $("html,body").animate({ scrollTop: 0 }, 100);
        });
        window.onscroll = function () {
            backToTop();
            projectTitleFixed();
        }
    }
});