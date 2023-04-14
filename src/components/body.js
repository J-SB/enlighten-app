import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../assets/images/banner-1.png"
import banner2 from "../assets/images/banner-2.png"
import banner3 from "../assets/images/banner-3.png"
import about from "../assets/images/about.png"

function Body(){

    return (
        <>
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Welcome to Enlighten Hotels and Resorts</h3>
            <p>Lighten to Enlighten</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Welcome to Enlighten Hotels and Resorts</h3>
            <p>Lighten to Enlighten</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Welcome to Enlighten Hotels and Resorts</h3>
            <p>Lighten to Enlighten</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <Container className="mt-5">
    <section>
      <Row className="m-5">
        {/* <Col sm={5} ><img src={about} alt=""/></Col> */}
        
        <Col sm={5} ><Image src={about} rounded className="w-70"></Image></Col>
        <Col sm={1} ></Col>
        <Col sm={5} >
        <div className="heading">
            <h1>About Us</h1>
        </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
    </section>
    <section style={{paddingTop: 50}}>
      <Row className="m-5">
        <Col sm={5} >
            <div className="heading">
                <h1>Why Us ?</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col sm={1} ></Col>
        <Col sm={5} ><Col sm={5} ><Image src={about} rounded></Image></Col></Col>
        <Col sm={1} ></Col>
      </Row>
    </section>
      </Container>
        {/* <div className="row w-50" style={{marginT: "auto"}}>
            <div className="col-md-5">
                <img src={about} alt=""/>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
                <div className="heading">
                <h1>WELCOME</h1>
                <h2>Westin Hotel</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="primary-btn">ABOUT US</button>
            </div>
        </div> */}
        </>
        
    );
}

export default Body