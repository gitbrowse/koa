import Koa from 'koa';
import koaBody from 'koa-body';
import bodyParser from 'koa-bodyparser';
// const cookieParase = require('cookie-parser');
import router from './router/router';
import createWss from "./websocket/websocket";

const app = new Koa();
app
    // 跨域设置，不要用koa2-cors
    .use(async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', ctx.header.origin);
        ctx.set('Access-Control-Allow-Credentials', true);
        ctx.set('Content-Type', 'application/json;charset=utf-8');
        ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
        ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');
        await next();
    })
    .use(koaBody({ multipart: true }))
    .use(bodyParser())
    // .use(cookieParase())
    .use(router.routes());
app.listen(3000);

createWss();