const path = require('path');
const fs = require('fs');
// fs.rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true })
const deleting = new Promise(function(resolve, reject){
    fs.rm(path.join(__dirname, 'files-copy'), { recursive:true }, (err) => {
        if(err){
            resolve();
        }
        resolve()
          
    })
}).then(() => {
    fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
        // if (err) {
        //     throw err;
        // }
        let p = path.join(__dirname, 'files')
        fs.readdir(p, (err, files) => {
            files.forEach(file => {
                let res = path.join(p, file)
                copy(p, res)
            })
        })
        
    })
    
    function copy (folder, data) {
        let newFolder = path.join(folder+'-copy\\'+path.basename(data))
        fs.copyFile(data, newFolder, (err) => {
            // if (err) {
            // throw err;
            // }
            
        });
    }
})




