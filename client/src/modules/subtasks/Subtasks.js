import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';

export default function Subtask({ todo, data }) {
  return (
    <div className="container">
      {data && data.length ? (
        data.map((d, i) => {
          return (
            <div key={i}>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={d.title}
                  defaultChecked={d && d.status === 'completed' ? true : false}
                  onChange={() => console.log()} //setChecked(!checked)
                />
              </Form.Group>
            </div>
          );
        })
      ) : (
        <>
          <Alert variant="danger" className="text-center">
            No Subtasks Found...
          </Alert>
        </>
      )}
    </div>
  );
}
