import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
document.body.className = `theme-white`;
reportWebVitals();
