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
const session = require('express-session');

app.use(cors({
    origin: process.env.ORIGIN_URI, 
    credentials: true,             
}));

app.use(bodyParser.json());


app.use(
    session({
        secret: '(m!ci3gh(ibay5d69(d6s*qy+^u8$bb(u^(^7imk42+-_21h3q', // A strong secret for signing the session ID
        resave: false,             // Avoid saving unchanged sessions
        saveUninitialized: true,   // Create sessions even if they are empty
        cookie: {
            maxAge: 1000 * 60 * 30, // Session expiration time (e.g., 30 minutes)
            httpOnly: true,         // Prevent client-side JavaScript from accessing cookies
            secure: false,          // Set to true in production with HTTPS
        },
    })
);


app.use((req, res, next) => {
    console.log("Session ID:", req.sessionID);
    console.log("Session Data:", JSON.stringify(req.session, null, 2));
    next();
});



app.use('/home',router);//router middleware //mapped to router controller //custom routing
app.use('/api',apirouter);
app.listen(PORT,()=>{
    console.log(`Started server at port :${PORT}`)
})

