const mongoose = require('mongoose');

const  UserSchema = mongoose.Schema({
   name:{
       type:String,
      
   },
   password:{
     type:String,
   }

})


const User = mongoose.model('users',UserSchema);


module.exports = User;