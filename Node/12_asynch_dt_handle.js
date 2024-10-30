let a=0;
let b=10;
let wiatingdata= new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },2000);
})
wiatingdata.then((a)=>{
    console.log(a+b);
})
