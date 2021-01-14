const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const { mongoose }= require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(cors());

app.use(bodyParser.json());
//103.132.2.26
//192.168.0.107
//127.0.0.1
app.listen(PORT,(err)=> console.log('server started at 3000'));

app.use('/employees',employeeController);
