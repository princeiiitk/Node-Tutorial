const dbconnection=require('./25_connectiondb')
// console.log(dbconnection());//promises return kar raha hai 
//promisis handling


dbconnection().then((res)=>{
console.log(res.find().toArray());//again return promises
//promises handling
const promis=res.find().toArray();
return promis;
}).then((data)=>{
console.log(data);
})





//second method of promises handling 
//by async await
const main=async()=>{
   const data = await dbconnection();
//    const display=data.find().toArray();
//    console.log(display);

const display=await data.find().toArray();
console.log(display);

}

main();

