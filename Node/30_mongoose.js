const mongoose=require('mongoose');

const main=async()=>{
    const url="mongodb://127.0.0.1:27017/e-comm";
    await mongoose.connect(url);
    const productschema=new mongoose.Schema({
        name:String,
        price:Number
    });
    const productmodel= mongoose.model('products',productschema);
    let data=new productmodel({name:"m10",price:30000});
    let result=await data.save();
    console.log(result);
}
main();