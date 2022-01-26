const Model = require('./todo.model');
const SubtaskModel = require('../subtasks/subtask.model');
const { update } = require('../subtasks/subtask.controller');

class Controller {
  add(payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.create(payload);
  }

  async list() {
    try {
      const query = [];
      query.push({
        $lookup: {
          from: 'subtasks',
          localField: '_id',
          foreignField: 'todo_id',
          as: 'subtasks',
        },
      });
      return Model.aggregate(query);
    } catch (err) {
      return { message: err.message };
    }
  }

  getById(id) {
    return Model.findById(id);
  }

  async update(id, status) {
    const allSubtasks = await SubtaskModel.find({ todo_id: id, status: 'pending' });
    allSubtasks.map(async d => {
      const resp = await update(d.id, status);
      return resp;
    });
    return Model.findByIdAndUpdate(id, status, { new: true });
  }

  remove(id) {
    return Model.findByIdAndRemove(id);
  }
}
module.exports = new Controller();
