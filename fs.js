let fs = require('fs')

fs.stat('/Users/milo/Desktop/myNodejs/input.txt', (err, stats) => {
    console.log('找到文件？',stats.isFile());
})

console.log('准备打开文件');

fs.open('input.txt', 'r+', (err, fd) => {
    if (err) {
        return console.err(err);
    }
    console.log(fd);
    console.log('文件打开成功');
})