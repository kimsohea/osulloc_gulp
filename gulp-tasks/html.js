import fs from "fs";
import gulp from "gulp";
import path from "path";
import data from "gulp-data";
import swig from "gulp-swig";
import concat from "gulp-concat";
import fileinclude from "gulp-file-include";

const __dirname = path.resolve();

const menuJsonPath = path.join(__dirname, "./src/data/header_menu.json"); // JSON 파일 경로

const merge_html = () => {
  const jsonData = JSON.parse(fs.readFileSync(menuJsonPath, "utf8"));

  return gulp
    .src(["src/*.html", "!src/html/**"]) // 메인 HTML 파일만 처리하고 include용 파일은 제외
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        context: { header_menu: jsonData },
      })
    )
    .pipe(data(() => ({ header_menu: jsonData }))) // ✅ JSON을 menu 변수로 전달
    .pipe(swig({ defaults: { cache: false } }))
    .pipe(concat("index.html"))
    .pipe(gulp.dest("dist/"));
};

export default merge_html;
