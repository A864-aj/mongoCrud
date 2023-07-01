const mongoose = require('mongoose');

const  UserSchema = mongoose.Schema({
   name:{
       type:String,
   },
   password:{
     type:String,
   }

})
const SellerSchema=mongoose.Schema({
  Sname:{
    type:String
  },
  Spassword:{
    type:String
  }
});

const Seller=mongoose.model('seller',SellerSchema)


const User = mongoose.model('users',UserSchema);


module.exports = {User,Seller};