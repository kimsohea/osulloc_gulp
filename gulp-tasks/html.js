// gulp-tasks/copy.js
const gulp = require("gulp");
const fileinclude = require("gulp-file-include");

const merge_html = () => {
  return gulp
    .src("src/*.html", "src/**/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("dist/"));
};

module.exports = merge_html; // html 합쳐서 내보내기
