import socketIO from 'socket.io';

import http from 'http';

const createWss = (app) => {
    const server = http.createServer(app.callback());

    const io = socketIO.listen(server);

    io.on('connection', (socket) => {
        console.log('client connect server, ok!');

        socket.on('group', (req)=>{
            console.log(JSON.stringify(req));
            if(!req){
                return;
            }
            if(req.type === 'position'){
                socket.join(req.data);
            }
        });

        socket.on('message', (req) => {
            console.log(JSON.stringify(req));
            if(!req){
                return;
            }
            if(req.type === 'text'){
                socket.broadcast.emit(req.from, JSON.stringify(req.data));
            }
        });

    });
    console.log('wws start');

    return server;
};

export default createWss;