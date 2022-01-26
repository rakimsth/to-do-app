import React, { useContext, useState } from 'react';
import { Context } from './core/contexts';
import { Context as TodoContext } from '../todos/core/contexts';
import ToastNotification from '../global/Toast';
import { Alert, Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Subtask({ todo, data }) {
  const [toast, setToast] = useState({ show: false, title: '', message: '' });
  const [task, setTask] = useState('');
  const { add, remove, update } = useContext(Context);
  const { list, updateTodo } = useContext(TodoContext);
  const updateTaskStatus = ({ id, status, task }) => {
    const payload = { status: status ? 'completed' : 'pending' };
    if (payload.status === 'pending') updateTodo(todo, payload);
    update(id, payload)
      .then(d => {
        if (d) {
          list();
          setToast({
            show: true,
            title: task,
            message: `Task status updated to ${payload.status} status successfully`,
          });
        }
      })
      .catch(e => {
        setToast({ show: true, title: task, message: e.message });
      });
    setToast({
      show: false,
      title: '',
      message: '',
    });
  };

  const handleClick = () => {
    const payload = { title: task, todo_id: todo };
    add(payload)
      .then(d => {
        if (d) {
          list();
          setToast({ show: true, title: 'Subtask', message: 'Subtask Added Successfully' });
          setTask('');
        }
      })
      .catch(e => {
        setToast({ show: true, title: 'Subtask', message: e.message });
      });
    setToast({ show: false, title: '', message: '' });
  };

  const deleteSubtask = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!',
    }).then(result => {
      if (result.value) {
        remove(id)
          .then(d => {
            if (d) {
              list();
              setToast({ show: true, title: 'Subtask', message: 'Subtask Deleted Successfully' });
              setTask('');
            }
          })
          .catch(e => {
            setToast({ show: true, title: 'Subtask', message: e.message });
          });
      }
    });

    setToast({ show: false, title: '', message: '' });
  };
  return (
    <div className="container">
      {data && data.length > 0 ? (
        data.map((d, i) => {
          return (
            <div key={i}>
              <Container>
                <Row>
                  <Col xs={9}>
                    <Form.Group className="mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={d && d.status === 'completed' ? true : false}
                        onChange={e =>
                          updateTaskStatus({ id: d._id, task: d.title, status: e.target.checked })
                        }
                      />
                      &nbsp;
                      <>{d.title}</>
                    </Form.Group>
                  </Col>
                  <Col xs={3}>
                    <i className="fa fa-trash" onClick={e => deleteSubtask(d._id)}></i>
                  </Col>
                </Row>
              </Container>
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
      <div className="container">
        <InputGroup className="mb-3">
          <InputGroup.Text>Add new subtask</InputGroup.Text>
          <FormControl value={task} onChange={e => setTask(e.target.value)} />
          <Button variant="success" onClick={handleClick}>
            Add the task
          </Button>
        </InputGroup>
      </div>
      {toast && toast.show && <ToastNotification title={toast.title} message={toast.message} />}
    </div>
  );
}
