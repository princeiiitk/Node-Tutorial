const express=require('express')
const app=express();
require('./32_confil')
const product=require('./32_product_coll');
app.use(express.json());


app.post('/',async(req,res)=>{

   let data=new product(req.body);
   let result=await data.save();
   res.send(req.body);
   console.log(req.body)
});
app.listen(4000,'localhost');