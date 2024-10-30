const dbconnection=require('./25_connectiondb');
const deleted=async()=>{
        const deleted=await dbconnection();
        const result= await deleted.deleteOne({name:"nokia"})
        console.log(result);
        if(result.acknowledged==true){
            console.log("data deleted");
        }
}
deleted()