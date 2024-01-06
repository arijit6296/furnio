import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./images/Frame 3.png";
import "./Navbar.css";
import ModalDialog from "../Modal/Modal";

function NavItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="bg-white fixed-top">
        <Container fluid="xxl">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className='nav-link' to="/tea_collections">tea collections</NavLink>
              <NavLink className='nav-link' to="/accessories">accessories</NavLink>
              <NavLink className='nav-link' to="/blog">blog</NavLink>
              <NavLink className='nav-link' to="/contact us">contact us</NavLink>
            </Nav>
            <Nav className="icon">
              <NavLink className='nav-link' href="#home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <mask
                    id="mask0_166_99"
                    style={{ maskType: "alpha" }}
                    width="24"
                    height="24"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path d="M0 0H24V24H0z"></path>
                  </mask>
                  <g mask="url(#mask0_166_99)">
                    <path d="M19.6 21l-6.3-6.3A6.096 6.096 0 019.5 16c-1.817 0-3.354-.629-4.612-1.887C3.629 12.854 3 11.317 3 9.5c0-1.817.63-3.354 1.888-4.613C6.146 3.629 7.683 3 9.5 3c1.817 0 3.354.629 4.613 1.887C15.371 6.146 16 7.683 16 9.5a6.096 6.096 0 01-1.3 3.8l6.3 6.3-1.4 1.4zM9.5 14c1.25 0 2.313-.437 3.188-1.312S14 10.75 14 9.5c0-1.25-.437-2.313-1.312-3.188S10.75 5 9.5 5c-1.25 0-2.313.437-3.188 1.312S5 8.25 5 9.5c0 1.25.437 2.313 1.312 3.188S8.25 14 9.5 14z"></path>
                  </g>
                </svg>
              </NavLink>
              <NavLink className='nav-link' href="#link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <mask
                    id="mask0_166_102"
                    style={{ maskType: "alpha" }}
                    width="24"
                    height="24"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path d="M0 0H24V24H0z"></path>
                  </mask>
                  <g mask="url(#mask0_166_102)">
                    <path d="M12 12c-1.1 0-2.042-.392-2.825-1.175C8.392 10.042 8 9.1 8 8s.392-2.042 1.175-2.825C9.958 4.392 10.9 4 12 4s2.042.392 2.825 1.175C15.608 5.958 16 6.9 16 8s-.392 2.042-1.175 2.825C14.042 11.608 13.1 12 12 12zm-8 8v-2.8c0-.567.146-1.088.438-1.563A2.914 2.914 0 015.6 14.55a14.866 14.866 0 013.15-1.163A13.776 13.776 0 0112 13c1.1 0 2.183.129 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.475.438.996.438 1.563V20H4zm2-2h12v-.8a.943.943 0 00-.137-.5.977.977 0 00-.363-.35c-.9-.45-1.808-.788-2.725-1.013a11.615 11.615 0 00-5.55 0c-.917.225-1.825.563-2.725 1.013a.97.97 0 00-.5.85v.8zm6-8c.55 0 1.021-.196 1.413-.588C13.804 9.021 14 8.55 14 8c0-.55-.196-1.02-.587-1.412A1.927 1.927 0 0012 6c-.55 0-1.02.196-1.412.588A1.923 1.923 0 0010 8c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588z"></path>
                  </g>
                </svg>
              </NavLink>
              <NavLink className='nav-link' onClick={handleShow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <mask
                    id="mask0_166_105"
                    style={{ maskType: "alpha" }}
                    width="24"
                    height="24"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path d="M0 0H24V24H0z"></path>
                  </mask>
                  <g mask="url(#mask0_166_105)">
                    <path d="M5 22c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 20V8c0-.55.196-1.02.587-1.412A1.927 1.927 0 015 6h2c0-1.383.488-2.563 1.463-3.538C9.438 1.487 10.617 1 12 1s2.563.487 3.538 1.462C16.513 3.437 17 4.617 17 6h2c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 22H5zm0-2h14V8H5v12zm7-6c1.383 0 2.563-.488 3.538-1.463C16.513 11.562 17 10.383 17 9h-2c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0112 12a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 019 9H7c0 1.383.488 2.562 1.463 3.537C9.438 13.512 10.617 14 12 14zM9 6h6c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0012 3c-.833 0-1.542.292-2.125.875A2.893 2.893 0 009 6z"></path>
                  </g>
                </svg>
                <span className="count">1</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalDialog handel={handleClose} show={show}/>
    </>
  );
}

export default NavItem;
