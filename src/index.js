const express=require ('express');
const {PORT}= require('./config/server.config.js')
const homepingcontroller = require('./controllers/home.controller.js');
const router = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const apirouter=require('./routes');
const dotenv=require('dotenv');
const app=express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());



app.use('/home',router);//router middleware //mapped to router controller //custom routing
app.use('/api',apirouter);
app.listen(PORT,()=>{
    console.log(`Started server at port :${PORT}`)
})

