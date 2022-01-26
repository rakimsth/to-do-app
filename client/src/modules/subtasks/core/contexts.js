import React, { createContext, useReducer } from 'react';
import Reduce from './reducers';
import * as Service from './services';
import ACTION from './actions';

const initialState = {
  data: [],
};

export const Context = createContext(initialState);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  function update(id, payload) {
    return new Promise((resolve, reject) => {
      Service.update(id, payload)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  function add(payload) {
    return new Promise((resolve, reject) => {
      Service.add(payload)
        .then(res => {
          dispatch({ type: ACTION.ADD_SUCCESS, res });
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  function remove(id) {
    return new Promise((resolve, reject) => {
      Service.remove(id)
        .then(res => {
          dispatch({ type: ACTION.DELETE_SUCCESS, res });
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  return (
    <Context.Provider
      value={{
        data: state.data,
        add,
        update,
        remove,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
