import http from 'http';

http.createServer(function (request, response) {
    console.log('received request');
    response.write('123');
    response.end();
}).listen(8888);
console.log('server start');