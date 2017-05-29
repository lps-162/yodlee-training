const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/files/index.html');
    myReadStream.pipe(res);
    
});

server.listen(3000, function() {
    //console.log('Definetely the error is here : ' + err);
    console.log('Server is listening on port no : 3000');
});