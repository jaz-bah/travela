var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 10,
    stretch: 50,
    depth: 100,
    modifier: 2,
    slideShadows : true,
    },
    pagination: {
    el: '.swiper-pagination',
    },
});