const express=require('express');
const app=express();
const reqfilter=require('./23_middlewae')

app.get('',(req,resp)=>{
    resp.send("hello home");
})
app.get('/about',reqfilter,(req,resp)=>{
resp.send("hello about")
})
app.listen(4000,'localhost');


//kis particular rout par middleware apply karna hai to 
// const route=express.router();
// route.use(reqfilter);
// app.route('/contact',(req,resp)=>{
//     resp.send("hello home");
// })