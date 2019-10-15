$(document).ready(function(){
    $(".menu-btn").click(function(){
        $(".top-nav").toggleClass("active");
    });
    
    $('.post-content').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        items: 3,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots: true,
            },
            600:{
                items:2,
                dots: true,
            },
            1000:{
                items:3
            }
        }
    });
    $('.main-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        items: 1,
        autoHeight: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots: true,
            },
            600:{
                items:1,
                dots: true,
            },
            1000:{
                items:1,
                dots: false,
            }
        }
    });
});