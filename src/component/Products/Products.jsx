import React, { useEffect, useState } from "react";
import "./Products.css";
import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Banner2 from "../Banner_2nd/Banner_2nd";

function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://boonakitea.cyclic.app/api/teas")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  

  const [singleProduct, setSingleProduct] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  function handleCheckboxChange(id, label) {
    const isChecked = selectedCheckboxes.some(
      (checkboxObj) => checkboxObj.id === id
    );

    const updatedCheckboxes = isChecked
      ? selectedCheckboxes.filter((checkboxObj) => checkboxObj.id !== id)
      : [...selectedCheckboxes, { id, label, checked: true }];

    setSelectedCheckboxes(updatedCheckboxes);
    console.log(updatedCheckboxes);

    // Trigger a new API request with the updated checkboxes
    const queryParams = updatedCheckboxes
      .map((checkbox) => checkbox.id)
      .join(",");
    fetch(`https://boonakitea.cyclic.app//api/teas/${queryParams}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  const filteredProducts =
    selectedCheckboxes.length === 0
      ? items
      : items.filter((product) =>
          selectedCheckboxes.some((checkbox) => checkbox.id === product.id)
        );

  function handleViewDetails(innerProduct) {
    console.log(innerProduct);
    setSingleProduct(innerProduct);
  }

  if (singleProduct) {
    return <SingleProduct handel={singleProduct} />;
  }
  return (
    <>
      <Banner2 />
      <Container fluid="xxl">
        <Row>
          <Col md={2} xs={12}>
            <Form>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>COLLECTIONA</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check
                      id="Black Tea"
                      inline
                      label="Black Tea"
                      name="Black Tea"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("black")}
                    />
                    <Form.Check
                      id="Green teas"
                      inline
                      label="Green teas"
                      name="Green teas"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("green")}
                    />
                    <Form.Check
                      id="White teas"
                      inline
                      label="White teas"
                      name="White teas"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("white")}
                    />
                    <Form.Check
                      id="Blend"
                      inline
                      label="Blend"
                      name="Blend"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("blend")}
                    />
                    <Form.Check
                      id="Matcha"
                      inline
                      label="Matcha"
                      name="Matcha"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Matcha")}
                    />
                    <Form.Check
                      id="Herbal teas"
                      inline
                      label="Herbal teas"
                      name="Herbal teas"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Herbal teas")}
                    />
                    <Form.Check
                      id="Oolong"
                      inline
                      label="Oolong"
                      name="Oolong"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("oolong")}
                    />
                    <Form.Check
                      id="Rooibos"
                      inline
                      label="Rooibos"
                      name="Rooibos"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Rooibos")}
                    />
                    <Form.Check
                      id="Teaware"
                      inline
                      label="Teaware"
                      name="Teaware"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Teaware")}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>ORIGIN</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check
                      id="India"
                      inline
                      label="India"
                      name="India"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("India")}
                    />
                    <Form.Check
                      id="Japan"
                      inline
                      label="Japan"
                      name="Japan"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Japan")}
                    />
                    <Form.Check
                      id="Iran"
                      inline
                      label="Iran"
                      name="Iran"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Iran")}
                    />
                    <Form.Check
                      id="South Africa"
                      inline
                      label="South Africa"
                      name="South Africa"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("South Africa")}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>FLAVOUR</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check
                      id="Spicy"
                      inline
                      label="Spicy"
                      name="Spicy"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Spicy")}
                    />
                    <Form.Check
                      id="Sweet"
                      inline
                      label="Sweet"
                      name="Sweet"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Sweet")}
                    />
                    <Form.Check
                      id="Citrus"
                      inline
                      label="Citrus"
                      name="Citrus"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Citrus")}
                    />
                    <Form.Check
                      id="Smooth"
                      inline
                      label="Smooth"
                      name="Smooth"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Smooth")}
                    />
                    <Form.Check
                      id="Fruity"
                      inline
                      label="Fruity"
                      name="Fruity"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Fruity")}
                    />
                    <Form.Check
                      id="Floral"
                      inline
                      label="Floral"
                      name="Floral"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Floral")}
                    />
                    <Form.Check
                      id="Grassy"
                      inline
                      label="Grassy"
                      name="Grassy"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Grassy")}
                    />
                    <Form.Check
                      id="Minty"
                      inline
                      label="Minty"
                      name="Minty"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Minty")}
                    />
                    <Form.Check
                      id="Bitter"
                      inline
                      label="Bitter"
                      name="Bitter"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Bitter")}
                    />
                    <Form.Check
                      id="Creamy"
                      inline
                      label="Creamy"
                      name="Creamy"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Creamy")}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>QUALITIES</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check
                      id="Detox"
                      inline
                      label="Detox"
                      name="Detox"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Detox")}
                    />
                    <Form.Check
                      id="Energy"
                      inline
                      label="Energy"
                      name="Energy"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Energy")}
                    />
                    <Form.Check
                      id="Relax"
                      inline
                      label="Relax"
                      name="Relax"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Relax")}
                    />
                    <Form.Check
                      id="Digestion"
                      inline
                      label="Digestion"
                      name="Digestion"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Digestion")}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>CAFEINE</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check
                      id="No Caffeine"
                      inline
                      label="No Caffeine"
                      name="No Caffeine"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("No Caffeine")}
                    />
                    <Form.Check
                      id="Low Caffeine"
                      inline
                      label="Low Caffeine"
                      name="Low Caffeine"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Low Caffeine")}
                    />
                    <Form.Check
                      id="Medium Caffeine"
                      inline
                      label="Medium Caffeine"
                      name="Medium Caffeine"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Medium Caffeine")}
                    />
                    <Form.Check
                      id="High Caffeine"
                      inline
                      label="High Caffeine"
                      name="High Caffeine"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("High Caffeine")}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>ALLERGENS</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check
                      id="Lactose-free"
                      inline
                      label="Lactose-free"
                      name="Lactose-free"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Lactose-free")}
                    />
                    <Form.Check
                      id="Gluten-free"
                      inline
                      label="Gluten-free"
                      name="Gluten-free"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Gluten-free")}
                    />
                    <Form.Check
                      id="Nuts-free"
                      inline
                      label="Nuts-free"
                      name="Nuts-free"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Nuts-free")}
                    />
                    <Form.Check
                      id="Soy-free"
                      inline
                      label="Soy-free"
                      name="Soy-free"
                      type="checkbox"
                      value={""}
                      onChange={() => handleCheckboxChange("Soy-free")}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="d-flex my3">
                <label htmlFor="organic" className="me-3">
                  ORGANIC
                </label>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="organic"
                  onChange={() => handleCheckboxChange("organic", "Organic")}
                />
              </div>
            </Form>
          </Col>
          <Col md={10} xs={12}>
            <Row>
              {items.map((product) => (
                <Col md={12} xs={12} key={product.id}>
                  <Row>
                  {product.types &&
                    Object.entries(product.types).map(
                      ([typeKey, innerProduct]) => (
                        <Col md={4} xs={12}>
                          <div className="box-image1">
                            <div className="image-wrappe2">
                              <img
                                src={
                                  innerProduct.image
                                    ? innerProduct.image
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2010_FirstFlush_Yunnan_Baihao_Yinzhen.jpg/640px-2010_FirstFlush_Yunnan_Baihao_Yinzhen.jpg"
                                }
                                alt=""
                                className="product-img"
                              />
                            </div>
                            <p className="product-para">{innerProduct.name}</p>
                            <p className="product-para">
                              {innerProduct.decription}
                            </p>
                            <h6 className="product-price">{`${innerProduct.caffeine} / ${innerProduct.caffeineLevel}`}</h6>
                            <div className="boxes-hover">
                              <button
                                type="button"
                                className="btn5"
                                onClick={() => handleViewDetails(innerProduct)}
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </Col>
                      )
                    )}
                    </Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
