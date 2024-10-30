const connect=require('./40_connection');
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  
   connect.query("select * from testing",(err,result)=>{
         if(err){
            res.send("error")
         }
         else{
            res.send(result)
         }
   })
})
app.listen(5000)
