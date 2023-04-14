import React from "react"
import logo from '../assets/images/logo.jpeg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Footer(){

    return (<>
    <Row className="footer_row m-5">
        {/* <Col sm={5} ><img src={about} alt=""/></Col> */}
        
        <Col sm={4} >
            <Image src={logo} rounded className="logo_image"></Image>
        </Col>
        <Col sm={4} >
            <div className="heading">
                <h1>About</h1>
            </div>
            <ul>
                <li>Who We Are</li>
                <li>Why Work With Us</li>
                <li>Partner With Us</li>
                <li>Contact us</li>
            </ul>
        </Col>
        <Col sm={4} >
            <h2>Social Links</h2>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-youtube" aria-hidden="true"></i>
        </Col>
      </Row>
    {/* <footer>
    <div className="container grid">
      <div className="box">
        <img src={logo} alt=""></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div className="icon">
          <i className="fa fa-facebook-f"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-youtube"></i>
        </div>
      </div>

      <div className="box">
        <h2>Links</h2>
        <ul>
          <li>Company History</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="box">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet constur adipisicing elit sed do eiusmtem por incid.
        </p>
        <i className="fa fa-location-dot"></i>
        <label>1201 park street, Avenue, Pune , . </label> <br></br>
        <i className="fa fa-phone"></i>
        <label>[88] 657 524 332</label> <br></br>
        <i className="fa fa-envelope"></i>
        <label>info@dentar.com</label> <br></br>
      </div>
    </div>
  </footer> */}
    </>);
}

export default Footer