const path = require('path')
const koa = require('./util/index')
const favicon = require('koa-favicon');
const bodyParser = require('koa-bodyparser');
const matcher = require('./middleware/matcher')
const serve = require('koa-static');
const router = require('./router');
// const logger = require('koa-logger');
const proxyStatus = require('./util/proxy-status')

const app = new koa();
const { io } = app;

app
    .use(serve(path.join('@client/client/examples')))
    .use(favicon(path.resolve('@server/static/favicon.ico')))
    .use(bodyParser())
    .use(matcher())
    .use(router.routes())
    .use(router.allowedMethods())
//   自定义日志
//   .use(logger((str, args) => {
//       console.log(str,args)
//     // redirect koa logger to other output pipe
//     // default is process.stdout(by console.log function)
//   }))

// sockets 链接状态 / 项目启动检测 / 证书添加删除 之类
io.on("connect", function (socket) {
    socket.emit("update proxy status",proxyStatus({status: "建立链接",type: "connect"}));
});

io.on("connect", function (socket) {
    socket.emit("update proxy status",proxyStatus({status: "断开链接",type: "disconnect"}));
});

io.on("connect", function (socket) {
    socket.emit("update proxy status",proxyStatus({status: "重新建立链接",type: "disconnect"}));
});


app.listens(443)
app.listen(80)
