import formidable from 'formidable';
import fs from 'fs';


function index(request, response) {
    const body = '<html>' +
        '<head>' +
        '<meta http-equiv="content-type" content="text/html"/>' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post" enctype="multipart/form-data">' +
        '<input type="file" name="file" multiple="multiple"/>' +
        '<button type="submit">submit</button>' +
        '</form>' +
        '</body>' +
        '</html>';
    
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(body);
    response.end();
}

function upload(request, response) {

    var form = new formidable.IncomingForm();
    try{
        form.parse(request, function(err, fields, files) {
            fs.renameSync(files.file.path,`./assert/${files.file.name}`);
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write('upload successed');
            response.end();
        });
    }catch (e) {
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('upload failed');
        response.end();
    }
}

function show(request,response) {
    fs.readFile('./assert/favicon.png',function (err, data) {
        if(err){
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write('show error');
            response.end();
            return;
        }
        response.writeHead(200,{'Content-Type':'image/png'});
        response.write(data);
        response.end();
    });
}

export {
    index,
    upload,
    show,
};