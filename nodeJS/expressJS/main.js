const express = require('express')


const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/user/:username', (req, res) => {
    let data = { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball' ] }
    res.render('user', data)
})

app.post('/check-user', (req, res) => {
    let username = req.body.username;
    if(username == "")
        return res.redirect('/')
    else    
        return res.redirect('/user/' + username)
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log("Server is started: http://localhost:3000");
})