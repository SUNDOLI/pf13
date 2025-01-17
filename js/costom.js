
$(function () {
    var swiper = new Swiper(".main_visual_slide", {
        loop: true,
        speed: 1000,
        effect: "fade",

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".main_visual .arrows .prev",
            prevEl: ".main_visual .arrows .next",
        },
    });
})