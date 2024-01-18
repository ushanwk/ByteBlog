const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);
const secret = 'abcdefg'

const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

app.use(cookieParser());

mongoose.connect('mongodb+srv://ushanwk22:Ukwk22711@cluster0.x8nkhgc.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;

    try{
        const userDoc = await User.create({username, password: bcrypt.hashSync(password, salt),});
        res.json(userDoc);
    }catch (e){
        res.status(400).json(e)
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if(passOk){
        jwt.sign({username, id: userDoc._id}, secret, {}, (er, token) => {
           if(er) throw er;
           res.cookie('token', token).json('ok');
        });
    }else{
        res.status(400).json('Wrong credentials. Please try again.');
    }
});

app.get('/profile', (req, res) =>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (er, info) => {
        if(er) throw er;
        res.json(info);
    });
});

const server = app.listen(4000, 'localhost', () => {
    console.log('Server is running on port 4000');
});

