import * as React from 'react';
import { Modal } from 'react-bootstrap';

export const OpenModal = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="btn btn-primary" onClick={handleShow}>
        Open a modal!
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <div className="btn btn-secondary" onClick={handleClose}>
            Close
          </div>
          <div className="btn btn-primary" onClick={handleClose}>
            Save this
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
