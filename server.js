const exp=require("express")
const app=exp();
const mc=require("mongodb").MongoClient;
const path=require("path");


// connect angular with web server
app.use(exp.static(path.join(__dirname,"dist/course")))




// import api objects

const userApiObj=require("./APIS/userapi")


// forward req object to specific api based on path

app.use("/user",userApiObj)


//databasr url
const dburl="mongodb+srv://cdb37:cdb37@prajwal.r4aek.mongodb.net/courselist?retryWrites=true&w=majority"
// db connectivity
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client=>{
    // get db object
    const databaseObj=client.db("courselist")
    const userCollectionObject=databaseObj.collection("coursecollection");
    

    // sharing collection
    app.set("userCollectionObject",userCollectionObject)
    console.log("db server stared")


})

.catch(err=>console.log("error in connection",err))


app.use((req,res,next)=>{
    res.send({message:"Invalid path"})
})

app.use((err,req,res,next)=>{
    res.send({message:"error occured",reason:err.message})

})



//assign port number
app.listen(4000,()=>console.log("server started on 4000"))