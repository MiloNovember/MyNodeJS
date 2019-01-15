let fs = require('fs')
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
                console.log('    ' + i + ', ' + filename.yellow)
            } else {
                console.log('    ' + i + ', ' + filename.green)
            }

            i++
            if (i == files.length) {
                console.log('')
                process.stdout.write('Enter your choice: '.white)
                process.stdin.resume()
            }else {
                file(i)
            }
        })
    }
    file(0)
})
