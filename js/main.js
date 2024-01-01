// ********** lenis script **********
const lenis = new Lenis();
lenis.on('scroll', (e) => {
    console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



// ********** parallax script **********
$(window).on("scroll", scrollBox);
function scrollBox() {
    let parallax = $(".ptb, .dividerLine");
    let windowheight = $(window).height();
    parallax.each(function () {
        let parallaxtop = $(this).offset().top - $(window).scrollTop();
        if (parallaxtop < windowheight) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}



// ********** cursor script **********
const $cursor = $('.cursor');
const $controlCharacter = $('.control_character');
$(window).mousemove(function(e){
    $cursor.css({
        top: e.clientY,
        left: e.clientX
    });
    const cursorX = e.clientX / window.innerWidth;
    const maxMargin = 35;
    const marginLeft = (cursorX * 2 - 1) * maxMargin;
    $controlCharacter.css('margin-left', `${marginLeft}vw`);
});
$('.cursorPoint').mouseenter(function(){
    $('html').addClass('cursorSizeChanger');
});
$('.cursorPoint').mouseleave(function(){
    $('html').removeClass('cursorSizeChanger');
});



// ********** menu script **********
$('.menu').click(function(){
    $('#header, .menuWrap, .menuDim').toggleClass('active');
});
$('.menuDim').click(function(){
    $('#header, .menuWrap, .menuDim').removeClass('active');
});
$(document).on('click', 'a[href^="#"]', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500, 'easeInOutExpo');
});
$(window).on('scroll', function(){
    $('section').each(function(){
        if ($(window).scrollTop() >= $(this).offset().top && $(window).scrollTop() < ($(this).offset().top + $(this).outerHeight())) {
        $('.menuInner li').removeClass('active');
        $('.menuInner li').eq($(this).index()).addClass('active');
        }
    });
});



// ********** modal script **********
$(".image_grid li").click(function(){
    let modalIndex = $(this).index();
    $(".modalWrap li").removeClass("active");
    $(".modalWrap li").eq(modalIndex).addClass("active");
    $(".modalDim").addClass("active");
    $('html, body').css({'overflow': 'hidden'});
    $('html, body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
});
$('.modalClose, .modalDim').click(function(){
    $(".modalWrap li, .modalDim").removeClass("active");
    $('html, body').css({'overflow': 'auto'});
    $('html, body').off('scroll touchmove mousewheel');
});