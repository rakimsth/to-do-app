import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import TodoList from './modules/todos';

export default function App() {
  return (
    <>
      <ToastProvider>
        <TodoList />
      </ToastProvider>
    </>
  );
}
