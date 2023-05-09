import Card from "react-bootstrap/Card"
import React, { useEffect, useState } from "react"
import { get } from "lodash";

const Offers = () => {

  const [data, setData] = useState([]);
  const getOffers =  async () => {
        try{
            const resp = await fetch("https://script.google.com/macros/s/AKfycbxeM1qyoB9wU34Lv4h_twxEWyWA8g47j__Q4M8BzcJwxCwYUouwehm0goYB0SFTQ59_ZQ/exec")
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
        getOffers();
  }, []);

  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = (id) => {
    setShowFullText(showFullText === id ? false : id);
  };

  const getText = (description = "") => {
    return description.length > 100 ? description.slice(0,100) + "..." : description;
  }

  return (
    <div className="row offers">
      {data.map((hotelPackage, idx) => {
        return (idx>=1 ? (<div key={hotelPackage[0]} className="col-md-2 offersCard">
          <div>
            <img src={hotelPackage[1]}/>
          </div>
          <div>{hotelPackage[2]}</div>
          <div>{showFullText === hotelPackage[0] ? hotelPackage[3] : getText(hotelPackage[3])}</div>
          <div>
            <button className='btn btn-primary' onClick={() => toggleFullText(hotelPackage[0])}>Show More</button>
          </div>
        </div>) : "")
    })}
    </div>
  );
};

export default Offers;