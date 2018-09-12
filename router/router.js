import Router from 'koa-router';
import interfaceRouter from './interfaceRouter';

const router = new Router();

router.use('/api', interfaceRouter.routes());

export default router;
