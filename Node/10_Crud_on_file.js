const { error } = require('console');
const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud');
const filepath=`${dirpath}/tesing.txt`


// creat file
fs.writeFileSync(filepath,"my name is prince kumar");


//read file
fs.readFile(filepath,'utf-8',(err,item)=>{
    console.log(item);
})


// //append file
fs.appendFile(filepath,'and i am from bihar' ,(err)=>{
    if(!err){
        console.log("file is updated")
    }
});



// //rename file
// fs.rename(filepath,`${dirpath}/demo.txt`,(err)=>{
// if(!err){
//     console.log("rename");
// }
// })


//delete file
// fs.unlinkSync(`${dirpath}/demo.txt`);



//buffer---> means temperory  memory location