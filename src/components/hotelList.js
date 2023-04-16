import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-grid-carousel'
import { Button } from "react-bootstrap";
import Hotel from "./hotel";

const slides = [
  {
    title: "Batra Hotels and Residences",
    image_urls: ["https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"],
    subtitle: "Srinar Jammu & Kashmir",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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
      <div>
        <Carousel cols={3} rows={1} loop autoplay={true}>
        {slides.map((slide, idx) => {
          return <Carousel.Item className="carouselItem">
            <div className="mainCard">
              <div class="card">
                <div class="wrapper">
                  <img src={slide.image} class="cover-image" style={{width: '10rem', height: '10rem'}}/>
                </div>
                <img src={slide.image} class="title" style={{width: '10rem'}}/>
                <img src={slide.image} class="character" style={{width: '12rem'}}/>
              </div>
              <div className="cardBody">
                <div>
                  {slide.title}
                </div>
                <div>
                  <FontAwesomeIcon icon={faLocationDot} style={{color: "#326dd2",}} />  {slide.subtitle}
                </div>
                <div>
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
