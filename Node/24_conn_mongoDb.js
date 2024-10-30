const {MongoClient}=require('mongodb');
// console.log({MongoClient});
const url='mongodb://127.0.0.1:27017';

const client=new MongoClient(url);
// console.log(client);
async function getData(){
    let result=await client.connect();
 
    let db=result.db('e-comm');
   
    let collection=db.collection('product');
 
    let response=await collection.find({}).toArray()
    console.log(response)
    console.log(response[2].name)
}
getData();
