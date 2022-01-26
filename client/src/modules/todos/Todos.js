import React, { useEffect, useContext } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Accordion, Alert } from 'react-bootstrap';
import { Context } from './core/contexts';
import Subtask from '../subtasks';

export default function Todos() {
  const { addToast } = useToasts();
  const { data, list } = useContext(Context);

  const fetchList = () => {
    list()
      .then()
      .catch(() => {
        addToast('Internal server error!', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };
  useEffect(fetchList, []);

  return (
    <div className="container">
      <h2 className="text-center">TODO Items</h2>
      <Accordion defaultActiveKey="0">
        {data && data.length ? (
          data.map((d, i) => {
            return (
              <Accordion.Item eventKey={i} key={i}>
                <Accordion.Header>{d.title}</Accordion.Header>
                <Accordion.Body>
                  <Subtask todo={d._id} data={d && d.subtasks ? d.subtasks : []} />
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <Alert variant="primary">No Todo Found...</Alert>
        )}
      </Accordion>
    </div>
  );
}
