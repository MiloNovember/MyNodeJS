let fs = require('fs')
let zlib = require('zlib')

// 压缩文件
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))

console.log('文件压缩完成');


// 解压文件
/*
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'))

console.log('文件解压完成');
*/
