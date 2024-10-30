const express=require('express')
const app=express();
const path=require('path')

const htmlpath=path.join(__dirname,'html')
const viewpath=path.join(__dirname,'view')
app.set('view engine','ejs')
app.get('/profile',(req,res)=>{
    const user={name:"prince kumar",
           skills:['java' ,'js' ,'c' ,'c++','python']}
    res.render(`${viewpath}/profile.ejs`,{user});
   
  })
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