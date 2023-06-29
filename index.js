const express = require('express');
const app = express();
const Port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}))
app.use(require('./routes/router'));
const db = require('./model/connection')
app.listen(Port , ()=>{
    console.log('server started successfully ')
})