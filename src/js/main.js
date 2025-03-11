document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelectorAll(".nav_depth1 .list_depth1");

  navMenu.forEach((item, idx) => {
    item.addEventListener("mouseenter", function () {
      this.classList.add("active");
    });
    item.addEventListener("mouseleave", function () {
      this.classList.remove("active");
    });
  });

  const searchBtn = document.querySelector(".btn_open_search");
  const searchClose = document.querySelector(".search_close");
  const searchArea = document.querySelector(".search_area");
  const headerDim = document.querySelector("header");
  let searchFlg = false;
  const searchFunc = (flg) => {
    if (flg) {
      searchFlg = flg;
      searchArea.classList.add("active");
      headerDim.classList.add("dimed");
    } else {
      searchFlg = flg;
      searchArea.classList.remove("active");
      headerDim.classList.remove("dimed");
    }
  };

  searchBtn.addEventListener("click", () => searchFunc(true));
  searchClose.addEventListener("click", () => searchFunc(false));

  const bnrSwiper = new Swiper(".banner", {
    slidesPerView: 1,
    loop: true,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  });
});
