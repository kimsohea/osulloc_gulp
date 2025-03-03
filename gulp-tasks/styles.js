// gulp-tasks/styles.js
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css"); // CSS 압축
const concat = require("gulp-concat"); // 파일 합치기

const styles = () => {
  return gulp
    .src("src/scss/**/*.scss") // SCSS 파일 경로
    .pipe(sass().on("error", sass.logError)) // SCSS 컴파일
    .pipe(concat("styles.min.css")) // CSS 파일 하나로 합치기
    .pipe(cleanCSS()) // CSS 압축
    .pipe(gulp.dest("dist/css")); // CSS 파일을 dist/css로 저장
};

module.exports = styles; // 함수 내보내기
