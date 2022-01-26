import React from 'react';
import { ContextProvider } from './core/contexts';
import Todos from './Todos';

const TodoList = () => {
  return (
    <ContextProvider>
      <Todos />
    </ContextProvider>
  );
};

export default TodoList;
