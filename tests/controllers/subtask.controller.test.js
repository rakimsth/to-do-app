/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
const common = require('../common');
const { add, getById, update, remove } = require('../../modules/subtasks/subtask.controller');

const subtaskData = {
  title: 'pick up clothes',
  todo_id: '61efe0bc306bef5e5f8aa125',
};

describe('Subtask Model Test', () => {
  beforeAll(async () => {
    await common.connectDatabase();
  });
  afterAll(async () => {
    await common.closeDatabase();
  });
  // Add Operation
  it('create & save subtask successfully', async () => {
    const data = await add(subtaskData);
    expect(data._id).toBeDefined();
    expect(data.title).toBe(subtaskData.title);
    expect(data.todo_id.toString()).toEqual(subtaskData.todo_id);
  });
  // Get by Id Operation
  it('get details of subtask test', async () => {
    const data = await add(subtaskData);
    const detail = await getById(data._id);
    expect(detail).toBeDefined();
    expect(detail.title).toBe(subtaskData.title);
  });
  // Get by Id Operation
  it('update subtask Test', async () => {
    const data = await add(subtaskData);
    const payload = { status: 'completed' };
    const d = await update(data._id, payload);
    expect(d).toBeDefined();
    expect(d.title).toBe(subtaskData.title);
    expect(d.status).toBe('completed');
  });
  // remove subtask Operation
  it('delete subtask Test', async () => {
    const createdSubtask = await add(subtaskData);
    const data = await remove(createdSubtask._id);
    expect(data).toBeDefined();
  });
});
