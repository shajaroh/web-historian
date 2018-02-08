var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('./http-helpers.js');
var fs = require('fs');
// var sites = require('../archives/sites/sites.txt');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // console.log('Serving request type ' + req.method + ' for url ' + req.url);
  archive.readListOfUrls(function(data) {
    console.log('hello', data);
  });

  var headers = http.headers;
  var statusCode = 404;
  

  // if (req.method === 'GET') {
  //   if (req.url === '/') {
  //     var content = path.join(__dirname, '/public/index.html');
  //     fs.readFile(content, (err, data) => {
  //       if (err) throw err;
  //       console.log(data);
  //       statusCode = 200;
  //       res.writeHead(statusCode, 'Roger, Roger', headers); 
  //       res.end(data);     
  //     });
  //   } else {
  //     //figure out if URL is in list and/or is archived
  //     //if it doesn't exist, add to URl list
      
  //     if() {
  //     //if it does exist, read file of that url and res.end(data)
  //       var content = path.join(__dirname, '../archives/sites');
  //       content = content + req.url;
  //       fs.readFile(content, (err, data) => {
  //         if (err) throw err;
  //         console.log(data);
  //         statusCode = 200;
  //         res.writeHead(statusCode, 'Roger, Roger', headers); 
  //         res.end(data);  
  //       }
  //   }
  // }

  //res.end(archive.paths.list);
  //res.end();
};
