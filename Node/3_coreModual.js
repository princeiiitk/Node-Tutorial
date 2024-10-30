  //core module 1. glpble module   2.non globle modele
  // kuch feature pahle se hi hote like api ko call karne ke liye and
  // database se connect karen ke liye etc
  //jo hume import karene padte hai wo  non globle core modual hote hai
console.log("hii");
//import the file system
const fs=require('fs');
fs.writeFileSync("prince.txt" ,"hello my name is prince kumar");
  


//extra example
//__dirname---->name of directry telling
console.log("==>" ,__dirname);
console.log("==>" ,__filename);




const fs=require('fs').writeFileSync;
