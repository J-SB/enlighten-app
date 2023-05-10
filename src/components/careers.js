import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from "react"
import { get } from "lodash";
import ApplyNow from './apply_now';

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const getCareers =  async () => {
        try{
            const resp = await fetch("https://script.google.com/macros/s/AKfycbz9UFm0n0UME25a5EUk3ENyb0TRAkQtuitM1C8aSQzf_OUh65KWhKUG4sipTjmW3DM9/exec")
            const d = await resp.json()
            console.log("data:", d.content)
            setData(get(d,"content", []))
        }
        catch(e)
        {
            console.log(e)
        }
  }
    
  useEffect(()=> {
        getCareers();
  }, []);

  return (
    <Container className="careers-page">
      <h1>Current Job Openings</h1>
        {data.map((jobProfile, index) => {
        return (index>=1  ? (<Row style={{"padding": 10}}>
          <Col key={index} xs={12} md={12} lg={12}>
            <div className="maininfo_aboutme box mt-10">
              <h2>{jobProfile[0]}</h2>
              <p>{jobProfile[1]}</p>
              <Button  style={{alignSelf: "right"}} onClick={() => setShowModal(true)}>Apply Now</Button>
              <ApplyNow showModal={showModal} onHide={() => setShowModal(false)}/>
            </div>
          </Col>
        </Row>) : "")
        })}
    </Container>
  );
};

export default Careers;