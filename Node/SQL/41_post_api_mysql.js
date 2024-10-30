const express=require('express');
const app=express();
const connect=require('./40_connection')
app.use(express.json())
app.post('/',(req,res)=>{
    
    // const data={name:"vishal",id:3,no:9,city:"sasaram"}
    const data=req.body
     connect.query('INSERT INTO testing SET?',data,(err,result,fild)=>{
      if(err){
        res.send("error")
      }else{
        res.send(result)
      }

     }) 
})
app.listen(4000,"localhost");