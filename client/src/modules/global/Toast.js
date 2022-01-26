import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

export default function ToastNotification({ title, message }) {
  const [show, setShow] = useState(title ? true : false);
  return (
    <>
      <ToastContainer position="bottom-end" className="p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
