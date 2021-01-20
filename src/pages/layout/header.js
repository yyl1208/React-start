import PropTypes from "prop-types";
import React, { Component } from "react";
import SvgIcon from "@/components/SvgIcon";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    operate: PropTypes.func,
  };
  static defaultProps = {
    title: "首页",
  };

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  getSnapshotBeforeUpdate(props, state) {
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("prevProps");
  }

  state = { title: "亮亮" };
  render() {
    let { title } = this.props;
    return (
      <header className="App-header">
        {/* <img src={logo} onClick={clickTest} className="App-logo" alt="logo" />
         */}
        <div onClick={this.clickTest}>
          {/* {title} */}
          <SvgIcon iconClass="logo" className=""></SvgIcon>
        </div>

        <div class="header-menu">
          <span> Home</span>
          <span> Demo</span>
        </div>
      </header>
    );
  }
  clickTest = () => {
    this.setState({ title: "欢迎" });
  };
}
