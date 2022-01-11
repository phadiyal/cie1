http = require('http');
url = require('url');
querystring = require('querystring');
con = require('./connect.js');
port = 3000;
server = http.createServer(function (req, res) {

});
server.listen(port);
console.log("server running on port: " + port);