const server_url = process.env.REACT_APP_API_SERVER;
const base_url = server_url + '/api/v1';

module.exports = {
  TODOS: base_url + '/todos',
  SUBTASKS: base_url + '/subtasks',
};
