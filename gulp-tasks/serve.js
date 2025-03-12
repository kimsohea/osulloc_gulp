import browserSyncPkg from "browser-sync";
import watch from "./watch.js";

const browserSync = browserSyncPkg.create();

const serve = () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
    files: ["dist/**/*.html", "dist/**/*.js", "dist/**/*.css", "dist/img/*.{png,jpg,jpeg,gif}"],
    notify: false,
    open: true,
    port: 3000,
    ghostMode: false,
    codeSync: true,
    reloadOnRestart: true,
  });

  // watch.js에서 모든 파일 변경 감지를 처리
  watch();
};

export default serve;
