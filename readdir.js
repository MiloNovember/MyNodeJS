let fs = require('fs')

console.log('读取文件目录');

fs.readdir('/Users/milo/Desktop/myNodejs/test', (err, files) => {
    if (err) {
        return console.error(err);
    }

    files.map(file => {
        console.log(file);
    })
})