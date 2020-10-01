import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "../Title/Title";
import image from "../../images/desk.png";
import "./AboutMe.css";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <body className="pb-5 mb-5">
        <Container id="about-me" fluid>
          <Title title={"About Me"} />
          <Row>
            <Col lg={1}></Col>
            <Col md={12} lg={3}>
              <Image src={image} fluid className="bio-image" />
            </Col>

            <Col
              md={12}
              lg={6}
              className="mt-3"
              style={{ color: "#747373", fontSize: "18px" }}
            >
              {
                "Hello! I'm the Product Development Manager at Edified, an online training LMS that focuses on helping teachers use their classroom technology. I oversee both course creation and improvements to the company's custom LMS and my meticulous attention to detail makes me an excellent editor, QA person, and project manager. Before moving into the educational technology field, I taught English and composition at the University of California, Riverside, where I got my Master's degree. I now combine my love of teaching with my tech expertise to help educators effectively use the new tools that are available to them.I'm committed to providing an excellent training environment for teachers and understand the challenges they face in mastering new technologies. In addition to working at Edified, I am training to be a full stack web developer. I am leveraging my new skills to take on additional roles at Edified, but I am also interested in pursuing free lance projects to help local businesses have a stronger presence on the internet."
              }
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default AboutMe;
