const path = require('path');
const fs = require('fs');
const read = fs.createReadStream('text.txt', 'utf-8');
read.on('data', chunk => console.log(chunk));
read.on('end', () => console.log('End'));
read.on('error', error => console.log('Error', error.message));
