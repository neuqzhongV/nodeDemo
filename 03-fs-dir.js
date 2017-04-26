'use strict'

//导入fs模块
var fs = require('fs');
//导入path模块
const path = require('path');

const dirPath = path.join(__dirname, 'abc');

//创建文件

// fs.mkdir(dirPath,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('create dir success');
// })

// fs.exists(dirPath, (exists) => {
//     if (!exists) {
//         fs.mkdir(dirPath, (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log('create dir success');
//         })
//     }else {
//         console.log("文件夹已经存在")
//     }
// })

//删除文件

// fs.exists(dirPath,(exists)=>{
//     if(exists){
//         fs.rmdir(dirPath,(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             console.log("remove dir success");
//         })
//     }else{
//         console.log("文件夹不存在")
//     }
// })

//重命名文件夹

const newDirPath = path.join(__dirname,'123');

fs.rename(dirPath,newDirPath,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("rename success");
})