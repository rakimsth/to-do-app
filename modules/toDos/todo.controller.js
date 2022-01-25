const Model = require('./todo.model');

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

  update(id, status) {
    return Model.findByIdAndUpdate(id, status, { new: true });
  }

  delete(id) {
    return Model.findByIdAndRemove(id);
  }
}
module.exports = new Controller();
