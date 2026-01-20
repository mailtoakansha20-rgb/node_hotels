const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.MONGO_URL_LOCAL;
// const mongoURL = process.env.MONGO_URL;

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