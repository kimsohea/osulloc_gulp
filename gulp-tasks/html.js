const fs = require("fs");
const gulp = require("gulp");
const path = require("path");
const data = require("gulp-data");
const swig = require("gulp-swig");
const fileinclude = require("gulp-file-include");

const menuJsonPath = path.join(__dirname, "../src/data/header_menu.json"); // JSON 파일 경로

function merge_html() {
  const jsonData = JSON.parse(fs.readFileSync(menuJsonPath, "utf8"));

  return gulp
    .src("src/**/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        context: { header_menu: jsonData },
      })
    )
    .pipe(data(() => ({ header_menu: jsonData }))) // ✅ JSON을 menu 변수로 전달
    .pipe(swig({ defaults: { cache: false } }))
    .pipe(gulp.dest("dist/"));
}

module.exports = merge_html;
