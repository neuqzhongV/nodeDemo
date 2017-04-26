'use strict'

//1.导入模块/包

const http = require('http');

const fs = require('fs');

//2.创建web服务

const server = http.createServer();

//3.请求、处理、响应

server.on('request',(req,res)=>{
    const urlString = req.url;
    if(urlString.includes('index.html')){
        fs.readFile('./index.html','utf8',(err,data)=>{
            if(err) throw err;
            console.log(data);
            res.end(data);
        })
    }
})

//4.开启web服务,启动监听
server.listen(3000,'127.0.0.1',(err)=>{
    if (err) {
      console.log(err);
    }
    console.log("start server OK");
})