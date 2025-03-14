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
});
