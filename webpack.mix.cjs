let mix = require("laravel-mix");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

require("laravel-mix-obfuscator");

mix
  .options({
    hmrOptions: {
      host: "localhost",
      port: 8090,
    },
  })
  .setPublicPath("dist")
  // .js(["./src/app.js", "./src/app2.js"], "./dist/bundle/app_bundle.js")
  // .js(["./src/app3.js", "./src/app4.js"], "./dist/bundle/app2_bundle.js")
  .copy("./src/index.html", "./dist/index.html")
  .copy("./src/index2.html", "./dist/index2.html")
  .copy("./src/index3.html", "./dist/index3.html")
  .copy("./src/index4.html", "./dist/index4.html")
  .copy("./src/modal.html", "./dist/modal.html")
  .copy("./src/fileUploader.html", "./dist/fileUploader.html")
  .copy("./src/facemesh.html", "./dist/facemesh.html")
  .copy("./src/al.html", "./dist/al.html")
  .copy("./src/build/", "./dist/build/")
  .copy("./src/preview.html", "./dist/preview.html")
  .copy("./src/dist/", "./dist/dist/")
  .js("./src/facemesh.js", "./dist/facemesh.js")
  .js("./src/app.js", "./dist/app.js")
  .js("./src/app2.js", "./dist/app2.js")
  .js("./src/xapiwrapper.js", "./dist/xapiwrapper.js")
  .js("./src/preview.js", "./dist/preview.js");
// .js("src/app2.js", "dist/app2.js")
// .webpackConfig({
//   entry: {
//     app_bundle: ["./src/app.js", "./src/app2.js"],
//     app2_bundle: ["./src/app3.js", "./src/app4.js"],
//   },
//   devServer: {
//     host: "localhost",
//     port: 8080,
//   },
//   output: {
//     filename: "[name].[contenthash].js",
//     path: path.join(__dirname, "dist"),
//     publicPath: "."
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       filename: "index.html",
//       template: "./src/index.html",
//       inject: "body",
//       chunks: ["app_bundle"],
//     }),
//     new HtmlWebpackPlugin({
//       filename: "index2.html",
//       template: "./src/index2.html",
//       inject: "body",
//       chunks: ["app2_bundle"],
//     })
//   ],
// });

// ### 자동참조가 안되는이유
// inject를 통해 스크립트가 포함되는 위치를 설정할 수 있음
// head나 body의 맨아래 포함이되는데 head에 defer를 설정하든 body의 맨아래에 가든
// player소스가 실행이 되지않음
// mix 번들중 포함된 js파일을 모두 참조함.
// player는 시연용 배포용이 따로 있기때문에

// js 암호화
// mix.obfuscator({
//   options: {
//     compact: true,
//     controlFlowFlattening: false,
//     deadCodeInjection: false,
//     debugProtection: false,
//     debugProtectionInterval: 0,
//     disableConsoleOutput: true,
//     identifierNamesGenerator: "hexadecimal",
//     ignoreImports: true,
//     log: false,
//     numbersToExpressions: false,
//     renameGlobals: false,
//     selfDefending: true,
//     simplify: true,
//     splitStrings: false,
//     stringArray: true,
//     stringArrayCallsTransform: false,
//     stringArrayEncoding: [],
//     stringArrayIndexShift: true,
//     stringArrayRotate: true,
//     stringArrayShuffle: true,
//     stringArrayWrappersCount: 1,
//     stringArrayWrappersChainedCalls: true,
//     stringArrayWrappersParametersMaxCount: 2,
//     stringArrayWrappersType: "variable",
//     stringArrayThreshold: 0.75,
//     unicodeEscapeSequence: false,
//   },
// });
