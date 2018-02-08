var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  var headers = http.headers;
  var statusCode = 404;
  

  if (req.method === 'GET') {
    var content = path.join(__dirname, '/public/index.html');
    fs.readFile(content, (err, data) => {
      if (err) throw err;
      console.log(data);
      statusCode = 200;
      res.writeHead(statusCode, 'Roger, Roger', headers); 
      res.end(data);     
    });
    
    
    
  }

  //res.end(archive.paths.list);
  //res.end();
};
