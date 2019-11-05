const path = require('path');
const fs = require('fs');
const filePath = path.join('info.txt');
const message = 'Timedamp: '+new Date()+'\nАбсолютный путь к файлу: '+ path.dirname(__filename);

fs.writeFile(filePath, message,(err)=>{
    if (err){
        throw err
    }
    console.log('Файл создан');
})