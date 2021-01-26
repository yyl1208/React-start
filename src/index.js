import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import "antd/dist/antd.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, BrowserRouter } from "react-router-dom";
// <React.StrictMode>   用于检查 App 下组件写法
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
/* 
1. React 解析组件标签，找到了组件
2. 
3. 将render返回的虚拟DOM转换成真实dom
*/
document.body.className = `theme-black`;

// 用于 记录页面性能
reportWebVitals();
