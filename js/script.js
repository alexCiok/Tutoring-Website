var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    preloadImages: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,            
        },
        660: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        980: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
  });