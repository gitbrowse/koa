import Router from 'koa-router';

const router = new Router({
    prefix: '/interface'
});

router.get('/detail', async function (ctx) {

    ctx.body = 'ok';
});

export default router;
