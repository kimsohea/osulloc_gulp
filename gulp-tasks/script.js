const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

// 자바스크립트 파일을 병합
const script = () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(uglify())
    .pipe(concat("main.js")) // main.js로 파일이름을 짓고 병합
    .pipe(gulp.dest("dist/js")); // dist 폴더에 병합한 파일 생성
};

module.exports = script; // 함수 내보내기
