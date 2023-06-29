const mongoose = require('mongoose');
const db = 'mongodb+srv://ankit:ankit@cluster0.kw0bl3j.mongodb.net/'

mongoose.connect(db , {

}).then(()=>{
    console.log('connected to db successfully')
}).catch((err)=>console.log(err));