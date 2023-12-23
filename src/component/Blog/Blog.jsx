import React from "react";
import "./Blog.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import blogImg1 from './images/blog-img (1).png'
import blogImg2 from './images/blog-img (2).png'
function Blog() {
  return (
    <>
      <div className="bg-color-light margin-y">
        <Container fluid="md">
          <h2 className="blog-title">Last Blog Posts</h2>
          <Row>
            <Col md={6} xs={12}>
              <Row>
                <Col md={6}>
                  <div className="blog-image">
                  <img src={blogImg1} alt="" />
                  </div>
                </Col>
                <Col md={6}>
                  <h4 className="blog-head">How to steep tea like a pro</h4>
                  <p className="blog-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. </p>
                  <Button as="button" className="btn4">
                    Learn more
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={6} xs={12}>
              <Row>
                <Col md={6}>
                  <div className="blog-image">
                  <img src={blogImg2} alt="" />
                  </div>
                </Col>
                <Col md={6}>
                  <h4 className="blog-head">All about tea aromas</h4>
                  <p className="blog-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. </p>
                  <Button as="button" className="btn4">
                    Learn more
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Blog;
