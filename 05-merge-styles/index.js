const path = require('path');
const fs = require('fs');
let pathToFile = path.join(__dirname, 'styles')
fs.readdir(pathToFile, (err, files) => {
    files.forEach(file => {
        if (path.extname(file) === '.css') {
            read(file)
        }
    })
})
function read (data) {
    let p = path.join(pathToFile, data)
    fs.readFile(p, 'utf8', function(err, inf){
        let bundle = path.join(__dirname, 'project-dist', 'bundle.css')
        fs.appendFile(bundle, inf, (err) => {
            if (err) {
              console.log(err);
            }
            
        });
    });

}



