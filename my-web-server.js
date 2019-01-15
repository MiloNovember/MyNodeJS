/**
 * Created by milo on 2018/3/15.
 */

let http = require('http')
let express = require('express')
let fs = require('fs')
let events = require('events')
let eventEmitter = new events.EventEmitter()
require('colors')

let country = 'CHINA!'

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'ContentType' : 'text/html' })
    res.end(`Hello ${country}`)
})

server.listen(3000)


let connectHandler = () => {
    console.log('连接成功');
    eventEmitter.emit('data_received')
}

let dataReceivedHandler = () => {
    fs.readFile('input.txt', (err, data) => {
        if (err) {
            console.log(err.stack);
        }else {
            console.log('数据接收成功');
            console.log(data.toString());
        }
    })
}

eventEmitter.on('connection', connectHandler)
eventEmitter.on('data_received', dataReceivedHandler)

eventEmitter.emit('connection')

console.log('Server running at http://localhost:3000/'.rainbow);