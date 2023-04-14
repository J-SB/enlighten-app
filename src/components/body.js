import React, { useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../assets/images/banner-1.png"
import banner2 from "../assets/images/banner-2.png"
import banner3 from "../assets/images/banner-3.png"
import about from "../assets/images/about.png"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

    return (
        <div className="mt-3">
        <div className="mainBody">
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
            <div className="heading mt-5 mb-5" id="aboutus">
                <h1>Who are we?</h1>
            </div>
        </div>
        <Container className="mt-4">
    <motion.div
        className="maininfo_aboutme box" 
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
    >
        <div className="d-flex align-items-center mb-5">
            <div>
                <Image src={about} rounded className=""></Image>
            </div>
            <div>
                <div className="heading">
                    <h1>About Us</h1>
                </div>
                <div className="about-info">
                    A warm welcome to Enlighten Experiences!
                    Serene Experiences is a sales & marketing and public relations company, based in New Delhi India,
                    specializing in customized representation for hotel companies, resorts and wellness/destination spa
                    resorts. With more than 20 years of rich experience in hospitality, We are committed
                    to offering a high level of personalized service in increasing awareness of our hotels within our carefully
                    maintained Indian client databases and with tour operators, travel agents, MICE agents, corporate &
                    business travel, and high net worth individuals (HNI’s) and through the media including print, electronic
                    & online.
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center">
            <div>
                <div className="heading">
                    <h1>Why Us?</h1>
                </div>
                <div className="about-info">
                    We provide complete 360 degrees Sales & Marketing & Public Relations solutions for the New Delhi NCR
                    region (including Gurgaon & Noida) for Leisure, Corporate & MICE segments. We actively cover the
                    other metro cities of Mumbai, Bangalore, Chennai, Hyderabad, Ahmadabad, Jaipur, Lucknow, Indore &
                    Kolkata, depending on the individual hotel’s requirements.
                    Take advantage of our huge experience in domestic sales & marketing and extensive network of
                    contacts. Build up your presence in the International key source markets of UK, USA, France, Germany,
                    Russia, Switzerland, Austria, Middle East, Far East etc. Our services for international sales & marketing
                    comprise of big DMC based in India. 
                </div>
            </div>
            <div>
                <Image src={about} rounded className="w-70"></Image>
            </div>
        </div>
        </motion.div>
      </Container>
    </div> 
    );
}

export default Body