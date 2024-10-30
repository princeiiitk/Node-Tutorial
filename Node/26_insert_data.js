const dbconnection=require('./25_connectiondb');
const insert=async(resp)=>{
const result=await dbconnection();
const insert=await result.insertMany(
                                       [{name:"iphone",price:61000,category:"phone"},
                                       {name:"vivo",price:51000,category:"phone"}]
                                    )
if(insert.acknowledged==true){
    console.log("data inserted");
}
}
insert()