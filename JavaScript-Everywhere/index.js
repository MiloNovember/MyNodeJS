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
    }  
    
    console.log(
        'test'
    )

    file(0)
})
