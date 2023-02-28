const fs = require('fs');

fs.readFile('some.txt', 'utf-8', (err, data) =>{
    fs.writeFile('some.txt' , data + '\nSome text', (err, data)=>{
        console.log('Все сработало!');
    });
});



