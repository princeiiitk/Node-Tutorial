const dbconnection=require('./25_connectiondb');
const update=async(resp)=>{
    const update=await dbconnection();
   const result= await update.updateOne({name:"iphone"},{$set:{name:"oppo"}})
   console.log(result);
   if(result.acknowledged==true){
    console.log("data updated")
   }
}
update();