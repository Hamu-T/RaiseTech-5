// ハンバーガーメニューの表示・非表示

document.querySelector('.js-hamburger').addEventListener(
'click',
() => {
document. querySelector('.js-hamburger').classList.toggle ('menu-open');
document. querySelector ('.p-gmenu').classList.toggle('menu-open');
document. querySelector ('body').classList.toggle('menu-open');
document. querySelector('.header-nav').classList.toggle ('menu-open');
}
);



// サブメニューの表示・非表示

$(function() {
    $(".menu").hover(function() {
        $(this).chidlren(".sub-menu").stop().slideToggle();
    });
});
