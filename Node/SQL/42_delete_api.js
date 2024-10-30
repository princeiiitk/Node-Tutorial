const express=require('express');
const app=express();
const connect=require('./40_connection')
app.use(express.json())
app.delete("/:id",(req,res)=>{

   connect.query("DELETE FROM testing WHERE ID ="+req.params.id,(err,result,fild)=>{
    if(err){
        res.send("error")
      }else{
        res.send(result)
      }
   });
})
app.listen(4000,"localhost");