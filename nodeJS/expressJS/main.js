const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('This is home page')
})

app.get('/user/:username/:id', (req, res) => {
    res.send('User ID:' + req.params.id+'. Username: '+req.params.username)
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.listen(3000, () => {
    console.log("Server is started: http://localhost:3000");
})