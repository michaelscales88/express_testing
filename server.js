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

// var data = [
//     [
//         "Tiger Nixon",
//         "System Architect",
//         "Edinburgh",
//         "5421",
//         "2011/04/25",
//         "$3,120"
//     ],
//     [
//         "Garrett Winters",
//         "Director",
//         "Edinburgh",
//         "8422",
//         "2011/07/25",
//         "$5,300"
//     ]
// ]

app.get('/api', function (req, res) {
    console.log("Got response: " + res.statusCode);
    var url = "http://localhost:5000/df/1";
    console.log(url);
    var parsedBody;

    request(url, function(err, resp, body) {
        parsedBody = JSON.parse(JSON.parse(body));
        console.log('error:', err); // Print the error if one occurred
        console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received
        console.log('body:', parsedBody); // Print the json
        console.log(parsedBody[0]['event_id']);
    });
    res.json(parsedBody);
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
