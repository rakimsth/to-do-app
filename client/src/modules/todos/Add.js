import React, { useContext, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import ToastNotification from '../global/Toast';
import { Context } from './core/contexts';

export default function AddTodo() {
  const [task, setTask] = useState('');
  const [toast, setToast] = useState({ show: false, title: '', message: '' });
  const { add, list } = useContext(Context);

  const handleClick = () => {
    const payload = { title: task };
    add(payload)
      .then(d => {
        if (d) {
          setToast({ show: true, title: 'Todo', message: 'Task Added Successfully' });
          setTask('');
          list();
        }
      })
      .catch(e => {
        setToast({ show: true, title: 'Todo', message: e.message });
      });
    setToast({ show: false, title: '', message: '' });
  };
  return (
    <>
      <InputGroup className="mb-3 w-100">
        <InputGroup.Text>Add new Todo?</InputGroup.Text>
        <FormControl
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Eg. Do Laundry"
        />
        <Button variant="success" onClick={handleClick}>
          Add the task
        </Button>
      </InputGroup>

      {toast && toast.show && <ToastNotification title={toast.title} message={toast.message} />}
    </>
  );
}
