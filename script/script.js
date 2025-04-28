

document.addEventListener("DOMContentLoaded", function(e){
    cardSectionSlide();
})

const cardSectionSlide = () => {

    //01. 슬라이드 
    var swiper = new Swiper(".cardSection .swiper", {
        loop : true,
        effect:'fade',
        navigation: {
          nextEl: ".cardSection .slideBtnWrap .nextBtn",
          prevEl: ".cardSection .slideBtnWrap .prevBtn",
        },
    });   

    // 02. 가로로 무한으로 흐르는 슬라이드 
     // GSAP 애니메이션
     gsap.to(".cardSection .scrolling-text", {
        x: "-100%", // 텍스트가 왼쪽으로 이동
        duration: 15, // 애니메이션 지속 시간
        repeat: -1,  // 무한 반복
        ease: "linear", // 일정한 속도로 흐르게
        delay: 0.5 // 애니메이션 시작 전 지연시간
    });

    //03. 모바일 토글 클래스
    $('.cardSection .slideWrap .item').click(function(){
        $(this).find('.card').toggleClass('show');
    })
}
