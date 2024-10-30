//Routing is the process of path selection in any network  by request and respons
//app.get()
//app.post()...etc ye sab rout hai
const express=require('express');
const app=express();
app.get('',(req,res)=>{
    res.send('welcom my name is prince kumar');

});
app.get('/about',(req,res)=>{
    res.send('welcome i am  from bihar')
})
app.listen(4000,'localhost')