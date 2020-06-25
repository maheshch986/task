var http = require('http');
var express = require('express');
var router = express();
var path = require('path');
// const connectHistoryApiFallback = require('connect-history-api-fallback');

var server = http.createServer(router);
router.use(express.static(__dirname + '/build'));
// router.use(connectHistoryApiFallback());
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
process.env.NODE_PATH = __dirname;
var server_port = 3000;
var server_ip_address = '0.0.0.0';
server.listen(server_port, server_ip_address, function() {
  var addr = server.address();
  console.info('APP server listening at', addr.address + ':' + addr.port);
});
