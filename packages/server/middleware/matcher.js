// 文件匹配中间件 用于处理静态文件请求
const fs = require("fs");
const httpProxy = require("http-proxy");
const send = require('koa-send')

const proxy = httpProxy.createProxyServer({});

const checker = require("../util/checker");
const proxyStatus = require('../util/proxy-status')

module.exports = () => (
    async (ctx, next) => {
        const { req, res } = ctx;
        const result  = checker(ctx);
        const { isRemoteFileRequest, responseTarget, changeOrigin, responsePath } = result;
        // 发送链接日志
        ctx.app.io.emit('update proxy status', proxyStatus(result));
        // 根据匹配器返回结果
        if (!isRemoteFileRequest) {
            if (fs.existsSync(responsePath)) {
                await send(ctx, responsePath);
            } else {
                ctx.body = `你指定的本地文件不存在`;
            }
        } else {
            // todo 优化代理方式
            ctx.respond = false
            // 替换规则清洗后的 url
            ctx.url = result.responsePath
            // 文件转发线上
            proxy.web(req, res, {
                target: responseTarget,
                changeOrigin: changeOrigin
            }, (err) => {
                if (err) ctx.body = `${err}`;
            });

        }
        await next()
    }
)
// todo 优化代理方式
// https://github.com/nodejitsu/node-http-proxy/issues/1156
// https://github.com/koajs/koa/issues/198