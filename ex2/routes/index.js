var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  axios.post("http://clav-api.di.uminho.pt/v2/users/login",  { username: 'daw2020@teste.uminho.pt', password: '232' })
    .then(dados => {
        res.cookie('token', dados.data.token, {
          expires: new Date(Date.now() + '1d'),
          secure: false, // set to true if your using https
          httpOnly: true
        });
        res.render('pagInicial')
    })
    .catch(e => res.render('error', {error: e}))
});

router.get('/classes', function(req, res, next) {
  var t = req.cookies.token
  console.log(JSON.stringify(req.cookies))
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + t)
    .then(dados => res.render('classes', {classes: dados.data}))
    .catch(e => res.render('error', {error: e}))
});

router.get('/classe/:id', function(req, res, next) {
  var t = req.cookies.token
  var classe = req.params.id
  console.log(classe)
  axios.get('http://clav-api.di.uminho.pt/v2/classes/'+ classe + '?token='+ t)
    .then(c => {
      console.log(c.data)
      axios.get('http://clav-api.di.uminho.pt/v2/classes/'+ classe + '/descendencia?token=' + t)
            .then(d => { 
              console.log(d.data)
              res.render('classe', {classe: c.data, desc: d.data})
            })
            .catch(e => res.render('error', {error: e}))
    })
    .catch(e => res.render('error', {error: e}))
});

router.get('/termosIndice', function(req, res, next) {
  var t = req.cookies.token
  console.log(JSON.stringify(req.cookies))
  axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + t)
    .then(dados => res.render('termosIndice', {termos: dados.data}))
    .catch(e => res.render('error', {error: e}))
});

module.exports = router;
