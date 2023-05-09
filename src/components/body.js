import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../assets/images/banner-1.png"
import banner2 from "../assets/images/banner-2.png"
import banner3 from "../assets/images/banner-3.png"
import why_us from "../assets/images/why_us.jpg"
import about from "../assets/images/about.png"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HotelList from "./hotelList";
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react"
import { get } from "lodash";

function Body() {

    const control = useAnimation();
    const [ref, inView] = useInView();
    
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0.5, scale: 0.6 },
    }

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
        else {
            control.start("hidden");
        }
    }, [control, inView]);

    const [data, setData] = useState([]);
    const getReviews =  async () => {
            try{
                const resp = await fetch("https://script.google.com/macros/s/AKfycbzD5xcgc_lUMYVyM5jBo6kkYFh-fpfSgj2YIsjW27-jWWFgCSLx7NzrHSbkXNOXwntj/exec")
                const d = await resp.json()
                console.log("data:", d.content)
                // resp: {"content":[["Image","Description", "title1"],["Img 2","Desc 2", "title2"]]}
                setData(get(d,"content", []))
            }
            catch(e)
            {
                console.log(e)
            }
    }
        
    useEffect(()=> {
            getReviews();
    }, []);

    return (
        <div className="mt-3">
        <div className="mainBody">
            <Carousel fade>
            <Carousel.Item className="carouselItemMain">
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
            <div className="heading mt-5 mb-5" id="aboutus">
                <h1 className="headingbg" style={{marginLeft: '40%', fontSize: "5vw"}}>Welcome</h1>
                <h2 style={{fontSize: "3vw"}}>Who are we?</h2>
            </div>
        </div>
        <Container className="">
        <motion.div
            className="maininfo_aboutme box" 
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            style={{"backgroundColor": "#bfe0da"}}
        >   
            <div className="maininfo_aboutme" style={{"margin": 10}}>
            <Row>
                <Col xs={12} md={6} lg={6} className="mt-1">
                    <div>
                        <Image src={about} rounded className="" style={{width: "80%"}}></Image>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} className="mt-1">
                    <div>
                        <div className="heading">
                            <h2 style={{fontSize: "2vw"}}>About Us</h2>
                        </div>
                        <div className="m-4"></div>
                        <div style={{fontSize: "1vw", textAlign: "left"}} className="about-info">
                            A warm welcome to Enlighten Experiences!
                            Serene Experiences is a sales & marketing and public relations company, based in New Delhi India,
                            specializing in customized representation for hotel companies, resorts and wellness/destination spa
                            resorts. <br/><br/>With more than 20 years of rich experience in hospitality, We are committed
                            to offering a high level of personalized service in increasing awareness of our hotels within our carefully
                            maintained Indian client databases and with tour operators, travel agents, MICE agents, corporate &
                            business travel, and high net worth individuals (HNI’s) and through the media including print, electronic
                            & online.
                        </div>
                    </div>
                </Col>
            </Row>
            </div>

            <div className="maininfo_aboutme" style={{"margin": 10}}>
            <Row>
                <Col xs={12} md={6} lg={6} className="mt-1">
                        <div>
                            <div className="heading">
                                <h2 style={{fontSize: "2vw"}}>Why Us?</h2>
                            </div>
                            <div className="m-4"></div>
                            <div style={{fontSize: "1vw", textAlign: "left"}} className="about-info">
                            We provide complete 360 degrees Sales & Marketing & Public Relations solutions for the New Delhi NCR
                        region (including Gurgaon & Noida) for Leisure, Corporate & MICE segments. We actively cover the
                        other metro cities of Mumbai, Bangalore, Chennai, Hyderabad, Ahmadabad, Jaipur, Lucknow, Indore &
                        Kolkata, depending on the individual hotel’s requirements.<br/><br/>
                        Take advantage of our huge experience in domestic sales & marketing and extensive network of
                        contacts. Build up your presence in the International key source markets of UK, USA, France, Germany,
                        Russia, Switzerland, Austria, Middle East, Far East etc. Our services for international sales & marketing
                        comprise of big DMC based in India. 
                            </div>
                        </div>
                    </Col>
                <Col xs={12} md={6} lg={6} className="mt-1" >
                    <div>
                        <Image src={why_us} rounded className="" style={{width: "80%"}}></Image>
                    </div>
                </Col>
            </Row>
            </div>
            </motion.div>
        </Container>
        <HotelList/>
        <div className="container-testimonial">
            <div style={{"paddingTop":15}}>
                <h3 className="center-align">What Our Client Says</h3>
            </div>
            <Carousel className="testimonial-carousel" interval={1000}>
            {data.map((review, idx) => {
                return (idx>=1 ? <Carousel.Item className="testimonial-carousel-item">
                <p className="m-4">"{review[0]}"</p>
                <h4 className="m-4">{review[1]}</h4>
                <p className="m-4">{review[2]}</p>
            </Carousel.Item> : "")
            })}
            {/* // <Carousel.Item className="testimonial-carousel-item">
            //     <p className="m-4">"This product is amazing! I've never seen anything like it."</p>
            //     <h4 className="m-4">John Doe</h4>
            //     <p className="m-4">XYZ Company</p>
            // </Carousel.Item>
            // <Carousel.Item className="testimonial-carousel-item">
            //     <p className="m-4">"This product is amazing! I've never seen anything like it."</p>
            //     <h4 className="m-4">John Doe</h4>
            //     <p className="m-4">XYZ Company</p>
            // </Carousel.Item> */}
            {/* Add more Carousel.Item components for additional testimonials/reviews */}
            </Carousel>
        </div>


    </div> 
    );
}

export default Body