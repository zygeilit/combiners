const path = require('path')
const koa = require('./util/index')
const favicon = require('koa-favicon');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const router = require('./router');
const matcher = require('@server/middleware/matcher')
const mount = require('koa-mount');
const cors = require('@koa/cors');
const public = '0.0.0.0'


// const logger = require('koa-logger');
const proxyStatus = require('./util/proxy-status')

const app = new koa();
const { io } = app;

app
    .use(cors())
    .use(favicon(path.resolve(__dirname,'./static/favicon.ico')))
    .use(mount('/', serve(path.resolve(__dirname,'../client/dist/'))))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(matcher())
    // .use(logger())

    // ci

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

// io.on("connect", function (socket) {
//     socket.emit("update proxy status",proxyStatus({status: "断开链接",type: "disconnect"}));
// });

// io.on("connect", function (socket) {
//     socket.emit("update proxy status",proxyStatus({status: "重新建立链接",type: "disconnect"}));
// });

// 除了域名之外的 全部host到原来的地址
// .replace('.bundle', '');
app.listens(443,public)
app.listen(80,public)


