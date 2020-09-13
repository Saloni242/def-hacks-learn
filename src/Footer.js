import React from 'react';
import { Grid, Navbar,NavItem,Nav} from 'react-bootstrap';
import logo from './logo.png';


function Footer(/*props*/) {
  return (
    
      <Navbar style={{marginBottom: "0"}} className="Footer">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
        <Nav pullRight>
            <NavItem
              eventKey={1}
              href="#" className = "Contact">
              Contact Us
            </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
   
  );
}

export default Footer;