import Card from "react-bootstrap"

function offers(){

    const offer_list = [{"image": "img1", "desc": "desc1", "title": "title"}, {"image": "img2", "desc": "desc2"}]
    return (
        <div className="m-5">
            {offer_list.map((offer, idx)=>(
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={offer.image} />
                    <Card.Body>
                    <Card.Title>{offer.title}</Card.Title>
                    <Card.Text>
                        {offer.desc}
                    </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}