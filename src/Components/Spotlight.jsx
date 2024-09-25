import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import avion from "../assets/avion2-removebg.png";
import "../CSS/Spotlight.css";

function Spotlight() {
  return (
    <Container>
      <section id="spotlight">
        <Row className="content">
          <Col xs={12} md={6} className="top">
            <h1>
              Create <br />
              Ever-Lasting <br /> Memories With Us
            </h1>
            <Button className="btn btn1">Explore</Button>
            <Button className="btn btn2">About Us</Button>
          </Col>
          <Col xs={10} md={6} className="img1">
            <img src={avion} alt="Avion" />
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Spotlight;