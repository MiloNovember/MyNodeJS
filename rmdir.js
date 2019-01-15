let fs = require('fs')

let dir = 'test2'

console.log('删除目录:' + dir);

fs.rmdir(`/Users/milo/Desktop/myNodejs/${dir}`, (err, files) => {
    if (err) {
        return console.error(err);
    }else {
        console.log('已删除！');
    }
})