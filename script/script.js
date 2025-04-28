

document.addEventListener("DOMContentLoaded", function(e){
    cardSectionSlide();
})

const cardSectionSlide = () => {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
