// ハンバーガーメニューの表示・非表示

$(function() {
    $(".js-hamburger").on("click",function() {
        $(".js-hamburger").toggleClass("menu-open");
        $(".header-nav").slideToggle();
        $(window).resize(function() {
            if ($(window).width() > 1200 ) {
                $(".header-nav").css("display", "flex");
            } else {
                $(".js-hamburger").removeClass("menu-open");
                $(".header-nav").css("display", "none");
            }
        });
    });
});


// サブメニューの表示・非表示

$(function() {
    $(".menu").hover(function() {
        $(this).children(".sub-menu").stop().slideToggle(200);
    });
});
