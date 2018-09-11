import Koa from 'koa';
import router from './router';

// const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.body = 'ok';
};

app.use(router.routes());
app.listen(3000);