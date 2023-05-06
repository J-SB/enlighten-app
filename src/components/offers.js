// import Card from "react-bootstrap/Card"
// import { useEffect, useState } from "react"
// import { get } from "lodash";

// function Offers(){
//     const [data, setData] = useState([]);
//     const getOffers =  async () => {
//         try{
//             const resp = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=A3JkLTJDdqJXTnmk0uE7gUVHoxjnygwALhWPVrCeyEapXDpRu1jUgsEYedMe2Vls47Yl70eQGp0t0xklvcL3nm0MqJO3EFV5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAftP-UsuCytL3J6pLPZj5D5AHyIb15ZiZyS9W1SqzTploVS_6tl6K9JQ-ghAtr24xJ8nArSpQv52afwozivjgJsn9h5eN77iQ&lib=MFEG1AZDQH9_slaphGyTZnTtFl1vSaZRj")
//             const d = await resp.json()
//             console.log("data:", d.content)
//             // resp: {"content":[["Image","Description", "title1"],["Img 2","Desc 2", "title2"]]}
//             setData(get(d,"content", []))
//         }
//         catch(e)
//         {
//             console.log(e)
//         }
//     }
    
//     useEffect(()=> {
//         getOffers();
//     }, []);

//     // const data = [
//     //     {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"}, 
//     //     {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"},
//     //     {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"},
//     //     {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"}, 
//     //     {"image": "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "desc": "desc1", "title": "title"},
//     // ]
//     return (
//         <div className="d-flex flex-column align-items-center offers">
//             <div className="heading mt-5">
//                 <h1 className="headingbg">Explore</h1>
//                 <h2>Offers</h2>
//             </div>
//             <div className="m-5 row">
//                 {data.map((offer, idx)=>{
//                     return (idx>0 ? <div className={`col-md-4 ${idx > 2 && "mt-4"}`}>
//                         <Card>
//                             <Card.Img  src={offer[0]}/>
//                             <Card.Body>
//                             <Card.Title>{offer[2]}</Card.Title>
//                             <Card.Text>
//                                 {offer[1]}
//                             </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </div> : "")
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Offers;

import React, { useState } from 'react';
import {Container, Card, Button } from 'react-bootstrap';

const hotelPackages = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Package 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Package 2',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Package 3',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    title: 'Package 4',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const Offers = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = (id) => {
    setShowFullText(showFullText === id ? false : id);
  };

  const getText = (description = "") => {
    return description.length > 100 ? description.slice(0,100) + "..." : description;
  }

  return (
    <div className="row offers">
      {hotelPackages.map((hotelPackage) => (
        <div key={hotelPackage.id} className="col-md-2 offersCard">
          <div>
            <img src={hotelPackage.image}/>
          </div>
          <div>{hotelPackage.title}</div>
          <div>{showFullText === hotelPackage.id ? hotelPackage.description : getText(hotelPackage.description)}</div>
          <div>
            <button className='btn btn-primary' onClick={() => toggleFullText(hotelPackage.id)}>Show More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;