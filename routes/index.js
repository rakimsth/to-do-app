const router = require('express').Router();
const apiManager = require('./routes.api');

router.use('/api/v1', apiManager);
module.exports = router;
