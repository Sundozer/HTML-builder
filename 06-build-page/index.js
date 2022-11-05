const fs = require('fs')
const path = require('path')
let textInFile;
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
        files.forEach(file => {
            console.log('try')
            read(file)
        })
        
        
    })
}

function read (data) {// достать из каждого файла информацию
    let p = path.join(__dirname, 'components', data);
    fs.readFile(p, 'utf8', function(err, inf){
        replace(data, inf)
    });
}

function replace(fileName, newInf) {//заменить в основном файле куски на новые
    let p = path.join(__dirname, 'project-dist', 'template.html');
    let name = path.parse(fileName).name;
    let replaced;

    
    fs.readFile(p, 'utf8', function(err, oldInf){     

        let toReplace = `{{${name}}}`;
        replaced = oldInf.replace(toReplace, `${newInf}`);
        fs.writeFile(p, replaced, 'utf-8', function (err) {
            console.log('res')
        });
        
    });
    
}
