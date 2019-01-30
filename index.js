var date = new Date();
var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
//Math.floor((Math.random() * maxData) + minData);
var value = Math.floor((Math.random() * 50) + 25).toString();

const http = require('http');

const jsonObject = JSON.stringify({
  'equipo': '5c4f2aeb6aa0bb0620c11943',
  'sensor': '5c51267c7712621e7c1abaaf',
  'value': value,
  'time': time
});

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/api/equipment/sensorBroadcasting',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

var req = http.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  
  res.on('data', function(d) {
      console.info('POST result:\n');
      process.stdout.write(d);
      console.info('\n\nPOST completed');
  });
});

// write the json data
req.write(jsonObject);
req.end();
req.on('error', function(e) {
    console.error(e);
});