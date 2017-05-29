
// directly piping a file's contents to the response
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Request was made : ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/files/readStream.txt');
    myReadStream.pipe(res);
});

server.listen(3000, function() {
    console.log('Server is listening on port 3000');
});