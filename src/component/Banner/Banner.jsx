import React from "react";
import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import bannerImg from "./images/Landing Main Image.png";
function Banner() {
  return (
    <>
      <Container fluid="xxl margin-y">
        <Row>
          <Col md ={6} xs={12}>
            <img src={bannerImg} alt="" className="image-wapper" />
          </Col>
          <Col md ={6} xs={12}>
          <div className="box-1">
            <h1 className="head">Every day is unique, just like our tea</h1>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
              adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit
              amet consectetur. Orci nibh nullam risus adipiscing odio. Neque
              lacus nibh eros in.
            </p>
            <Button as="a" className="btn1">
            browes teas
            </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
