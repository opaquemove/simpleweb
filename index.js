'use strict'
var   ipaddress = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
var   port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var http = require('http');
var server = http.createServer( ( req, res ) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain' );
  res.end( 'Hello MASATO.NAKANISHI 7.Aug.2018-2.' );
});

server.on( 'listening', () => {
  console.log('listening');
});

server.listen( port, ipaddress );
