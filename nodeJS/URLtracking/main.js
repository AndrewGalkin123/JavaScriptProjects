const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    if(req.url == '/')
        fs.createReadStream('./index.html').pipe(res)
    else if(req.url == '/about')    
        fs.createReadStream('./about.html').pipe(res)
    else
        fs.createReadStream('./error.html').pipe(res)
})

const PORT = 3000
const HOST  = 'localhost'

server.listen(PORT, HOST, () => {
    console.log('Server is working: http://'+ HOST + ':' + PORT);
})

