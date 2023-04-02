// ハンバーガーメニューの表示・非表示

document.querySelector('.js-hamburger').addEventListener(
'click',
() => {
document. querySelector('.js-hamburger').classList.toggle ('menu-open');
document. querySelector('.header-nav').classList.toggle ('menu-open');
});



// サブメニューの表示・非表示

$(function() {
    $(".menu").hover(function() {
        $(this).children(".sub-menu").stop().slideToggle(200);
    });
});
