const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    config.module
      .rule("js")
      .include.add("/src")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
    config.resolve.alias.set("examples", resolve("examples"));
  }
};
