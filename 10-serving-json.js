var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var person = {
        name: 'LP Venkat',
        job: 'Corporate Trainer',
        age: 33
    };

    // The first argument to res.end should be a string or buffer
    // if in case, its an object, stringify it and then send it 
    res.end(JSON.stringify(person));
});

server.listen(3000, function(err) {
    console.log('Server listening in port no 3000');
});