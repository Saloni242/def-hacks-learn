import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './css/Header_Footer.css';
import {Form,FormControl,Button} from 'react-bootstrap';
import Particles from 'react-particles-js';



class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Particles  canvasClassName="example"
        params={{
      "particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#62a337"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#62a337","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true
      }} />
      
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
