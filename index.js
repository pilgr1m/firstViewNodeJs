const express = require('express')

const app = express()

app.set('view engine', 'ejs')


app.get('/', (request, response) => {
	// response.sendFile(__dirname + '/index.html')
	response.render('index', {test: 'test text'})
})

app.get('/user/:username', (request, response) => {
	// response.sendFile(__dirname + '/index.html')
	response.render('user', {
		username: request.params.username, 
		hobbies: ['sport','music','games']
	})
})


app.get('/about', (request, response) => {
	response.send(' about page')
})

app.get('/user/:username/:id', (request, response) => {
	response.send(`Name:${request.params.username}, id:${request.params.id}`)
})

const PORT = 3000

app.listen(PORT, () => {
	console.log(`Server started on port: http://localhost:${PORT}`)
})