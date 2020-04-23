// React
import React from "react";
// React Bootstrap
import { Modal } from "react-bootstrap";
// Styled Components
import {
  StyledModal
} from "./style";

export default function CustomModal(props) {
  return (
    <>
      <StyledModal
        show={props.show}
        onHide={() => props.close()}
        size={props.size}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      {
        props.title &&
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
      }
        <Modal.Body>
          {props.body}
        </Modal.Body>
      </StyledModal>
    </>
  )
}
