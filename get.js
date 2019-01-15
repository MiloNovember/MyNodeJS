let http = require('http')
let url = require('url')
let util = require('util')


let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
    res.end(util.inspect(url.parse(req.url, true)))
})

server.listen(3000)

