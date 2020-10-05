import React from "react";
import Icon from "../components/Icon/Icon";
import Title from "../components/Title/Title";
import ContactMeIcon from "../components/Icons-Contact/Icons-Contact-Me";
import { Container, Row, Col } from "react-bootstrap";
import SkillIcon from "./icons-skills";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#dea6af" }}
      className="font-small pt-4"
      id="bottom"
    >
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="text-center">
            <Title title={"Contact Me"} />
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="text-center">
            {/* // animation- icons increase size when hovered over */}
            <Icon
              href="https://github.com/KendraNeves"
              alt="GitHub icon"
              iconPic="fab fa-github"
            />
            <Icon
              href="https://www.linkedin.com/in/kendraneves/"
              alt="Linked In icon"
              iconPic="fab fa-linkedin"
            />
            <Icon
              href="https://twitter.com/kendraneves"
              alt="Twitter icon"
              iconPic="fab fa-twitter"
            />
          </Col>
          <Col md={3}></Col>
        </Row>
        {/* ========================================================================== */}
        <Container fluid>
          <Row noGutters style={{ marginBottom: "15px" }}>
            <Col md={4} className="text-center">
              <SkillIcon
                name="melindawinter42@gmail.com"
                href="mailto:melindawinter42@gmail.com"
                alt="Email icon"
                iconPic="fas fa-envelope"
                color="000"
                iconSize="35px"
                marginTop="15px"
                fontSize="20px"
              />
            </Col>
            <Col md={4} className="text-center">
              <SkillIcon
                name="Resume"
                href="https://docs.google.com/document/d/1oJC-LI-GbrOvPxijc6FDW7pv4y-JiDHFJNNBRoLGXcc/edit?usp=sharing"
                alt="resume icon"
                iconPic="far fa-file"
                color="000"
                iconSize="35px"
                marginTop="15px"
                fontSize="20px"
              />
            </Col>
            <Col md={4} className="text-center">
              <SkillIcon
                name="(951) 941-5294"
                href="tel:9519415294"
                alt="phone icon"
                iconPic="fas fa-mobile-alt"
                color="#fff"
                iconSize="35px"
                marginTop="15px"
                fontSize="20px"
              />
            </Col>
          </Row>
        </Container>
        {/* =================================================================== */}
      </Container>
    </MDBFooter>
  );
};

export default Footer;
