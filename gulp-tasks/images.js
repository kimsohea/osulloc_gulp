import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const processImages = () => {
  return new Promise((resolve, reject) => {
    const srcDir = path.resolve(__dirname, "../src/img");
    const destDir = path.resolve(__dirname, "../dist/img");

    // dist/img 디렉토리가 없으면 생성
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    try {
      // src/img 디렉토리의 모든 파일 읽기
      const files = fs.readdirSync(srcDir);

      files.forEach((file) => {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, file);

        // 파일 상태 확인
        const stats = fs.statSync(srcPath);

        if (stats.isFile()) {
          // 파일을 직접 복사
          fs.copyFileSync(srcPath, destPath);
          console.log(`복사 완료: ${file}`);
        }
      });

      resolve();
    } catch (error) {
      console.error("이미지 복사 중 오류 발생:", error);
      reject(error);
    }
  });
};

export default processImages;
