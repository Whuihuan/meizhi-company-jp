import "./jquery";
import "./jquery.hover3d.min";

$(document).ready(() => {
    $(".product-block-wrapper").hover3d({
        selector: ".product-block",
        perspective: 2400,
        sensitivity: 40,
    });

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
    projectTitleFixed();
    $(window).scroll(function () {
        projectTitleFixed();
    });
});