const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload())

var corsOptions = {
    origin: [
        'http://125.227.50.137:3000',
        'http://localhost:3000', 
        'http://172.18.192.1:3000', 
    ],
    methods:['GET','POST','PUT','DELETE'],
    credentials: false,
    withCredentials: false
}
const cors = require('cors');
app.use(cors(corsOptions)); 

module.exports = app