$(document).ready(function () {
    //page-slider script
    $('#main-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: false,
            }
        }
    })

    $('#product-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        dots: false,
        navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                margin: 10,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    $('#product-slider2').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        dots: false,
        navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                margin: 10,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

})