// gulpfile.js
import gulp from "gulp";

// 함수들 import
import serve from "./gulp-tasks/serve.js";
import processImages from "./gulp-tasks/images.js";

// 이미지 최적화 작업
gulp.task("image", processImages);
// 기본 작업 (서버 실행)
gulp.task("serve", gulp.series(processImages, serve));

// 기본 작업 (SCSS 처리, HTML 복사 후 로컬 서버 실행)
gulp.task("default", gulp.series("serve"));
