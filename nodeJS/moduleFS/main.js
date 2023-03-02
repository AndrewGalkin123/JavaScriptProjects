const fs = require('fs')

fs.readFile('some.txt', 'utf-8', (err, data) =>{
    fs.writeFile('some.txt' , data + '\nSome text', (err, data)=>{
        console.log('Все сработало!')
    });
});

// fs.mkdirSync('text-files')

// fs.mkdir('text-files', () => {
//     fs.writeFile('./text-files/something.txt', 'Hello', () => { })
// })

fs.unlink('./text-files/something.txt' , () => {
    fs.rmdir('./text-files', () => { })
})
