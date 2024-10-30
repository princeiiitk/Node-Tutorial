//render html and json 
//render means display kaise kara skte hai 
const express=require('express');
const app=express();
app.get('',(req,res)=>{
    res.send(`<h1>welcom home </h1><a href="/about">go to about</a>`);

});
app.get('/about',(req,res)=>{
    res.send(`
    <input type='text' placeholder="user name"/>
    <button>click</button>`)
})
app.get('/name',(req,res)=>{
    res.send([
    {name1:'prince'}
    ,
    {name2:'sunny'}])
})
app.listen(4000,'localhost')