const gulp = require("gulp");

// Swiper 파일 복사
const copy_swiper = () => {
  return gulp
    .src(["node_modules/swiper/swiper-bundle.min.js", "node_modules/swiper/swiper-bundle.min.css"])
    .pipe(gulp.dest("dist/libs/swiper/")); // 원하는 폴더로 복사
};

module.exports = copy_swiper; // 함수 내보내기
