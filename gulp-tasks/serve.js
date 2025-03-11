// gulp-tasks/serve.js
import gulp from "gulp";
import styles from "./styles.js";
import script from "./script.js";
import copy_swiper from "./swiper.js";
import merge_html from "./html.js";
import processImages from "./images.js";

import browserSyncPkg from "browser-sync";

const browserSync = browserSyncPkg.create();

const serve = () => {
  browserSync.init({
    server: {
      // 서버를 시작할 폴더
      baseDir: "dist",
    },
    // 해당 파일 변경 시 브라우저 리로드
    files: ["dist/css/*.css", "dist/img/*.{png,jpg,jpeg,gif}", "dist/js/*.js"],
    notify: false, // 브라우저 상단의 알림 비활성화
  });

  gulp.watch("src/scss/**/*.scss", gulp.series(styles)).on("change", browserSync.reload); // SCSS 파일 변경 시 리로드
  gulp.watch("src/img/**/*.{png,jpg,jpeg,gif}", gulp.series(processImages)).on("change", browserSync.reload);

  // ✅ HTML & JSON 변경 감지 → `merge_html` 실행 후 브라우저 리로드
  gulp.watch(["src/**/*.html", "src/data/*.json"], gulp.series(merge_html)).on("change", browserSync.reload);

  gulp.watch("src/js/**/*.js", gulp.series([script, copy_swiper])).on("change", browserSync.reload); // Script 파일 변경 시 리로드

  gulp.watch("dist/**/*.css").on("change", browserSync.reload); // CSS 파일 변경 시 리로드
};

export default serve;
