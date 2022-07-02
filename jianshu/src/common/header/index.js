import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left">Home</NavItem>
          <NavItem className="left">App</NavItem>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
        <Addition>
          <Button className="create">Create</Button>
          <Button className="signup">Signup</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header;
