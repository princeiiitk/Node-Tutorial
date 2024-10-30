const mongoose=require('mongoose');

const savedb=async()=>{
    const url="mongodb://127.0.0.1:27017/e-comm";
       await mongoose.connect(url);
       const productschema=new mongoose.Schema({
        name:String,
        price:Number
       });
       const productmodel=mongoose.model('product',productschema);
       let data=new productmodel({name:"m10",price:30000});
       let result=await data.save();
       console.log(result);
   }

// savedb();
const update_in_db= async()=>{
    const url="mongodb://127.0.0.1:27017/e-comm";
    await mongoose.connect(url);
    const productschema=new mongoose.Schema({
        name:String,
        price:Number
       });
    const product=mongoose.model('product',productschema);
    let data=await product.updateOne(
       { name:"m10"},
       {
        $set:{
            price:100
        }}
    )
    console.log(data);
}
// update_in_db()  




const deletedata= async()=>{
    const url="mongodb://127.0.0.1:27017/e-comm";
    await mongoose.connect(url);
    const productschema=new mongoose.Schema({
        name:String,
        price:Number
       });
       const product=mongoose.model('products',productschema);
       let data=await product.deleteOne({name:"m10"});
       console.log(data)

    }
    // deletedata();


    const finddb= async()=>{
        const url="mongodb://127.0.0.1:27017/e-comm";
        await mongoose.connect(url);
        const productschema=new mongoose.Schema({
            name:String,
            price:Number
           });
           const product=mongoose.model('products',productschema);
           let data=await product.find();
           console.log(data)
    
        }
        finddb();