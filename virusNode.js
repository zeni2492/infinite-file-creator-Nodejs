const fs = require ('fs');
const path = require ('path');

while(true){
 fs.writeFile(path.resolve(__dirname,rand(5))),'q w 1 2',(err)=>{
        if(err){
             throw err
         }
    }
}

    let name = '.txt';
function rand(lengthName){
    let key ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

    let jopa = '';

    for (let i = 0; i < lengthName;i ++){
        let randname = Math.floor(Math.random() * 62);
        jopa += key[randname] 
        
    }
    return jopa + name
}

 
console.log(rand(5))