const express = require('express');
const app = express();
require('./32_confil');

app.use(express.json());
const product = require('./32_product_coll');









app.get('/', async (req, res) => {

    let data = await product.find();
    res.send(data)
})





app.delete('/delete/:_id', async (req, res) => {

    console.log(req.params);
    let data = await product.deleteOne(req.params)
    res.send(data)
})





app.put("/update/:_id", async(req, res) =>  {
    console.log(req.params)
    let data = await product.updateOne(

            //condition
            // name:"abc"

           req.params ,
        
        {
            $set:  req.body 
        }
    );
    res.send(data)
})
app.listen(4000, 'localhost')