const evtBtn = document.querySelector(".event_link");

export const bnrSwiper = new Swiper(".banner", {
  slidesPerView: 1,
  loop: true,
  parallax: true,
  //autoplay: {
  //  delay: 5000,
  //},
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  on: {
    init: (s) => {
      s.slides[s.activeIndex].children[0].children[2].classList.add("active");
      setTimeout(() => evtBtn.classList.add("active"), 10);
    },
    slideChangeTransitionEnd: (s) => {
      evtBtn.classList.add("active");
      s.slides.forEach((slide) => {
        slide.children[0].children[2].classList.remove("active");
      });
      s.slides[s.activeIndex].children[0].children[2].classList.add("active");
    },
    beforeTransitionStart: () => {
      evtBtn.classList.remove("active");
    },
    transitionEnd: () => {
      evtBtn.classList.add("active");
    },
  },
});

const banner = document.querySelector(".banner");
const winWidth = window.innerWidth;
const bannerFunc = (flg) => {
  if (flg) {
    banner.classList.add("pc");
    banner.classList.remove("mo");
  } else {
    banner.classList.add("mo");
    banner.classList.remove("pc");
  }
};

export function bannerSize() {
  let winFlg = winWidth > 768 ? true : false;
  bannerFunc(winFlg);

  window.addEventListener("resize", () => {
    let winFlgIn = window.innerWidth > 768 ? true : false;
    bannerFunc(winFlgIn);
  });
}
