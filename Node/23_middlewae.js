module.exports=reqfilter=(req,resp)=>{
    if(!req.query.age){
        resp.send('pease enter age')
    }
    else if(req.query.age>18){
        resp.send('your are adult')
    }
    else{
        resp.send('your are less than 18')
    }
}