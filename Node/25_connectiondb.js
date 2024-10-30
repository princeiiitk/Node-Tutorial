//read data from mongodb
//make diffrent file for db connection
//handle promise


const {MongoClient} = require('mongodb');
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
async function dbconnection(){
    let result=await client.connect();
    let db=result.db('e-comm')
    let collection=db.collection('product');
   return collection;//return promises
}
module.exports=dbconnection