'use strict'

//1.导入模块

const http = require('http');

const url = require('url');

const querystring = require('querystring');

//2.创建web服务

const server = http.createServer();

//3.请求、处理、相应

// get方式
// server.on('request',(req,res)=>{
//     const urlString = req.url;
//     if(!urlString.includes(".ico")){
//         const urlObj = url.parse(urlString);
//         const paramsObj = querystring.parse(urlObj.query);
//         console.log(paramsObj);
//     }
//     res.end("HelloWorld");
// })

//post方式
server.on('request', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    })

    req.on('end',()=>{
        const paramsObj = querystring.parse(body);
        console.log(paramsObj);
    })

    res.end("post方式")
})

//4.启动web服务，监听浏览器请求

server.listen(3000, '127.0.0.1', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("start server OK");
})