const express=require('express');
const app=express();
const dbconnection=require('./25_connectiondb');
app.use(express.json())
app.get('/',async(req,resp)=>{
    const data= await dbconnection()
    const result=await data.find().toArray();
     resp.send(result);
  
})
app.post('/',async(req,resp)=>{
    console.log(req.body)
    let data= await dbconnection()
    let insert=await data.insertOne(req.body)
    resp.send(insert)

})
app.put('/',async(req,resp)=>{
     const data=await dbconnection();

     //update static data
    //  const result=await data.updateOne({name:"sumsang"},{$set:{price:200}})


    //updata dynamic data
    const result=await data.updateOne({name:req.body.name},{$set:req.body})
    resp.send({result:"updata"})
})
app.delete('/',async(req,resp)=>{
      const data=await dbconnection();
        //delete static data
      const result = await data.deleteMany({name:'sunny'});
      resp.send("deleted data");
})
app.listen(4000,'localhost');