var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.query.content);
  res.render('message', { title: 'Express' });
});

module.exports = router;