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

var data = {
  "iTotalDisplayRecords": 10,
  "iTotalRecords": 1015,
  "aaData": [
  {
    created: '2017-06-08 16:15:10.155130',
    updated: '2017-06-08 16:15:10.155130',
    id: 1,
    call_id: 512017,
    calling_party_number: '2837356835',
    dialed_party_number: 7547,
    end_time: '2017-05-01 04:48:20.000000',
    event_id: 5120170,
    event_type: 1,
    start_time: '2017-05-01 04:47:31.000000'
  },
  { created: '2017-06-08 16:15:10.156629',
  updated: '2017-06-08 16:15:10.156629',
  id: 2,
  call_id: 512017,
  calling_party_number: '2837356835',
  dialed_party_number: 7547,
  end_time: '2017-05-01 04:48:20.000000',
  event_id: 5120171,
  event_type: 21,
  start_time: '2017-05-01 04:48:20.000000' },
  { created: '2017-06-08 16:15:10.157128',
  updated: '2017-06-08 16:15:10.157128',
  id: 3,
  call_id: 512018,
  calling_party_number: '1472316379',
  dialed_party_number: 7548,
  end_time: '2017-05-01 05:01:55.058824',
  event_id: 5120172,
  event_type: 1,
  start_time: '2017-05-01 04:48:20.000000' },
  { created: '2017-06-08 16:15:10.157628',
  updated: '2017-06-08 16:15:10.157628',
  id: 4,
  call_id: 512018,
  calling_party_number: '1472316379',
  dialed_party_number: 7548,
  end_time: '2017-05-01 05:02:48.000000',
  event_id: 5120173,
  event_type: 4,
  start_time: '2017-05-01 05:01:55.058824' },
  { created: '2017-06-08 16:15:10.158128',
  updated: '2017-06-08 16:15:10.158128',
  id: 5,
  call_id: 512018,
  calling_party_number: '1472316379',
  dialed_party_number: 7548,
  end_time: '2017-05-01 05:02:48.000000',
  event_id: 5120174,
  event_type: 21,
  start_time: '2017-05-01 05:02:48.000000' },
  { created: '2017-06-08 16:15:10.159131',
  updated: '2017-06-08 16:15:10.159131',
  id: 6,
  call_id: 512019,
  calling_party_number: '9586251441',
  dialed_party_number: 7547,
  end_time: '2017-05-01 05:12:37.000000',
  event_id: 5120175,
  event_type: 1,
  start_time: '2017-05-01 05:02:48.000000' },
  { created: '2017-06-08 16:15:10.160128',
  updated: '2017-06-08 16:15:10.160128',
  id: 7,
  call_id: 512019,
  calling_party_number: '9586251441',
  dialed_party_number: 7547,
  end_time: '2017-05-01 05:13:37.000000',
  event_id: 5120176,
  event_type: 4,
  start_time: '2017-05-01 05:12:37.000000' },
  { created: '2017-06-08 16:15:10.160629',
  updated: '2017-06-08 16:15:10.160629',
  id: 8,
  call_id: 512019,
  calling_party_number: '9586251441',
  dialed_party_number: 7547,
  end_time: '2017-05-01 05:13:37.000000',
  event_id: 5120177,
  event_type: 21,
  start_time: '2017-05-01 05:13:37.000000' },
  { created: '2017-06-08 16:15:10.161629',
  updated: '2017-06-08 16:15:10.161629',
  id: 9,
  call_id: 512020,
  calling_party_number: '8611338441',
  dialed_party_number: 7548,
  end_time: '2017-05-01 05:21:57.631579',
  event_id: 5120178,
  event_type: 1,
  start_time: '2017-05-01 05:13:37.000000' },
  { created: '2017-06-08 16:15:10.162628',
  updated: '2017-06-08 16:15:10.162628',
  id: 10,
  call_id: 512020,
  calling_party_number: '8611338441',
  dialed_party_number: 7548,
  end_time: '2017-05-01 05:22:45.000000',
  event_id: 5120179,
  event_type: 4,
  start_time: '2017-05-01 05:21:57.631579' }]
}

app.get('/api', function (req, res) {
  console.log("Got response: " + res.statusCode);
  var url = "http://localhost:5000/df/1";
  console.log(url);

  request(url, function(err, resp, body) {
    var parsedBody = JSON.parse(body);
    parsedBody['aaData'] = JSON.parse(parsedBody['aaData']);
    console.log('error:', err);         // Print the error if one occurred
    console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received
    console.log('parsedBody:', parsedBody);   // Print the json
    res.json(parsedBody);   // This breaks with invalid JSON response
  });
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
