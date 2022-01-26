import React, { useEffect, useContext, useState } from 'react';
import { Accordion, Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { Context } from './core/contexts';
import Subtask from '../subtasks';
import ToastNotification from '../global/Toast';
import AddTodo from './Add';

export default function Todos() {
  const [toast, setToast] = useState({ show: false, title: '', message: '' });
  const { data, list, updateTodo } = useContext(Context);

  const fetchList = () => {
    list();
  };

  const updateTask = async ({ id, status, task }) => {
    const payload = { status: status ? 'completed' : 'pending' };
    const updateResponse = await updateTodo(id, payload);
    if (updateResponse) {
      setToast({
        show: true,
        title: task,
        message: `Task status updated to ${payload.status} status successfully`,
      });
    }
    setToast({
      show: false,
      title: '',
      message: '',
    });
    await list();
  };
  //eslint-disable-next-line
  useEffect(fetchList, []);

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">TODO App</h2>
          <AddTodo />
          <Accordion defaultActiveKey="0">
            {data && data.length ? (
              data.map((d, i) => {
                d.completedTask = d.subtasks.filter(function (item) {
                  if (item.status === 'completed') {
                    return true;
                  } else {
                    return false;
                  }
                });
                return (
                  <Accordion.Item eventKey={i} key={i}>
                    <Accordion.Header>
                      <Col xs={7}>
                        <Form.Group>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={d && d.status === 'completed' ? true : false}
                            onChange={e =>
                              updateTask({ id: d._id, status: e.target.checked, task: d.title })
                            }
                          />
                          &nbsp;
                          <>{d.title}</>
                        </Form.Group>
                      </Col>
                      <Col xs={3}>
                        <div>
                          {d && d.subtasks.length > 0 && (
                            <div>
                              {d.completedTask.length} of {d.subtasks.length} completed
                            </div>
                          )}
                        </div>
                      </Col>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Subtask todo={d._id} data={d && d.subtasks.length > 0 ? d.subtasks : []} />
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })
            ) : (
              <Alert variant="primary">No Todo Found...</Alert>
            )}
          </Accordion>
        </Col>
      </Row>
      {toast && toast.show && <ToastNotification title={toast.title} message={toast.message} />}
    </Container>
  );
}
