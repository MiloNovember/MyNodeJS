let http = require('http')
let querystring = require('querystring')
let util = require('util')

http.createServer((req, res) => {
    // 定义了一个post变量，用于暂存请求体的信息
    let post = ''

    req.on('data', chunk => {
        post += chunk
    })

    req.on('end', () => {
        post = querystring.parse(post)
        res.end(util.inspect(post))
    })

}).listen(3000)