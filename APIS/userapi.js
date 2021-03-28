
const exp=require("express");
const userApiObj=exp.Router();
const errorHandler=require("express-async-handler");
// const bcryptjs=require("bcryptjs")
// const jwt=require("jsonwebtoken")






   userApiObj.get("/getusers",errorHandler(async(req,res,next)=>{
       userCollectionObject=req.app.get("userCollectionObject");
       users=await userCollectionObject.find().toArray();
       res.send({message:users});
   }))





// get user
   userApiObj.get("/getuser/:username",errorHandler(async(req,res,next)=>{
       userCollectionObject=req.app.get("userCollectionObject");
       
       let Obj=await userCollectionObject.findOne({username:req.params.username});
       res.send({message:"success",user:Obj});
   }))





userApiObj.use(exp.json());

// get req handler
userApiObj.post("/register",errorHandler( async(req,res,next)=>{
    let userCollectionObject=req.app.get("userCollectionObject");
    let userObj=req.body;
    
// check for user in database
let user=await userCollectionObject.findOne({newcourse:userObj.newcourse})
// if user existed
if(user!==null){
res.send({message:"user existed"})
}
else{
// let hashedpw=await bcryptjs.hash(userObj.password,5)
// userObj.password=hashedpw;

let success=await userCollectionObject.insertOne(userObj)   
    res.send({message:"user created"})
}
}))

// export
module.exports=userApiObj;