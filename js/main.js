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

$(document).ready(function() {
    $('.post-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 600,
        draggable: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: "<button type='button' class='slide-prev'> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='10px' height='10px' viewBox='0 0 492 492'  xml:space='preserve'>  <path d='M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z'/></svg> </button>",
        nextArrow: "<button type='button' class='slide-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='10px' height='10px' viewBox='0 0 451.846 451.847' xml:space='preserve'><path d='M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z'/></svg> </button > "

    });
});