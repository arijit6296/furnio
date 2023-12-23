import React from "react";
import "./Collections.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./images/image1 (8).png";
import img2 from "./images/image1 (7).png";
import img3 from "./images/image1 (6).png";
import img4 from "./images/Image Holder.png";
import img5 from "./images/image1 (5).png";
import img6 from "./images/image1 (4).png";
import img7 from "./images/image1 (3).png";
import img8 from "./images/image1 (2).png";
import img9 from "./images/image1 (1).png";

function Collections() {
  return (
    <>
      <Container fluid="md margin-y">
        <h4 className="Collections-title">Our Collections</h4>
        <Row className="margin-y">
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img1} alt="" />
              <h5>black tea</h5>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img2} alt="" />
              <h5> Green tea</h5>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img3} alt="" />
              <h5>white tea</h5>
            </div>
          </Col>
        </Row>
        <Row className="margin-y">
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img4} alt="" />
              <h5>matcha</h5>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img5} alt="" />
              <h5>herbal tea</h5>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img6} alt="" />
              <h5>chai</h5>
            </div>
          </Col>
        </Row>
        <Row className="margin-y">
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img7} alt="" />
              <h5>oolong</h5>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img8} alt="" />
              <h5>rooibos</h5>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="boxes">
              <img src={img9} alt="" />
              <h5>teaware</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Collections;
