const router = require('express').Router();
const Controller = require('./subtask.controller');

// create subtask
router.post('/', async (q, r, n) => {
  const payload = q.body || {};
  Controller.add(payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// list subtask by id
router.get('/:id', async (q, r, n) => {
  Controller.getById(q.params.id)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// update subtask status
router.put('/:id', async (q, r, n) => {
  const payload = q.body;
  Controller.update(q.params.id, payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// delete schedule
router.delete('/:id', async (q, r, n) => {
  Controller.delete(q.params.id)
    .then(d => r.json(d))
    .catch(e => n(e));
});

module.exports = router;
