const path = require('path');
const fs = require('fs');
const pathToFile = path.join(__dirname, 'secret-folder')

fs.readdir(pathToFile, { withFileTypes: true }, (err, files) => {
    if (err)
      throw err;
    else {
        files.forEach(file => {
            if (file.isDirectory() !== true) {
                let p = path.join(__dirname, 'secret-folder', file.name);
                console.log(path.parse(file.name).name, '-', path.extname(file.name).slice(1), '-', fs.statSync(p).size/*statt(file.name)*/)
            }
            
        })
    }
})
// function statt (data) {
//     let p = path.join(__dirname, 'secret-folder', data);
//     let siz;
//     fs.stat(p, (error, stats) => {
//         siz = stats.size;
//         return siz;
//     });
    
// }


