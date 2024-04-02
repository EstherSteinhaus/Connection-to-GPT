const express = require('express');
const router=express.Router();
const controller=require('./controller.js');

router.post('/', controller.sendQuestion);

module.exports = router;