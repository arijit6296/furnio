import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
function Footer() {
  return (
    <>
    <div className='margin-y bg-color-light'>
      <Container fluid="xl">
        <Row>
          <Col md ={3} xs={6} className='my-3'>
            <div className='footer-text'>
              <h4>Collections</h4>
          <ul>
            <li>Black teas</li>
            <li>Green teas</li>
            <li>White teas</li>
            <li>Herbal teas</li>
            <li>Matcha</li>
            <li>Chai</li>
            <li>Oolong</li>
            <li>Rooibos</li>
            <li>Teaware</li>
          </ul>
          </div>
          </Col>
          <Col md ={3} xs={6} className='my-3'>
          <div className='footer-text'>
              <h4>Learn</h4>
          <ul>
            <li>About us</li>
            <li>About our teas</li>
            <li>Tea academy</li>
          </ul>
          </div>
          </Col>
          <Col md ={3} xs={6} className='my-3'>
          <div className='footer-text'>
              <h4>Customer Service</h4>
          <ul>
            <li>Ordering and payment</li>
            <li>Delivery</li>
            <li>Privacy and policy </li>
            <li>Terms & Conditions</li>
          </ul>
          </div>
          </Col>
          <Col md ={3} xs={6} className='my-3'>
          <div className='footer-text'>
              <h4>Contact us</h4>
          <ul>
            <li className='d-flex'>
              <div className='me-3 svg4'>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <mask
        id="mask0_190_531"
        style={{ maskType: "alpha" }}
        width="18"
        height="18"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H18V18H0z"></path>
      </mask>
      <g mask="url(#mask0_190_531)">
        <path
          d="M9 9c.412 0 .766-.147 1.06-.44.293-.294.44-.648.44-1.06 0-.412-.147-.766-.44-1.06A1.444 1.444 0 009 6c-.412 0-.766.147-1.06.44-.293.294-.44.647-.44 1.06 0 .412.147.766.44 1.06.294.293.647.44 1.06.44zm0 5.512c1.525-1.4 2.656-2.671 3.394-3.815.737-1.144 1.106-2.16 1.106-3.047 0-1.363-.434-2.478-1.303-3.347C11.328 3.434 10.263 3 9 3c-1.263 0-2.328.434-3.197 1.303C4.934 5.172 4.5 6.287 4.5 7.65c0 .887.369 1.903 1.106 3.047.738 1.144 1.869 2.416 3.394 3.816zM9 16.5c-2.013-1.713-3.516-3.303-4.51-4.772C3.498 10.26 3 8.9 3 7.65c0-1.875.603-3.369 1.81-4.481C6.015 2.056 7.412 1.5 9 1.5c1.588 0 2.984.556 4.19 1.669C14.398 4.28 15 5.775 15 7.65c0 1.25-.497 2.61-1.49 4.078-.994 1.469-2.498 3.06-4.51 4.772z"
        ></path>
      </g>
    </svg>
              </div>
              3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence
Iran
            </li>
            <li className='d-flex'>
              <div className='me-3 svg4'>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <mask
        id="mask0_190_535"
        style={{ maskType: "alpha" }}
        width="18"
        height="18"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H18V18H0z"></path>
      </mask>
      <g mask="url(#mask0_190_535)">
        <path
          d="M3 15c-.413 0-.766-.147-1.06-.44a1.445 1.445 0 01-.44-1.06v-9c0-.412.147-.766.44-1.06C2.235 3.148 2.588 3 3 3h12c.412 0 .766.147 1.06.44.293.294.44.648.44 1.06v9c0 .412-.147.766-.44 1.06-.294.293-.647.44-1.06.44H3zm6-5.25L3 6v7.5h12V6L9 9.75zm0-1.5l6-3.75H3l6 3.75zM3 6V4.5v9V6z"
        ></path>
      </g>
    </svg>
              </div>
              Email: amoopur@gmail.com
            </li>
            <li className='d-flex'>
              <div className='me-3 svg4'>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <mask
        id="mask0_190_539"
        style={{ maskType: "alpha" }}
        width="18"
        height="18"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H18V18H0z"></path>
      </mask>
      <g mask="url(#mask0_190_539)">
        <path
          d="M14.963 15.75c-1.613 0-3.185-.36-4.716-1.078a14.302 14.302 0 01-6.919-6.919C2.61 6.222 2.25 4.65 2.25 3.038c0-.225.075-.413.225-.563a.763.763 0 01.563-.225h3.037a.72.72 0 01.469.169.66.66 0 01.244.431l.487 2.625c.025.175.022.334-.01.478a.767.767 0 01-.215.385L5.231 8.175c.525.9 1.185 1.744 1.978 2.531a13.98 13.98 0 002.616 2.044l1.763-1.762a1.05 1.05 0 01.44-.254c.181-.056.36-.072.534-.046l2.588.524a.762.762 0 01.431.254.684.684 0 01.169.459v3.037a.763.763 0 01-.225.563.763.763 0 01-.563.225zm-10.444-9l1.237-1.237-.319-1.763H3.77c.062.513.15 1.019.262 1.519.113.5.275.994.488 1.481zm6.712 6.713a9.309 9.309 0 003.019.75v-1.65l-1.762-.357-1.257 1.257z"
        ></path>
      </g>
    </svg>
              </div>
              Tel: +98 9173038406 
            </li>
          </ul>
          </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default Footer
