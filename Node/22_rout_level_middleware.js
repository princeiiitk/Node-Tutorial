//types of middleware 
//1.application-level middleware(apply all routs/page)
//2.router-level middleware(aplly particular routs)
//3. error-handling middleware
//4. builtin
//5.third-party middleware




//2.router-level middleware(aplly particular routs)
const express=require('express');
const app=express();


const reqfilter=(req,resp)=>{
    if(!req.query.age){
        resp.send("please enter age")
    }
    if(req.query.age>18){
        resp.send("your adult")
    }
    else{
        resp.send("your age is less than 18 so do not access this pagr ")
    }
}
app.get('',(req,resp)=>{
    resp.send("hello")
})
app.get('/about',reqfilter,(req,resp)=>{
    resp.send("hello user about")
})
app.get('/help',(req,resp)=>{
    resp.send("hello help")
})
app.listen(4000,'localhost');
