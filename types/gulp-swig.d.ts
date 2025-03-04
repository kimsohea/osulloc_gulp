declare module "gulp-swig" {
  import { Transform } from "stream";

  interface SwigOptions {
    defaults?: {
      cache?: boolean;
      [key: string]: any;
    };
    [key: string]: any;
  }

  function swig(options?: SwigOptions): Transform;
  export = swig;
}