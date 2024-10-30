//make basic server
//http modual kya karta hai --->node js ke under server ka request or response ko handle karta hai

const http=require('http');
http.createServer((request,respons)=>{
respons.write("hii prince i am from bihar");
respons.write("<h1>hii prince</h1>")
respons.end();
}).listen(4000, 'localhost')