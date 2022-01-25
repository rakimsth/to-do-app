const router = require('express').Router();
const Controller = require('./todo.controller');

// create Todos
router.post('/', async (q, r, n) => {
  const payload = q.body || {};
  Controller.add(payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// list Todos
router.get('/', async (q, r, n) => {
  Controller.list()
    .then(d => r.json(d))
    .catch(e => n(e));
});

// list todo by id
router.get('/:id', async (q, r, n) => {
  Controller.getById(q.params.id)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// update status of Todo
router.put('/:id', async (q, r, n) => {
  const payload = q.body;
  Controller.update(q.params.id, payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// delete Todo
router.delete('/:id', async (q, r, n) => {
  Controller.delete(q.params.id)
    .then(d => r.json(d))
    .catch(e => n(e));
});

module.exports = router;
