let fs = require('fs')

let data = ''

// 创建可读流
let readStream = fs.createReadStream('input.txt')

// 设置编码为 utf8。
readStream.setEncoding('UTF8')

// 处理流事件 --> data, end, and error
readStream.on('data', (chunk) => {
    data += chunk
})

readStream.on('end', () => {
    console.log(data);
})

readStream.on('error', (err) => {
    console.log(err.stack);
})

console.log('程序执行完毕');