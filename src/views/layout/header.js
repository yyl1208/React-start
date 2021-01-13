import logo from "../../assets/icons/logo.svg";
import "../../assets/styles/App.css";
import PropTypes from "prop-types";
import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    operate: PropTypes.func,
  };
  static defaultProps = {
    title: "首页",
  };

  //罕见场景 若 state 的值在任何时候都取决于 props， 可以使用
  static getDerivedStateFromProps(props, state) {
    return null;
  }

  getSnapshotBeforeUpdate(){
    return null;
  }

  state = { title: "亮亮" };
  render() {
    let { title } = this.props;
    return (
      <header className="App-header">
        {/* <img src={logo} onClick={clickTest} className="App-logo" alt="logo" />
         */}
        <div onClick={this.clickTest}>{title}</div>
      </header>
    );
  }
  clickTest = () => {
    this.setState({ title: "欢迎" });
  };
}

// // props 限制  类型、必要性限制
// Header.propTypes = {
//   title: PropTypes.string.isRequired, // react  15.X前 React.PropTypes
//   operate: PropTypes.func,
// };

// // 默认属性 props
// Header.defaultProps = {
//   title: "首页",
// };
