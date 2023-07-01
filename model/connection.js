const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/Blackcoffer'

mongoose.connect(db , {

}).then(()=>{
    console.log('connected to db successfully')
}).catch((err)=>console.log(err));

