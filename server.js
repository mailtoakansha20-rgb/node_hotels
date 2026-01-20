const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); 

app.get('/', function(req, res) {
    res.send('welcome to my node app...');
})

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menuItem', menuRoutes);

app.listen(PORT);
