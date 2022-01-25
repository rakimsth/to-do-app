const Model = require('./subtask.model');

class Controller {
  add(payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.create(payload);
  }

  getById(id) {
    return Model.findById(id);
  }

  update(id, payload) {
    return Model.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return Model.findByIdAndRemove(id);
  }
}
module.exports = new Controller();
