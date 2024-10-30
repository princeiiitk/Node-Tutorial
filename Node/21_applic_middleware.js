//middleware
//what is middlewares-->kuch function hote hai jo rout(diffrent page or links) ke sath use hote for request and response ko access kar skte hai or modifiy kar skte hai
//how to make a middleware
//apply middleware on routs(only)
//type of middleware 
//1.application-level middleware(apply all routs/page)
//2.router-level middleware(aplly particular routs)
//3. error-handling middleware
//4. builtin
//5.third-party middleware




//1.application-level middleware(apply all routs/page)
const express=require('express')
const app=express();
const reqfilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provided age")
    }
    else if(req.query.age<18){
        res.send('you can not access please ')
    }
    else{
        next();
    }
}
app.use(reqfilter)
app.get('/',(req,res)=>{
    res.send('welcome to home page');
})
app.get('/user',(req,res)=>{
     res.send('welcome to user page')
})
app.listen(5000,'localhost');


