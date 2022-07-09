$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY > 20){
    $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }if(this.scroll > 500){
        $('.scroll-up-btn').removeClass("show");
    }
});
//slide-up script

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});
// typing Animation script
var typed=new typed(".g",{
strings: ["Web Developer","Problem Solver","Design Engineer","Anaylizer"],
typeSpeed:100,
backspeed:60,
loop:true
});
var typed=new typed(".g1",{
    strings: ["Web Developer","Problem Solver","Design Engineer","Anaylizer"],
    typeSpeed:100,
    backspeed:60,
    loop:true
    });
// owl carousel script
$('.menu-btn').click(function(){
$('.navbar .menu').toggleClass("active");
$('.menu-btn i').toggleClass("active");
});

// 
$('.carousal').owlCarousal({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverpause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }


});
});