const express= require('express');
//const v1router = require('./v1/index');
const homepingcontroller = require('../../controllers/home.controller.js');
const todorouter = require('./todo.routes.js');
const Gptrouter = require('./gpt.routes.js');

const router =express.Router();

router.use('/agent',Gptrouter);
router.use('/todos',todorouter);

router.get('/ping',homepingcontroller);

module.exports=router;