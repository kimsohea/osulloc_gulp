import gulp from "gulp";
import uglify from "gulp-uglify";

// 자바스크립트 파일을 병합
const script = () => {
  return gulp.src("src/js/**/*.js").pipe(uglify()).pipe(gulp.dest("dist/js")); // dist 폴더에 병합한 파일 생성
};

export default script; // 함수 내보내기
