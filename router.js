const router = require('express').Router();

const messagesRouter = require('./routes/messagesRouter');

router.use('/message', messagesRouter);

module.exports = router ;