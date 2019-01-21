let fs = require('fs')
    ,stdin = process.stdin
    ,stdout = process.stdout
require('colors')

fs.readdir(process.cwd(), (err, files) => {
    console.log('')

    if (!files.length) {
        return console.log('No files to show!'.red)
    }

    console.log(' Select which file or directory you want to see \n')

    function file(i) {
        let filename = files[i]
    
        fs.stat(__dirname + '/' + filename, (err, stat) => {
            if (stat.isDirectory()) {
                console.log(`${i}  ${filename}`.yellow)
            }else{
                console.log(`${i}  ${filename}`.green)
            }
    
            if (++i == files.length) {
                read()
            } else {
                file(i)
            }
        })
    }

    function read() {
        console.log('')
    
        stdout.write(`Enter your choice: `.cyan)
        stdin.resume()
        stdin.setEncoding('utf8')

        stdin.on('data', option)
    }  

    function option(data) {
        console.log(data)
        let filename = files[Number(data)]
        if (!filename) {
            stdout.write('Enter your choice again: '.cyan)
        } else {
            stdin.pause()

            fs.readFile(`${__dirname}/${filename}`, 'utf8', (err, data) => {
                if (err) return console.log(err) 

                console.log('')
                console.log(data)
            })
        }
    }

    file(0)
})
