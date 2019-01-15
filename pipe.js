let fs = require('fs')

let read = fs.createReadStream('input.txt')
let write = fs.createWriteStream('output.txt')

// 把读到的内容，写入可写的文件里
read.pipe(write)

console.log('over!!!');