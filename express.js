let express = require('express')
let app = express()
let bodyParser = require('body-parser')

let urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.post('/process_post', urlencodedParser, (req, res) => {
    let response = {
        code: 0,
        data: {
            name: req.body.name,
            age: req.body.age
        },
        msg: ''
    }

    res.send(JSON.stringify(response))
})

app.get('/process_get', (req, res) => {
    let response = {
        code: 0,
        data: {
            name: req.query.name,
            age: req.query.age
        },
        msg: ''
    }

    res.send(JSON.stringify(response))
})

let server = app.listen(3000, 'localhost', () => {
    let host = server.address().address
    let port = server.address().port
    console.log("服务器已经启动，访问地址为 http://%s:%s", host, port)
})