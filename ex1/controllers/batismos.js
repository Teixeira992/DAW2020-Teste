var Batismo = require('../models/batismo')

module.exports.listar = () => {
    return Batismo
    .find({},{date: 1, title:1, ref:1, _id: 1})
    .exec()
}


module.exports.listarId = (id) => {
    return Batismo
    .findOne({_id: id})
    .exec()
}

module.exports.listarAno = (year) => {
    return Batismo
    .find({ date : {$regex :  year } })
    .exec()
}

module.exports.listarTitulo = () => {
    return Batismo
    .find({},{_id: 0, title:1})
    .exec()
}

module.exports.listarProgenitores = () => {
    return Batismo
    .find({},{_id: 1, pai:1, mae:1})
    .exec()
}


module.exports.listaPorAno = () => {
    return Batismo
    .aggregate([{$group: {_id: {date:"$date", count: {$sum:1}} }}])
    .exec()
}