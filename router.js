import {index,upload,show} from './controller';

const routes = {
    '/index':index,
    '/upload':upload,
    '/show':show,
};

function route(pathName,request,response) {
    console.log(pathName);

    if(typeof routes[pathName] === 'function'){
        routes[pathName](request,response);
    }else{
        response.write('404 not found');
        response.end();
    }
}

export {route};