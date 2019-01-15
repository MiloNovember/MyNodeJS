console.log('__filename: ' + __filename);
console.log('__dirname: ' + __dirname);

let t = setTimeout(()=> {
   console.log('延迟一秒'); 
}, 1000)


clearTimeout(t)