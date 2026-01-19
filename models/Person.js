const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        require
    },
    mobile: {
        type: String,
        require
    },
    email: {
        type: String,
        unique: true,
        require
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        require
    }
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;