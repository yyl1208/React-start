import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// <React.StrictMode>   用于检查 App 下组件写法
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
/* 
1. React 解析组件标签，找到了组件
2. 
3. 将render返回的虚拟DOM转换成真实dom
*/
document.body.className = `theme-white`;

// 用于 记录页面性能
reportWebVitals();
