import React, { createContext, useReducer } from 'react';
import Reduce from './reducers';
import * as Service from './services';
import ACTION from './actions';

const initialState = {
  data: [],
  loading: false,
};

export const Context = createContext(initialState);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  function setLoading() {
    dispatch({ type: ACTION.SET_LOADING });
  }

  function resetLoading() {
    dispatch({ type: ACTION.RESET_LOADING });
  }

  function list() {
    return new Promise((resolve, reject) => {
      Service.list()
        .then(res => {
          dispatch({ type: ACTION.LIST_SUCCESS, res });
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

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
        loading: state.loading,
        list,
        setLoading,
        resetLoading,
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
