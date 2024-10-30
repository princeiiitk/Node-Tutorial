//remove extension from url bcz of security purpuse
//apply get method 
//remove a extension from url 
//make 404 page 
//apply 404 page
const express=require('express')
const app=express();
const path=require('path')

const htmlpath=path.join(__dirname,'html')
// app.use(express.static(htmlpath))
app.get('/index',(req,res)=>{
    res.sendFile(`${htmlpath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${htmlpath}/about.html`)
})
app.get('*',(req,res)=>{
    res.sendFile(`${htmlpath}/no_page.html`)
})
app.listen(4500 ,'localhost');