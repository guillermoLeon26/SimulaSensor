const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/api/equipment/sensorBroadcasting',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

const envios = () => {
  var req = http.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    
    res.on('data', function(d) {
      console.info('POST result:\n');
      process.stdout.write(d);
      console.info('\n\nPOST completed');
    });
  });

  var date = new Date();
  var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  //Math.floor((Math.random() * maxData - minData + 1) + minData);
  var value = Math.floor((Math.random() * 25) + 25).toString();

  const jsonObject = JSON.stringify({
    'equipo': '5c4f2aeb6aa0bb0620c11943',
    'sensor': '5c51267c7712621e7c1abaaf',
    'value': value,
    'time': time
  });

  req.write(jsonObject, 'utf8', (err) => {
    if (err) console.error(e);
    req.end();
  });
}

setInterval(envios, 3000);
