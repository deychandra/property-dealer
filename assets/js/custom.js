document.querySelector(".menu-icon").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("show-mobile-menu");
});


var swiperBanner = new Swiper(".hero-section .swiper", {
       loop: true,
       pagination: {
           el: ".swiper-pagination",
           clickable: true,
       },
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
       autoplay: {
           delay: 30000,
           disableOnInteraction: false,
       },
    
   });
   



   var swiperScroll = new Swiper(".scroolswiper", {
    slidesPerView: 3, 
    spaceBetween: 10,
    draggable: true, 
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
    },
    simulateTouch: true, 
    grabCursor: true,
});


var swiperImage = new Swiper(".imgSwiper", {
    loop: true,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: " .swiper-button-next",
        prevEl: " .swiper-button-prev",
    },
});


let NewsScroll = new Swiper(".news-room-scroll", {
    slidesPerView: 4, 
    spaceBetween: 10,
    draggable: true, 
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
    },
    simulateTouch: true, 
    grabCursor: true,
});


let ReviewScroll = new Swiper(".review-scroll", {
    slidesPerView: 3, 
    spaceBetween: 10,
    draggable: true, 
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
    },
    simulateTouch: true, 
    grabCursor: true,
});