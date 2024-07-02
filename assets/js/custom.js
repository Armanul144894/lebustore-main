var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 24,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".slider__next",
        prevEl: ".slider__prev",
      },
      freeMode: true,
      breakpoints: {
        0: {
          direction: "vertical",
        },
        768: {
          direction: "vertical",
        },
      },
    });
  
    const sliderImages = new Swiper(".slider__images .swiper-container", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 32,
      mousewheel: true,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".slider__next",
        prevEl: ".slider__prev",
      },
      grabCursor: true,
      thumbs: {
        swiper: sliderThumbs,
      },
      breakpoints: {
        0: {
          direction: "vertical",
        },
        768: {
          direction: "vertical",
        },
      },
    });