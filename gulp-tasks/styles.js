// gulp-tasks/styles.js
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const styles = () => {
  return gulp
    .src("src/scss/**/*.scss") // SCSS 파일 경로
    .pipe(sass().on("error", sass.logError)) // SCSS 컴파일
    .pipe(gulp.dest("dist/css")); // CSS 파일을 dist/css로 저장
};

module.exports = styles; // 함수 내보내기
