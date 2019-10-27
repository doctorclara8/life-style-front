$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {

        $('.animated-icon').toggleClass('open');
    });
});


$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 600,
        draggable: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        prevArrow: ".prew",
        nextArrow: ".next",

        responsive: [{
                breakpoint: 768,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    speed: 600,
                    touchThreshold: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 600,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});