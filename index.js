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
  var date = new Date();
  var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  //Math.floor((Math.random() * maxData - minData + 1) + minData);
  var value1 = Math.floor((Math.random() * 25) + 25).toString();
  var value2 = Math.floor((Math.random() * 100) + 25).toString();

  const jsonObject = JSON.stringify({
    data: [
      {
        'equipo': '5c4f2aeb6aa0bb0620c11943',
        'sensor': '5c51267c7712621e7c1abaaf',
        'value': value1,
        'time': time
      },
      {
        'equipo': '5c4f2aeb6aa0bb0620c11943',
        'sensor': '5c51268d7712621e7c1abab0',
        'value': value2,
        'time': time
      }      
    ]
  });

  var req = http.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    
    res.on('data', function(d) {
      console.info('POST result:\n');
      process.stdout.write(d);
      console.info('\n\nPOST completed');
    });
  });

  req.write(jsonObject, 'utf8', (err) => {
    if (err) console.error(e);
    req.end();
  });
}

setInterval(envios, 3000);
