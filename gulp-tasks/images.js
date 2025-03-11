const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

const image = () => {
  return gulp
    .src("src/img/**/*.{png,jpg,jpeg,gif}")
    .pipe(imagemin([imagemin.mozjpeg({ quality: 75 }), imagemin.optipng({ optimizationLevel: 5 })]))
    .pipe(gulp.dest("dist/img"));
};

module.exports = image;
