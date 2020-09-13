import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './css/Header_Footer.css';
import {Form,FormControl,Button} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="Home">
       
        <Header />
        <div id="content">
          WELCOME TO THE OUTREACH PROGRAM
          <Form inline>
            <br/><br/>
            <Button type="submit" className="Explore">CLICK HERE TO EXPLORE</Button>
          </Form>
        </div>
        <Footer />
      
      </div>
    );
  }
}

export default Home;
