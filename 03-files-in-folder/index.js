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
                // let result = `${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - ${statt(file.name)}`; /*fs.statSync(p).size*/
                // console.log(result)
                let result = `${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - `;
                statt(file.name, result)
            }
        })
    }
})
function statt (data, res) {
    let p = path.join(__dirname, 'secret-folder', data);
    let siz;
    fs.stat(p, (error, stats) => {
        siz = stats.size;
        console.log(res, siz)
    });
}



