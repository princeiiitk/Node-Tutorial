const mysql=require('mysql');
const connetion=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"test"
});
connetion.connect((err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("connected")
    }
})
connetion.query("select * from testing",(err,result)=>{
    console.log("result",result);

})