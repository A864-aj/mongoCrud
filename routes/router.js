const express = require('express');
const router = express.Router();
const User = require('../model/user')

router.get('/',(req,res)=>{
    res.send('hello from server')
})

router.post('/register',(req,res)=>{
     const { name , password} = req.body;
     console.log(name , password )
     
     const user = new User({
         name,
         password
     });

     //to save data and store data there are create  and save 
     user.save(user).then((data)=>{
       // console.log(data)
        res.json(data);
     }).catch((err)=>console.log(err))

});


router.get('/users/:id', async (req,res)=>{
    const  id = req.params.id;
    //console.log(id)
   // const user = await User.findById({_id:id})
   //const user = await User.findOne({_id:id})
   const user = await User.find()
     res.json(user)
});

router.put('/users/:id',async(req,res)=>{
    const id = req.params.id;

    const { name } = req.body;
    console.log(id)
    //updateOne 
    //updateMany 
    //findByIdAndUpdate


    const user = await User.updateOne({
    })
    console.log(user)
    res.send(user);
})


module.exports = router;