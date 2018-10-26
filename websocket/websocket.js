import socketIO from 'socket.io';

const createWss = () => {
    let io = socketIO.listen(8004);

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
};

export default createWss;