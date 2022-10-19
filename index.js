// const myMath = require('./myMath')
// const result = myMath.minus(5,5)
// const result2 = myMath.add(5,5)
// console.log(result, result2)

const fs = require('fs')

// const read = fs.readFileSync('other.txt', 'utf-8')
// console.log(read)

// create (if not exist) and write 
// or REWRITE(if file is empty) into file
// fs.writeFileSync('other.txt', read + '\n Hello world!!!')

const read = fs.readFile('other.txt', 'utf-8', (error, data)=> {
    console.log('data in read: ', data)
    console.log('error in read: ', error)
    fs.writeFile('other.txt', data + '\n new text test', (error, data)=> {
        console.log('data in write: ', data)
        console.log('error in write: ', error)
    })
    
})
console.log('READ: ', read)

// fs.writeFile('other.txt', read + '\n Hello world!!!')

