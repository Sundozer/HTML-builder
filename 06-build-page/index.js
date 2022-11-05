const fs = require('fs')
const path = require('path');
fs.mkdir(path.join(__dirname, 'project-dist'), (err) => {//Создать нужную папку
    // if (err) {
    //     throw err;
    // }
    let indexFile = path.join(__dirname, 'template.html')
    let newFolder = path.join(__dirname, 'project-dist', 'template.html')
    fs.copyFile(indexFile, newFolder, (err) => {//скопировать html в нужную папку
        // if (err) {
        // throw err;
        // }
        collectFiles()
    });

})

function collectFiles() {// посмотреть файлы, из которых собирается
    let p = path.join(__dirname, 'components')
    fs.readdir(p, (err, files) => {
        let i = 0;
        (function read () {
            if (i >= files.length) {
                return;
            }
            const queue = new Promise(function(resolve, reject){
                    let newFile = path.basename(files[i])
                    let p = path.join(__dirname, 'components', newFile);
                    fs.readFile(p, 'utf8', function(err, newInf){
                        let p = path.join(__dirname, 'project-dist', 'template.html');
                        let name = path.parse(files[i]).name;
                        fs.readFile(p, 'utf8', function(err, oldInf){     
                    
                            let toReplace = `{{${name}}}`;
                            let replaced = oldInf.replace(toReplace, `${newInf}`);
                            fs.writeFile(p, replaced, 'utf-8', function (err) {
                                resolve()
                            });
                            
                        });

                    });
            }).then(()=>{
                i++
                read(files[i])
            })
        })(files[0]);
    })
}

fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
    files.forEach(file => {
        if (path.extname(file) === '.css') {
            styles(file)
        }
    })
})
function styles (data) {
    let p = path.join(__dirname, 'styles', data)
    fs.readFile(p, 'utf8', function(err, inf){
        let bundle = path.join(__dirname, 'project-dist', 'style.css')
        fs.appendFile(bundle, inf, (err) => {
            if (err) {
              console.log(err);
            }
            
        });
    });

}



fs.mkdir(path.join(__dirname, 'project-dist', 'assets'), (err) => {
    // if (err) {
    //     throw err;
    // }
    let p = path.join(__dirname, 'assets')
    



    fs.readdir(p,{ withFileTypes: true }, (err, files) => {
        files.forEach(file => {
            if (file.isDirectory() === true) {
                newPath = path.join(p, file.name);
                let lol = path.basename(newPath);
                fs.readdir(newPath, (err, files) => {
                    files.forEach(file => {
                        copy(lol, file)
                    })
                })
            }
        })
    })
})






function copy (folder, data) {
    let newFolder = path.join(__dirname, 'project-dist', 'assets', folder)
    fs.mkdir(newFolder, (err) => {
        // if (err) {
        //     throw err;
        // }
    })
    let oldfolder = path.join(__dirname, 'assets', folder, data)
    let newF = path.join(newFolder, data)
    fs.copyFile(oldfolder, newF, (err) => {
        // if (err) {
        // throw err;
        // }
        
    });
}