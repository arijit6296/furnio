import React from "react";
import "./WholeSalers.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import bannerImg from "./images/Landing Main Image.png";
function WholeSalers() {
  return (
    <>
      <Container fluid="xxl margin-y">
        <Row>
          <Col md ={6} xs={12}>
          <div className="box-2">
            <h1 className="head1">FOR WHOLESALERS</h1>
            <p className="para2">
            We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment. 
            </p>
            <Button as="a" className="btn2">
            get A free consultation
            </Button>
            </div>
          </Col>
          <Col md ={6} xs={12}>
            <img src={bannerImg} alt="" className="image-wapper1" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WholeSalers;
