const fs = require('fs')
const path = require('path')
const koa = require('./util/index')
const favicon = require('koa-favicon');
const bodyParser = require('koa-bodyparser');
const createLog = require('./util/createLog')
const serve = require('koa-static');
const Router = require('koa-router');
const app = new koa();
const router = new Router();

// const proxy = require("./modules/proxy");
// const api = require("./modules/api");
// app.use("/api", api);
// app.use(proxy);

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  // .use(favicon(resolve('./public/favicon.ico')))
  .use(serve(path.join( '../client/examples')))
  .listen(80)
  .listens(443)

// .io.on("connection", function(socket) {
//   socket.join('logger');
//   socket.emit(
//       "log",
//       createLog({
//           decision: "建立链接",
//           type: "connect"
//       })
//   );
// });

// // x-response-time
// app.use(async function (ctx, next) {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });
// // logger
// app.use(async function (ctx, next) {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });
// router.post('*', (ctx, next) => {
//       ctx.response.body = '2222'
//     console.log(ctx.request.body,ctx.params)
// })
