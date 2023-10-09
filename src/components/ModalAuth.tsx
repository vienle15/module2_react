import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface Props {
  show: boolean;
  onClose: Function;
}

function ModalAuth(props: Props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={props.show} onHide={() => props.onClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.onClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.onClose(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAuth;
