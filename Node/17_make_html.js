const express=require('express')
const app=express();
const path=require('path')

const htmlpath=path.join(__dirname,'html')
app.use(express.static(htmlpath))


app.listen(4500 ,'localhost');