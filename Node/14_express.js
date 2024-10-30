const express=require('express');
const app=express();
app.get('',(req,res)=>{
    res.send('welcom my name is princ kumar');

});
app.get('/about',(req,res)=>{
    res.send('welcome i am  from bihar')
})
app.listen(4000,'localhost')