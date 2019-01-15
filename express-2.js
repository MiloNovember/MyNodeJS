let express = require('express');
let app = express();
let fs = require("fs");

let bodyParser = require('body-parser');
let multer = require('multer');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(multer({ dest: '/tmp/' }).array('image'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "fileUpload.html");
})

app.post('/file_upload', (req, res) => {
    console.log(req.files[0]) // 上传文件的信息

    let des_file = __dirname + '/uploads/' + req.files[0].originalname // 存放文件的地址

    console.log(des_file)
    fs.readFile(req.files[0].path, (err, data) => {
        fs.writeFile(des_file, data, (err) => {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            console.log('---------------------------------')
            res.end(JSON.stringify(response));
        });
    });
})


let server = app.listen('3000', 'localhost', () => {
    let host = server.address().address
    let port = server.address().port
    console.log(`服务器已启动： http://${host}:${port}`)
})