let fs = require('fs')

let word = '湖泊'

// 创建一个可以写的流，写入output.txt中
let writeStream = fs.createWriteStream('output.txt')

// 使用utf-8编码
writeStream.write(word,'UTF8')

// 标记文件末尾
writeStream.end()

// 处理流事件 --->  data,end,and error
writeStream.on('finish', () => {
    console.log('写入完成');
})

writeStream.on('error', (err) => {
    console.log(err.stack);
})

console.log('执行完毕');

