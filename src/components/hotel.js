import { Button, Modal, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Hotel(props){
    const {
     name,
     image_urls = [],
     link,
     description,
     content
    } = props
    // const name = "Batra Hotels and Residences"
    // const image_urls= ["https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"]
    // const link = "www.randomweb.com"
    // const description = "Adventure is never far away"

    return (
        <div className="hoteldetails">
            <Modal size="lg" show={true} onHide={() => props.hideModal()}>
                <Modal.Body className="">
                    <div className="heading" id="aboutus">
                        <h1 className="headingbg">Hotel</h1>
                        <h2>{name}</h2>
                        <hr/>
                    </div>
                    <div>
                        <Carousel fade className="carousel-hotel">
                        {image_urls.map((url, idx)=> (
                            <Carousel.Item>
                                <img
                                    src={url}
                                    alt="First slide"
                                    className="hotelimage"
                                />
                            </Carousel.Item>
                        ))}
                        </Carousel>
                    </div>
                    <div>
                        <div className="">
                            {content}
                        </div>
                        <div className="">
                            <a href={link}>
                                <Button className="btn-primary"><FontAwesomeIcon icon={faArrowUpRightFromSquare} />&nbsp;&nbsp;Visit</Button>
                            </a>
                                &nbsp;&nbsp;For more details
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Hotel;