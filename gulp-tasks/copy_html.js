// gulp-tasks/copy.js
const gulp = require("gulp");

const copy_html = () => gulp.src("src/*.html").pipe(gulp.dest("dist/"));

module.exports = copy_html; // 함수 내보내기
