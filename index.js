const express = require('express');
const app = express();
const Port = process.env.PORT || 3000;

const router =require('./routes/router')
const Sellerrouter=require('./routes/sellerRouter')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router);
app.use(Sellerrouter)

const db = require('./model/connection')
app.listen(Port , ()=>{
    console.log('server started successfully ')
})