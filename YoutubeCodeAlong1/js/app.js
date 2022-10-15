$(document).ready(function () {
    //page-slider script
    $('#page-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        smartSpeed: 1000,
        autoplay: true,
        dots: false,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    //project-slider script
    $('#project-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
            }
        }
    })
    //page-slider script
    $('#review-slider').owlCarousel({
        loop: true,
        margin: 24,
        items: 1,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        dots: true,
        responsive: {
            0: {

            },
            768: {

            },
            1140: {

            }
        }
    })
})