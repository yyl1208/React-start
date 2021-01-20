// cjs   common js

const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  // app.use(
  //   proxy("/api1", {          // 遇见前缀api 触发代理
  //     target: "http://",
  //     changeOrigin: true,    // 控制服务器请求中 host中值
  //     pathRewrite: { "^api1": "" },  // 重写请求路径
  //   })
  // );
};
