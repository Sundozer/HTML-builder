const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;
const pathToFile = path.join(__dirname, 'file-to-write.txt')
stdout.write('Введите текст для записи в файл.\n')
let input = ''
function writeTo (data) {
    const myBuffer = Buffer.from(data, 'utf-8');
    if (myBuffer.toString().trim() === 'exit') {
        process.exit()
    }
    fs.writeFile(pathToFile, input+=data, (err) => {
        if (err) {
            throw err
        }
    })
}




stdin.on('data', data => writeTo(data));
