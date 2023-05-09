import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-grid-carousel'
import { Button } from "react-bootstrap";
import Hotel from "./hotel";

const slides = [
  {
    title: "Batra Hotels and Residences",
    image_urls: ["https://www.batrahotelsandresidences.com/assets/images/portfolio/img17.jpg",
                 "https://www.batrahotelsandresidences.com/assets/images/portfolio/img19.jpg",
                 "https://www.batrahotelsandresidences.com/assets/images/portfolio/img20.jpg",
                 "https://www.batrahotelsandresidences.com/assets/images/portfolio/img27.jpg"],
    subtitle: "Srinar Jammu & Kashmir",
    description: "Adventure is never far away",
    content: "",
    image:
      "https://www.batrahotelsandresidences.com/assets/images/portfolio/img17.jpg"
  },
  {
    title: "Lakshmi Cottage",
    image_urls: ["https://pix6.agoda.net/hotelImages/37286515/0/f8c20a8491dea1bf8a225b568f0fe62d.jpg?s=600x450"],
    subtitle: "Manali, Himachal Pradesh",
    description: "Let your dreams come true",
    content: "",
    image:
    "https://pix6.agoda.net/hotelImages/37286515/0/f8c20a8491dea1bf8a225b568f0fe62d.jpg?s=600x450"
  },
  {
    title: "Tarra Cottage",
    image_urls: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/308812921.jpg?k=30d5ffe753c5b0b2b750a44ff277255c209dcf57bf9a52c0362e74b5e00ada93&o=&hp=1"],
    subtitle: "Manali, Himachal Pradesh",
    description: "A piece of heaven",
    content: "",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/308812921.jpg?k=30d5ffe753c5b0b2b750a44ff277255c209dcf57bf9a52c0362e74b5e00ada93&o=&hp=1"
  },
  {
    title: "Park Prime",
    image_urls: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/338738298.jpg?k=a34b32299df91b963c6923d72cbfdb81f8426145475f6ea50b06f9b2b04e63a1&o=&hp=1"],
    subtitle: "Jaipur, Rajasthan",
    description: "A piece of heaven",
    content: "",
    image:
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/338738298.jpg?k=a34b32299df91b963c6923d72cbfdb81f8426145475f6ea50b06f9b2b04e63a1&o=&hp=1"
  },
  {
    title: "Park Prime",
    image_urls: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/b2/1e/4a/chrome-hotel.jpg?w=300&h=-1&s=1"],
    subtitle: "Kolkata, West Bangal",
    description: "A piece of heaven",
    content: "",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/b2/1e/4a/chrome-hotel.jpg?w=300&h=-1&s=1"
  },
  {
    title: "Park Prime",
    image_urls: ["https://ak-d.tripcdn.com/images/0224d120008jlzzi25B3A_Z_960_660_R5_D.jpg_.webp"],
    subtitle: "Ranchi, Jharkhand",
    description: "A piece of heaven",
    content: "",
    image:
    "https://ak-d.tripcdn.com/images/0224d120008jlzzi25B3A_Z_960_660_R5_D.jpg_.webp"
  },
  {
    title: "Park Prime",
    image_urls: ["https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/44/17/4417576_v6.jpeg"],
    subtitle: "Goa",
    description: "A piece of heaven",
    content: "",
    image:
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/44/17/4417576_v6.jpeg"
  },
  {
    title: "Park Prime",
    image_urls: ["	https://pix8.agoda.net/hotelImages/864/864113/864113_15071711370032499632.jpg?ca=4&ce=1&s=1024x768"],
    subtitle: "New Digha",
    description: "A piece of heaven",
    content: "",
    image:
      "	https://pix8.agoda.net/hotelImages/864/864113/864113_15071711370032499632.jpg?ca=4&ce=1&s=1024x768"
  }
];



function HotelList() {
   const [showModal, setShowModal] = useState(false)
  return (
    <div className="slides" id="ourhotels">
      <div className="heading mt-5 mb-5" id="aboutus">
          <h1 className="headingbg">Explore</h1>
          <h2>Our Hotels</h2>
      </div>
      <div className="hotelCarousal">
        <Carousel cols={3} rows={1} loop autoplay={true} style={{align: "center"}}
          responsive={{
            xs: { cols: 1, rows: 1 },
            sm: { cols: 2, rows: 1 },
            md: { cols: 3, rows: 1 },
            lg: { cols: 3, rows: 1 },
          }}
        >
        {slides.map((slide, idx) => {
          return <Carousel.Item className="carouselItem align-center">
            <div className="mainCard">
              <div class="card">
                <div class="wrapper">
                  <img src={slide.image} class="cover-image" style={{width: '18vw', height: '20vh'}}/>
                </div>
                <img src={slide.image} class="title" style={{width: '10vw', height: "15vh"}}/>
                <img src={slide.image} class="character" style={{width: '15vw', height: "12vh"}}/>
              </div>
              <div className="cardBody">
                <div style={{fontSize: "1.25vw"}}>
                  {slide.title}
                </div>
                <div>
                  <FontAwesomeIcon icon={faLocationDot} style={{color: "#326dd2", fontSize: "1vw"}} />  {slide.subtitle}
                </div>
                <div style={{fontSize: "1vw"}}>
                  {slide.description}
                </div>
                <div>
                  <Button className="btn-primary" onClick={(e) => {
                        setShowModal(idx)
                    }}>Learn More</Button>
                </div>
                {showModal === idx ? (
                    <div className="m-2">
                    <Hotel
                      name={slide.title}
                      image_urls={slide.image_urls}
                      link={slide.link}
                      description={slide.description}
                      content={slide.content}
                      hideModal={() => setShowModal(false)}
                    />
                    </div>
                  ) : ""}
              </div>
            </div>
          </Carousel.Item>
        })}
        </Carousel>
      </div>
    </div>
  );
}

export default HotelList;
