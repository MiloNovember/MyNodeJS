let express = require('express')
let app = express()
let fs = require('fs')

//添加的新用户数据
let user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }

 app.get('/:id', (req, res) => {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "user.json", 'utf8', (err, data) => {
        data = JSON.parse( data );

        // 查找指定用户
        // let user = data["user" + req.params.id] 
        // console.log( user );

        // 删除指定用户
        delete data['user' + 2]

        
        res.end( JSON.stringify(data));
    });
 })

// 新添加用户
// app.get('/', (req, res) => {
//     fs.readFile(__dirname + '/' + 'user.json', (err, data) => {
//         data = JSON.parse(data)
//         data['user4'] = user['user4']
//         console.log( data );
//         res.end(JSON.stringify(data))
//     })
// })


let server = app.listen(3000, 'localhost', () => {
    let host = server.address().address
    let port = server.address().port

    console.log(`服务器已启动： http://${host}:${port}`)
})