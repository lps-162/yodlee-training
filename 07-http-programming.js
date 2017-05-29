const http = require('http');

const server = http.createServer(function(req, res) {
    console.log('My server logs');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('A simple hello world string');
});

server.listen(3000, function() {
    //console.log('Definetely the error is here : ' + err);
    console.log('Server is listening on port no : 3000');
});
