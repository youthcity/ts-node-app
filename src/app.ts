import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-body';

const app = new Koa();
const router = new Router();

app.use(koaBody());

app.use(async (ctx, next) => {
  // Log the request to the console
  console.log('Url:', ctx.url);
  console.log(ctx.request);
  // Pass the request to the next middleware function
  await next();
});

router.get('/*', async (ctx) => {
  ctx.body = 'Hello world!!!tiancity';
});

router.post('/*', async (ctx) => {
  ctx.body = {
    a: 1,
  };
});

app.use(router.routes());

export default app;