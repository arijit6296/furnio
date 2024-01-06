import React from "react";
import "./Banner_2nd.css";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "./images/Rectangle 2.png";
function Banner2() {
  return (
    <>
      <Container fluid="xxl margin-y">
        <Row>
          <img src={bannerImg} alt="" className="img-fluid3 "/>
        </Row>
      </Container>
    </>
  );
}

export default Banner2;
