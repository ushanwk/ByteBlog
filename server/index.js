const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ushanwk22:Ukwk22711@cluster0.x8nkhgc.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;

    try{
        const userDoc = await User.create({username, password});
        res.json(userDoc);
    }catch (e){
        res.status(400).json(e)
    }
})

const server = app.listen(4000, 'localhost', () => {
    console.log('Server is running on port 4000');
});

