/**
 * Created by mikol on 14.07.2017.
 */
var a;
if($(window).width()>=768)
    a=3;
if(($(window).width()<768)&&($(window).width()>500))
    a=2;
if($(window).width()<=500)
    a=1;
$('.slider').slick({
    slidesToShow: a,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    prevArrow: '<button type="button" class="leftArrow"><img src="img/leftArrow.png"></button>',
    nextArrow: '<button type="button" class="rightArrow"><img src="img/rightArrow.png"></button>',
    autoplay: true,
    autoplaySpeed: 3000,
});
$( window ).resize(function() {
    if($(window).width()>=768){
        $('.slider').slick("unslick");
        a=3;
    }
    if(($(window).width()<768)&&($(window).width()>500)){
        $('.slider').slick("unslick");
        a=2;
    }
    if($(window).width()<=500){
        $('.slider').slick("unslick");
        a=1;
    }
    $('.slider').slick({
        slidesToShow: a,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        prevArrow: '<button type="button" class="leftArrow"><img src="img/leftArrow.png"></button>',
        nextArrow: '<button type="button" class="rightArrow"><img src="img/rightArrow.png"></button>',
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
