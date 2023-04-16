import { Button, Modal, Carousel } from "react-bootstrap";

function Hotel(props){
    const {
     name,
     image_urls,
     link,
     description
    } = props
    // const name = "Batra Hotels and Residences"
    // const image_urls= ["https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"]
    // const link = "www.randomweb.com"
    // const description = "Adventure is never far away"

    return (
        <div>
            <Modal size="xl">
                <Modal.Header>
                    <h4>{name}</h4>
                </Modal.Header>
                <Modal.Body>
                <Carousel fade>
                {image_urls.map((url, idx)=> {
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={url}
                        alt="First slide"
                        />
                    </Carousel.Item>
                })}
                </Carousel>
                <div className="row mt-10">
                    {description}
                </div>
                <div className="row mt-10">
                    Visit : {link} For more details
                </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Hotel;