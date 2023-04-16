import Card from "react-bootstrap/Card"

function Offers(){

    const offer_list = [
        {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"}, 
        {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"},
        {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"},
        {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"}, 
        {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"},
    ]
    return (
        <div className="d-flex flex-column align-items-center offers">
            <div className="heading mt-5">
                <h1 className="headingbg">Explore</h1>
                <h2>Offers</h2>
            </div>
            <div className="m-5 row">
                {offer_list.map((offer, idx)=>(
                    <div className={`col-md-4 ${idx > 2 && "mt-4"}`}>
                        <Card>
                            <Card.Img variant="top" src={offer.image}/>
                            <Card.Body>
                            <Card.Title>{offer.title}</Card.Title>
                            <Card.Text>
                                {offer.desc}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Offers;