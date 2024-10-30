//node js is asych. programming language hai
//wait nahi krata bich me 
//examle
console.log("code start");
setTimeout(()=>{
    console.log("wiating");
},2000)
console.log("code end")
//line no. 8 wait nahi kara 



//drawback
let a=0;
let b=10;
setTimeout(()=>{a=10},2000);
console.log(a+b);
//solve by promises or callback function
