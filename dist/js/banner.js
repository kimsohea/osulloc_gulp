let evtBtn=document.querySelector(".event_link"),bnrSwiper=new Swiper(".banner",{slidesPerView:1,loop:!0,parallax:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:e=>{e.slides[e.activeIndex].children[0].children[2].classList.add("active"),setTimeout(()=>evtBtn.classList.add("active"),10)},slideChangeTransitionEnd:e=>{evtBtn.classList.add("active"),e.slides.forEach(e=>{e.children[0].children[2].classList.remove("active")}),e.slides[e.activeIndex].children[0].children[2].classList.add("active")},beforeTransitionStart:()=>{evtBtn.classList.remove("active")},transitionEnd:()=>{evtBtn.classList.add("active")}}}),banner=document.querySelector(".banner"),winWidth=window.innerWidth,bannerFunc=e=>{e?(banner.classList.add("pc"),banner.classList.remove("mo")):(banner.classList.add("mo"),banner.classList.remove("pc"))};function bannerSize(){var e=750<winWidth;bannerFunc(e),window.addEventListener("resize",()=>{var e=750<window.innerWidth;bannerFunc(e)})}export{bnrSwiper,bannerSize};