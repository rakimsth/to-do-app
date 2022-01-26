import axios from 'axios';

import API from '../../../constants';

const URL = `${API.SUBTASKS}`;

export function list() {
  return new Promise((resolve, reject) => {
    axios(URL)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      });
  });
}

export function add(payload) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL, payload)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      });
  });
}

export function update(id, payload) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${URL}/${id}`, payload)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      });
  });
}

export function remove(id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${URL}/${id}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      });
  });
}
