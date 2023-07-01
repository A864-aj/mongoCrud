const {Seller} = require('../model/user')

const addSeller=async(req,res)=>{

    const { Sname , Spassword} = req.body;

    const seller = new Seller({
        Sname,
        Spassword
    });

    seller.save(seller).then((data)=>{
         res.send({
            status:200,
            message:"Seller added"
         });
      }).catch((err)=>console.log(err))

}

const updateSeller=async(req,res)=>{

const id = req.params.id;
const name=req.body.Sname

   

    const seller = await Seller.updateOne({_id:id},{
        $set: 
          {
            Sname: name,
          }
      });

    console.log(seller)
    res.send({
        status:200,
        message:"Seller updated"
     });

}

module.exports={addSeller,updateSeller}