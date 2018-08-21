import http from 'http';
import url from 'url';
import {route} from './router';

const server = () => {
    http.createServer(function (request, response) {
        console.log('received request');

        const pathName = url.parse(request.url).pathname;

        route(pathName,request,response);


    }).listen(8889);
    console.log('server start');
}

export {
    server
};

