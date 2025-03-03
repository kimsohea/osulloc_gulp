// gulpfile.js
const gulp = require("gulp");

// 함수들 import
const serve = require("./gulp-tasks/serve");

// 기본 작업 (서버 실행)
gulp.task("serve", serve);

// 기본 작업 (SCSS 처리, HTML 복사 후 로컬 서버 실행)
gulp.task("default", gulp.series("serve"));
