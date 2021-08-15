
const router = require('express').Router();
const messagesController = require('../controllers/messagesController.js');


// GET - Return all messages

router.get('/', async(req, res) => {
    try {
        res.json(await messagesController.findAllMsg())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


// POST - Creates a new Message

router.post('/', async(req, res) => {
    try {
        const text = req.body;
        res.json(await messagesController.createMessage(text))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;