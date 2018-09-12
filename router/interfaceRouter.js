import Router from 'koa-router';
import { uploadFile } from "../controller/interfaceController";

const interfaceRouter = new Router({
    prefix: '/interface'
});

interfaceRouter.post('/upload', async function (ctx) {

    const data = ctx.request.body;
    const file = ctx.request.files.file;

    const rst = await uploadFile(data, file);

    ctx.body = rst;
});

export default interfaceRouter;