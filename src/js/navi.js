// 네비 클릭 이벤트
const navMenu = document.querySelectorAll(".nav_depth1 .list_depth1");

export function navFunction() {
  navMenu.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.classList.add("active");
      debugger;
    });
    item.addEventListener("mouseleave", function () {
      this.classList.remove("active");
    });
  });
}

// 검색 버튼 클릭 이벤트
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

export function searchFunction() {
  searchBtn.addEventListener("click", () => searchFunc(true));
  searchClose.addEventListener("click", () => searchFunc(false));
}
