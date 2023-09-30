var swiper = new Swiper(".appealSwiper", {
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".videoSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});