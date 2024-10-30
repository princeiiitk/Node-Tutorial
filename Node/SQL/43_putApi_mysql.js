const express=require('express');
const app=express();
const connect=require('./40_connection')
app.use(express.json())
app.put("/:id",(req,res)=>{
    //static update
    // const data=["manish",1,2];
    // connect.query("UPDATE testing SET name= ? ,no=? where id= ?",data,(err,result,fild)=>{
    //     if(err){
    //         res.send("error")
    //       }else{
    //         res.send(result)
    //       }
    // })


    //dynamic update
const data=[req.body.name,req.body.id,req.body.no,req.body.city,req.params.id];
    connect.query("UPDATE testing SET name= ? ,no=? where id= ?",data,(err,result,fild)=>{
        if(err){
            res.send("error")
          }else{
            res.send(result)
          }
    })
   

})
app.listen(4000,'localhost')