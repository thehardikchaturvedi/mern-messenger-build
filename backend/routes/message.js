const express = require('express');
const router = express.Router();
// const { check } = require('express-validator');
const {saveMessage,getMessages}=require('../controllers/message')
router.post('/save/message', saveMessage);
router.get('/retrieve/conversation', getMessages);

module.exports = router;
