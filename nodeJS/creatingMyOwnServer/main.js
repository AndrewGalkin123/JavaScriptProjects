const http = require('http')

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Node JS</title></head><body><h1>Hello Node!</h1></body></html>')
})

const PORT = 3000
const HOST  = 'localhost'

server.listen(PORT, HOST, () => {
    console.log('Server is working: http://'+ HOST + ':' + PORT);
})