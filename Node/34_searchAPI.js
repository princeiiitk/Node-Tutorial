const express=require('express')
require("./32_confil");
const product=require("./32_product_coll");
const app=express();
app.use(express.json());
app.get("/search/:key",async(req,res)=>{
    console.log(req.params.key);
    let data=await product.find(
        {
            "$or":[
                {
                    "name":{$regex:req.params.key}
                },
                {
                    "brand":{$regex:req.params.key}
                }
            ]
        }
    )
    res.send(data);
})
app.listen(4000,'localhost');