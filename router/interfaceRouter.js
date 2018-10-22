import Router from 'koa-router';
import { uploadFile } from "../controller/interfaceController";

const interfaceRouter = new Router({
    prefix: '/interface'
});

interfaceRouter.post('/upload', async function (ctx) {

    const data = ctx.request.body;
    const file = ctx.request.files.file;
    // const cookie = ctx.cookie;
    const rst = await uploadFile(data, file);

    ctx.body = rst;
});
interfaceRouter.get('/test', async function (ctx) {
    console.log(ctx.request.query);
    console.log(ctx.request.body);
    const rst = {code:200,data:null};

    ctx.body = rst;
});
interfaceRouter.post('/test', async function (ctx) {
    console.log(ctx.request.query);
    console.log(ctx.request.body);
    const rst = {code:200,data:null};

    ctx.body = rst;
});

export default interfaceRouter;