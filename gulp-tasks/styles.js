// gulp-tasks/styles.js
import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";
import cleanCSS from "gulp-clean-css"; // CSS 압축
import concat from "gulp-concat"; // 파일 합치기

const sassCompiler = gulpSass(sass);

const styles = () => {
  return gulp
    .src("src/scss/style.scss") // SCSS 파일 한개로 수정
    .pipe(sassCompiler().on("error", sassCompiler.logError)) // SCSS 컴파일
    .pipe(concat("styles.min.css")) // CSS 파일 하나로 합치기
    .pipe(cleanCSS()) // CSS 압축
    .pipe(gulp.dest("dist/css")); // CSS 파일을 dist/css로 저장
};

export default styles; // 함수 내보내기
