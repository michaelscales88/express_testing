var express = require('express')
var request = require('request')
// var bodyParser = require('body-parser')
// var alert = require('alerts')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', function (req, res) {
  console.log("Got response: " + res.statusCode);
  console.log(req.query['sEcho']);
  console.log(req.query['iDisplayLength']);
  var url = "http://localhost:5000/df/" + req.query['sEcho'] + "/" + req.query['iDisplayLength'];
  console.log(url);

  request(url, function(err, resp, body) {
    var parsedBody = JSON.parse(body);
    parsedBody['aaData'] = JSON.parse(parsedBody['aaData']);
    // console.log('error:', err);         // Print the error if one occurred
    // console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received
    // console.log('parsedBody:', parsedBody);   // Print the json
    res.json(parsedBody);   // This breaks with invalid JSON response
  });
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
