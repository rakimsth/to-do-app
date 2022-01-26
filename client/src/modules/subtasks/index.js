import React from 'react';
import { ContextProvider } from './core/contexts';
import Subtasks from './Subtasks';

const SubTaskList = ({ todo, data }) => {
  return (
    <ContextProvider>
      <Subtasks todo={todo} data={data} />
    </ContextProvider>
  );
};

export default SubTaskList;
