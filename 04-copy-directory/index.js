const path = require('path');
const fs = require('fs');
fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
    if (err) {
        throw err
    }
})
