

document.addEventListener("DOMContentLoaded", function(e){
    cardSectionSlide();
    paralSlideSection();
})


const paralSlideSection = () => {
    // 슬라이드
    var swiper = new Swiper(".paralSlideSection .slideWrap .swiper", {
        loop : true,
        centeredSlides: true,
        spaceBetween: 130,
        navigation: {
          nextEl: ".paralSlideSection .slideBox .pnBtnWrap .nextBtn",
          prevEl: ".paralSlideSection .slideBox .pnBtnWrap .prevBtn",
        },
        breakpoints: {
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            650: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            950: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 130,
            },
        },
    });

    // 패럴렉스
    const slideWrap = document.querySelector('.paralSlideSection')

    if (slideWrap) {

        gsap.to(".paralSlideSection .hiddenWrap", {
            width: "20vw",
            height: "20vw",
            maxWidth: "unset",
            maxHeight: "unset",
        });

        // 스크롤에 따라 scrollBox를 고정 + 확대/축소 같은 애니메이션 하고 싶을 때
        gsap.to(slideWrap, {
            scrollTrigger: {
                trigger: slideWrap,
                start: "top 0%",  
                end: "bottom top",  
                pin: true,        
                markers: false,
            },
        });

        gsap.to(slideWrap,  
            {
            scrollTrigger: {
                trigger: slideWrap,
                start: "top 0%",   
                end: "bottom top", 
                markers: false,
                onEnter: () => {
                    gsap.to(".paralSlideSection .hiddenWrap", {
                        duration: 1,  // 애니메이션 지속 시간
                        width: "100%", // 애니메이션으로 width 변경
                        height: "auto",   // 애니메이션으로 height 변경
                        overflow: "hidden",
                        ease: "power2.out", // 이징 효과 (선택 사항)
                        onUpdate: () => {
                            // 애니메이션 완료 후 overflow 제거
                            swiper.update();
                        }
                    });

                },
                onLeaveBack: () => {
                    gsap.to(".paralSlideSection .hiddenWrap", {
                        // duration: 1,
                        width: "20vw",  // 원래 크기
                        height: "20vw", // 원래 크기
                        // ease: "power2.in" // 이징 효과 (선택 사항)
                    });
                }
            },
        });
    
    } else {
        return false;
    }
    

}

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
