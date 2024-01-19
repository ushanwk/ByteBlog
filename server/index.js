const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

const User = require('./models/User');
const Post = require('./models/Post')

const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);
const secret = 'abcdefg'

const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');

const multer = require('multer'); //save image files in folders
const uploadMiddleware = multer({ dest: 'uploads/' });

const fs = require('fs');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

app.use(cookieParser());

app.use('/uploads', express.static(__dirname + '/uploads'));

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
           res.cookie('token', token).json({
               id: userDoc._id,
               username
           });
        });
    }else{
        res.status(400).json('Wrong credentials. Please try again.');
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (er, info) => {
        if(er) throw er;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const {originalname, path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];

    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const {title, summary, content} = req.body;

    const {token} = req.cookies;

    jwt.verify(token, secret, {}, async (er, info) => {
        if(er) throw er;

        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        });
        res.json(postDoc);
    });
});

app.get('/post', async (req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username'])
            .sort({createdAt: -1})
            .limit(20)
    );
});

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
})



const server = app.listen(4000, 'localhost', () => {
    console.log('Server is running on port 4000');
});

