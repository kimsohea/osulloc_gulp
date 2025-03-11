// gulp-tasks/serve.js
import gulp from "gulp";
import styles from "./styles.js";
import processImages from "./images.js";

import browserSyncPkg from "browser-sync";
import watch from "./watch.js";

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
    open: false,
    ghostMode: false,
    codeSync: true,
    reloadOnRestart: true,
  });

  // watch 태스크 실행
  watch();

  gulp.watch("src/scss/**/*.scss", gulp.series(styles)).on("change", browserSync.reload); // SCSS 파일 변경 시 리로드
  gulp.watch("src/img/**/*.{png,jpg,jpeg,gif}", gulp.series(processImages)).on("change", browserSync.reload);
};

export default serve;
