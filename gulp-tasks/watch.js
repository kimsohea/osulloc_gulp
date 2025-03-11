import gulp from "gulp";
import styles from "./styles.js";
import script from "./script.js";
import copy_swiper from "./swiper.js";
import merge_html from "./html.js";
import processImages from "./images.js";
import browserSyncPkg from "browser-sync";

const browserSync = browserSyncPkg.create();

// 이미지 변경 감지
const watchImages = () => {
  return gulp.watch("src/img/**/*.{png,jpg,jpeg,gif}", { ignoreInitial: false }, (done) => {
    processImages()
      .then(() => {
        browserSync.reload("*.{png,jpg,jpeg,gif}");
        done();
      })
      .catch((err) => {
        console.error("이미지 처리 중 오류:", err);
        done(err);
      });
  });
};

// 스타일 변경 감지
const watchStyles = () => {
  return gulp
    .watch("src/scss/**/*.scss", { ignoreInitial: false }, gulp.series(styles))
    .on("change", browserSync.reload);
};

// HTML & JSON 변경 감지
const watchHtml = () => {
  return gulp
    .watch(["src/**/*.html", "src/data/*.json"], { ignoreInitial: false }, gulp.series(merge_html))
    .on("change", browserSync.reload);
};

// 스크립트 변경 감지
const watchScripts = () => {
  return gulp
    .watch("src/js/**/*.js", { ignoreInitial: false }, gulp.series([script, copy_swiper]))
    .on("change", browserSync.reload);
};

// CSS 변경 감지
const watchCss = () => {
  return gulp.watch("dist/**/*.css").on("change", browserSync.reload);
};

// 모든 watch 태스크를 병렬로 실행
const watch = gulp.parallel(watchImages, watchStyles, watchHtml, watchScripts, watchCss);

export default watch;
