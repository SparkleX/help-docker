const Koa = require('koa');
const KoaRouter = require('koa-router');
const axios = require('axios');
const app = new Koa();


var oRouter = KoaRouter();

oRouter.get('/', async ctx => {
  ctx.body = process.env;
});

oRouter.get('/svc2', async ctx => {
  const data = await axios.get('http://svc2:3000');
  ctx.body = data.data;
});

app.use(oRouter.routes());

app.listen(3000);