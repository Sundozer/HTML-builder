const path = require('path');
const fs = require('fs');
a = path.join(__dirname, 'text.txt');


const read = fs.createReadStream(a, 'utf-8');
read.on('data', chunk => console.log(chunk));
read.on('end', () => console.log('Goodbye!'));
read.on('error', error => console.log('Error', error.message));
