const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/user/:username', (req, res) => {
    let data = { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball' ] }
    res.render('user', data)
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log("Server is started: http://localhost:3000");
})