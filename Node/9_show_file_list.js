//creat file in folder in loop 
//need path module inbuilt in node js
const fs =require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'folder');
// console.log(dirpath);//current file
// for(i=0 ; i<5 ;i++){
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple fie list")
// }
fs.readdir(dirpath,(err,filesitem)=>{
console.log(filesitem);
//forEach method bhi lga skte hai filesitem.forEach((item)=>{console.log(itrm)})

})
