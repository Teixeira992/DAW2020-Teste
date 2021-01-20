const fs = require('fs')

fs.readFile('./batismos.json', 'utf8', (err, jsonString) => {
    if (err) {
        return err
    }

    var tmp1 = jsonString.replace(/\sref:\s/g,"\t\"ref\":")
    
    var tmp2 = tmp1.replace(/\sdate:\s/g,"\t\"date\":")
    
    var tmp3 = tmp2.replace(/\shref:\s/g,"\t\"href\":")
    
    var tmp4 = tmp3.replace(/\stitle:\s/g,"\t\"title\":");

    fs.writeFile('./batismos-first.json', tmp4, err => {
    })
})