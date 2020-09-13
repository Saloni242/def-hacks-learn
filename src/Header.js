import React from 'react';

import { Navbar } from 'react-bootstrap';
import logo from './logo.png';

class Header extends React.Component {
  render() {
    return (
        <Navbar className="Header">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />  &nbsp;&nbsp; DEF HACKS
        </Navbar.Brand>
      </Navbar>
    );
  }
}


export default Header;