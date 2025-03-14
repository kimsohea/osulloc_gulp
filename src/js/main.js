import { navFunction, searchFunction } from "./navi.js";
import { bnrSwiper, bannerSize } from "./banner.js";

document.addEventListener("DOMContentLoaded", () => {
  // 네비 클릭 이벤트
  navFunction();

  // 검색 버튼 클릭 이벤트
  searchFunction();

  // 배너 슬라이더
  bnrSwiper;

  // 배너 크기 조정
  bannerSize();

  const prodSwiper = new Swiper(".product_inner", {
    slidesPerView: 4,
    spaceBetween: 12,
    loop: true,
    //autoplay: {
    //  delay: 5000,
    //},
  });

  const recommSwiper = new Swiper(".recommended_list", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    speed: 420,
    preloadImages: true,
    lazy: { loadPrevNext: true },
    pagination: {
      el: ".recommended_pagination",
      type: "progressbar",
    },

    grid: {
      fill: "column",
      rows: 2,
    },
    //autoplay: {
    //  delay: 5000,
    //},
  });
});
