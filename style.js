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
        $(this).chidlren(".sub-menu").stop().slideToggle(2000);
        
        var elementHeight = $('.sub-menu').height();
        console.log(elementHeight);
        // 👆Uncaught TypeError: $(...).chidlren is not a function
        // 👆Uncaught TypeError: $(...).chidlren は関数ではありません。
    });
});


// chatGPT 「 css: .sub-menu{display:none;} 」<- 付けてアニメーションする(出来なかった)

// $(function() {
//     $(".menu").hover(function() {
//         $(this).siblings(".sub-menu").stop().slideDown(2000);
//     }, function() {
//         $(this).siblings(".sub-menu").stop().slideUp(2000);
//     });
// });
