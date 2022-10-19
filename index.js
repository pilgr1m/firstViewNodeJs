// const myMath = require('./myMath')
// const result = myMath.minus(5,5)
// const result2 = myMath.add(5,5)
// console.log(result, result2)

// const fs = require('fs')

// const read = fs.readFileSync('other.txt', 'utf-8')
// console.log(read)

// create (if not exist) and write 
// or REWRITE(if file is empty) into file
// fs.writeFileSync('other.txt', read + '\n Hello world!!!')

// const read = fs.readFile('other.txt', 'utf-8', (error, data)=> {
//     console.log('data in read: ', data)
//     console.log('error in read: ', error)
//     fs.writeFile('other.txt', data + '\n new text test', (error, data)=> {
//         console.log('data in write: ', data)
//         console.log('error in write: ', error)
//     })
    
// })
// console.log('READ: ', read)

// fs.writeFile('other.txt', read + '\n Hello world!!!')

// fs.mkdirSync('new folder')

// create new folder and then create new txt-file and write into
// fs.mkdir('new-folder1', () => {
//     fs.writeFile('./new-folder1/1file.txt', 'Test text', ()=>{})
// })

// unlink-> remove file,rmdir -> remove folder
//  !!!folder have to empty and then we can remove it
// fs.unlink('new-folder', () => { })
// fs.unlink('./new-folder/1file.txt', () => {
//     fs.rmdir('./new-folder', () => {})
// })
// fs.unlink('./wer/wer3.txt', () => {
//     fs.rmdir('wer', () => {})
// })

// ---------
// server
const http = require('http')
let server = http.createServer((request, response) => {
    // console.log('request: ', request)
    // console.log('response: ', response)
    
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    response.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NODE.js</title>
    </head>
    <body>
        Hello world!!! <br> <b>I study Node.Js</b>
    </body>
    </html>`)
})


const PORT = 3000
const HOST = 'localhost'
// const HOST = '127.0.0.1'

server.listen(PORT, HOST, ()=> {
    console.log(`server :: http://${HOST}:${PORT}`)
})