import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const jobProfiles = [
  {
    title: 'Web Developer',
    description: 'We are looking for a web developer with expertise in HTML, CSS, and JavaScript. The ideal candidate should have experience in building responsive websites and web applications.',
    applyLink: 'https://www.example.com/apply/web-developer',
  },
  {
    title: 'Software Engineer',
    description: 'We are seeking a software engineer with experience in object-oriented programming, software design patterns, and data structures. The candidate should have experience in developing scalable and high-performance applications.',
    applyLink: 'https://www.example.com/apply/software-engineer',
  },
  {
    title: 'Marketing Manager',
    description: 'We are looking for a marketing manager who can lead our marketing initiatives and drive revenue growth. The candidate should have experience in developing and executing marketing campaigns across different channels.',
    applyLink: 'https://www.example.com/apply/marketing-manager',
  },
  {
    title: 'Marketing Manager',
    description: 'We are looking for a marketing manager who can lead our marketing initiatives and drive revenue growth. The candidate should have experience in developing and executing marketing campaigns across different channels.',
    applyLink: 'https://www.example.com/apply/marketing-manager',
  },
  {
    title: 'Marketing Manager',
    description: 'We are looking for a marketing manager who can lead our marketing initiatives and drive revenue growth. The candidate should have experience in developing and executing marketing campaigns across different channels.',
    applyLink: 'https://www.example.com/apply/marketing-manager',
  },
];

const Careers = () => {
  return (
    <Container className="careers-page">
      <h1>Current Job Openings</h1>
      <Row>
        {jobProfiles.map((jobProfile, index) => (
          <Col key={index} xs={12} md={12} lg={12}>
            <div className="job-profile">
              <h2>{jobProfile.title}</h2>
              <p>{jobProfile.description}</p>
              <Button href={jobProfile.applyLink} target="_blank" style={{alignSelf: "right"}}>Apply Now</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Careers;