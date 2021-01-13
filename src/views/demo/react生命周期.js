import React from "react";

// 挂载 mount
// 卸载 unmount
// 生命周期回调函数 <=> 生命周期钩子函数 <=> 生命周期函数
export default class Life extends React.Component {
  state = { opacity: 1 };

  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById());
  };

  // 组件挂载完毕
  componentDidMount() {
    this.timer = setInterval(() => {
      let { opacity } = this.state;
      opacity -= 0.1;
      if (opacity <= 0) opcity = 1;
      this.setState({ opacity: opacity });
    }, 200);
  }

  // 组件将要卸载
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  // render 调用时机，初始化渲染，状态更新后
  render() {
    return (
      <div>
        <h1>123</h1>
        <button></button>
      </div>
    );
  }
}
