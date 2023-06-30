var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  console.log(req.query.content);
  //'Access-Control-Allow-Origin': 'https://application-a-application-1a-client.cloud-refresh-ephem-42lwq-59ac7c5b6a0c144b63d34c29d8ad6aa7-0000.us-south.containers.appdomain.cloud'});
  res.status(200).send('{"test":"this is a test"}');
});

module.exports = router;