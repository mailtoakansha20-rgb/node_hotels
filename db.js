const mongoose = require("mongoose");

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to mongoDB server !');
})

db.on('error', () => {
    console.log('MongoDB connection error !');
})

db.on('disconnected', () => {
    console.log('MongoDB disconnected !');
})

module.exports = db; 