require('dotenv').config({path:"./config/.env"})
require('./config/db.config');

const express = require('express');
const app = express();
const port = 3002 || process.env.Port;
const cors = require('cors');

const userRouter = require('./Router/user.router')
const passport = require('passport');
const session = require('express-session');
const cockieParser = require('cookie-parser');

app.use(express.json());
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(cockieParser("secretcode"))
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use('/user', userRouter)
app.use(passport.session());
app.use(passport.initialize());

// require('./passport/passport.config')(passport);

app.listen(port,()=>{
    console.log("server started at", port)
});