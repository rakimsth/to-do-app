/* eslint-disable no-undef */
const common = require('../common');
const { add, list, getById, update, remove } = require('../../modules/toDos/todo.controller');

const todoData = {
  title: 'Do Laundry',
};

describe('Todo Model Test', () => {
  beforeAll(async () => {
    await common.connectDatabase();
  });
  afterAll(async () => {
    await common.closeDatabase();
  });
  // Add Operation
  it('create & save todo successfully', async () => {
    const createdTodo = await add(todoData);
    expect(createdTodo._id).toBeDefined();
    expect(createdTodo.title).toBe(todoData.title);
    expect(createdTodo.status).toBe('pending');
  });
  // List Operation
  it('lists all todos with their subtasks', async () => {
    const allData = await list();
    expect(allData).toBeDefined();
    expect(Array.isArray(allData)).toBe(true);
  });
  // Get by Id Operation
  it('get details of todo test', async () => {
    const createdTodo = await add(todoData);
    const detail = await getById(createdTodo._id);
    expect(detail).toBeDefined();
    expect(detail.title).toBe(todoData.title);
  });
  // Get by Id Operation
  it('update todo Test', async () => {
    const createdTodo = await add(todoData);
    const payload = { status: 'completed' };
    const updateTodo = await update(createdTodo._id, payload);
    expect(updateTodo).toBeDefined();
    expect(updateTodo.title).toBe(todoData.title);
    expect(updateTodo.status).toBe('completed');
  });
  // remove todo Operation
  it('delete todo Test', async () => {
    const createdTodo = await add(todoData);
    const updateTodo = await remove(createdTodo._id);
    expect(updateTodo).toBeDefined();
  });
});
