var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.query.content);
    let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
      headers.append('Access-Control-Allow-Credentials', 'true');

      headers.append('GET', 'POST', 'OPTIONS');

//                                        res.writeHead(200, {
//                                          'Content-Length': body.length,
//                                          'Content-Type': 'text/plain',
//                                           'Access-Control-Allow-Origin': 'https://application-a-application-1a-client.cloud-refresh-ephem-42lwq-59ac7c5b6a0c144b63d34c29d8ad6aa7-0000.us-south.containers.appdomain.cloud'});

  res.set('Access-Control-Allow-Origin', '*');
  res.send('message', { title: 'Express' });
});

module.exports = router;