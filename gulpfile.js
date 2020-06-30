const { parallel, watch, dest } = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");

const js = (done) => {
  browserify("./src/index.js") //
    .bundle() //
    .pipe(source("main.js")) //
    .pipe(dest("./build/assets/js/"));
  done();
};

const check = (done) => {
  watch("src/**/*.js", js);
  done();
};

exports.js = js;
exports.check = check;

exports.default = parallel(js, check);
