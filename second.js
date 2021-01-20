const fs = require('fs')


fs.readFile('./batismos-first.json', 'utf8', (err, jsonString) => {
    if (err) {
        return err
    }

    var tmp = JSON.parse(jsonString);
    tmp.forEach(i => {
        i._id = i.ref.split("/").join("_");
        var tmp = i.title.split("Pai: ")[1]
        var pai = tmp.split(";")[0]
        var mae = i.title.split("Mãe: ")[1]
        i.pai = pai
        i.mae = mae
    })
    var dataset = JSON.stringify(tmp, null, 2);
    fs.writeFile('./batismos-fixed.json', dataset, err => {
    })

})
