import React from "react";
import "./SingleProduct.css";
import { Container, Row, Col } from "react-bootstrap";
function SingleProduct({ handel }) {
  return (
    <>
      <Container fluid={"xxl"} className="margin-y">
        <h5 className="singel-head">
          HOME/COLLECTIONS/CHAI/{handel.name} {handel.description}
        </h5>
        <Row className="my-3">
          <Col md={5} sm={12}>
            <div className="single-image">
              <img src={handel.img} alt={handel.name} />
            </div>
          </Col>
          <Col md={7} sm={12}>
            <h1 className="single-title">
              {handel.name} {handel.description}
              <p className="single-para">A lovely warming Chai tea with ginger cinnamon flavours.</p>
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleProduct;
