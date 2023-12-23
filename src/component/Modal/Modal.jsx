import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import "./Modal.css";
import { Container ,Row } from 'react-bootstrap';
function ModalDialog({handel , show}) {
  return (
    <>
    <Container fluid='xxl'>
      <Modal show={show} onHide={handel}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handel}>
            Close
          </Button>
          <Button variant="primary" onClick={handel}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  )
}

export default ModalDialog
