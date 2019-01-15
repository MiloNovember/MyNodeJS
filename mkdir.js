let fs = require('fs')

console.log('创建目录: test');

fs.mkdir('/Users/milo/Desktop/myNodejs/test', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("目录创建成功。");
})