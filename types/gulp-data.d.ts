declare module "gulp-data" {
  import { Transform } from "stream";

  type DataFunction = (file: any) => any;

  function data(getData: DataFunction): Transform;

  export = data;
}