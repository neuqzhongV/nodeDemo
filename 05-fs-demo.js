'use strict'

//1.导入模块

const fs = require('fs');

const path = require('path');

const sourcePath = path.join(__dirname, '123/01.txt');

const targetDirPath = path.join(__dirname, 'abc');

const targetPath = path.join(__dirname, 'abc/666.txt');

fs.watchFile(sourcePath, (curr, prev) => {
    fs.exists(targetDirPath, (exists) => {
        if (!exists) {
            fs.mkdir(targetDirPath, (err) => {
                if (err) {
                    conslole.log(err);
                }
                console.log('create dir success');
            })
        }
    })

    fs.readFile(sourcePath, (err, data) => {
    if (err) {
        console.log(err);
    }
    fs.writeFile(targetPath, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('copy success');
    })
})
})

