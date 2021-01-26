import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import SvgIcon from "@/components/SvgIcon";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export class Header extends Component {
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

        <div className="header-menu">
          <span onClick={this.changeRoute}>Home</span>
          <span onClick={this.changeRoute}>Demo</span>
        </div>
      </header>
    );
  }
  clickTest = () => {
    this.setState({ title: "欢迎" });
  };

  changeRoute = (event) => {
    let path = "";
    switch (event.target.innerText) {
      case "Home":
        path = "/home";
        break;
      case "Demo":
        path = "/demo";
        break;
      case "CssDemo":
        path = "/cssDemo";
        break;
    }
    this.props.history.push(path);
  };
}

// HeaderConnenct = connect((store) => ({ count: store }))(Header);
export default withRouter(Header);
