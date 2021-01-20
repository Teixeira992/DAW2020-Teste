var express = require('express');
var router = express.Router();

var Batismo = require('../controllers/batismos')

router.get('/batismos/progenitores', function(req, res, next) {
  Batismo.listarProgenitores()
  .then(data => res.status(200).jsonp(data))
  .catch(err => res.status(500).jsonp(err))
});

router.get('/batismos/batisado', function(req, res, next) {
  Batismo.listarTitulo()
  .then(data => {
    var bats = []
    data.forEach(i => {
      var s = i.title.split(": ")[1]
      var bat = s.split(".")[0]
      if(!bats.includes(bat))
        bats.push(bat)
    });
    res.status(200).jsonp(bats)
  })
  .catch(err => res.status(500).jsonp(err))
});

router.get('/batismos/stats', function(req, res, next) {
  Batismo.listaPorAno()
  .then(data => res.status(200).jsonp(data))
  .catch(err => res.status(500).jsonp(err))
});

router.get('/batismos/:id', function(req, res, next) {
  Batismo.listarId(req.params.id)
  .then(data => res.status(200).jsonp(data))
  .catch(err => res.status(500).jsonp(err))
});

router.get('/batismos', function(req, res, next) {
  if(req.query.ano != null)
    Batismo.listarAno(req.query.ano)
    .then(data => res.status(200).jsonp(data))
    .catch(err => res.status(500).jsonp(err))
  else
    Batismo.listar()
    .then(data => res.status(200).jsonp(data))
    .catch(err => res.status(500).jsonp(err))
  });



module.exports = router;