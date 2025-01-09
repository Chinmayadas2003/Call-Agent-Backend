//express router--creating modular routers 
const express=require('express');
const v1router =require('./v1/index.js')
const homepingcontroller = require('../controllers/home.controller.js');

const router= express.Router(); //express router object

router.use('/v1',v1router);

router.get('/home',homepingcontroller);

router.get('/homecoming',homepingcontroller);

module.exports = router;