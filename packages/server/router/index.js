const Router = require('koa-router');
const router = new Router();
const path = require('path');
const fs = require('fs');
const { homePath, configFile } = require('../constant')
const { markConfigChange } = require('../util/configurator')

function getConfig() {
    return JSON.parse(fs.readFileSync(path.resolve(homePath, configFile), 'utf8'))
}
router
    // todo 把匹配器移动到路由
    // .get('*', (ctx, next) => {
    // })
    .get('/config', (ctx, next) => {
        ctx.body = getConfig();
    })
    // todo 备份配置 
    .get('/backup', (ctx, next) => {
        res.download(path.resolve(__dirname, '../ssl/beisen.com.root.crt'))
    })
    // 保留手动下载部分
    .get('/download', (ctx, next) => {
        res.download(path.resolve(__dirname, '../ssl/beisen.com.root.crt'))
    })

    .post('/activeTab', (ctx, next) => {
        const { body } = ctx.request;
        const config = getConfig()
        const newConfig = Object.assign({}, config, body)
        fs.writeFileSync(path.resolve(homePath, configFile), JSON.stringify(newConfig), null, 4)
        ctx.body = 'hola'
    })
    .post('/custom', (ctx, next) => {
        const { body } = ctx.request;
        const config = getConfig()
        config.custom = body
        fs.writeFileSync(path.resolve(homePath, configFile), JSON.stringify(config), null, 4)
        ctx.body = 'hola'
    })
    .post('/domain', (ctx, next) => {
        const { body } = ctx.request;
        const config = getConfig()
        config.domain = body
        fs.writeFileSync(path.resolve(homePath, configFile), JSON.stringify(config), null, 4)
        ctx.body = 'hola'
    })
    .post('/general', (ctx, next) => {
        const { body } = ctx.request;
        const config = getConfig()
        config.general = body
        fs.writeFileSync(path.resolve(homePath, configFile), JSON.stringify(config), null, 4)
        ctx.body = 'hola'
    })
    .post('/activeMenu', (ctx, next) => {
        const { body } = ctx.request;
        const config = getConfig()
        const newConfig = Object.assign({}, config, body)
        fs.writeFileSync(path.resolve(homePath, configFile), JSON.stringify(newConfig), null, 4)
        ctx.body = 'hola'
    })
    .post('/projects', (ctx, next) => {
        const { body: { key, project } } = ctx.request;
        const config = getConfig()
        config[key].projects = project
        fs.writeFileSync(path.resolve(homePath, configFile), JSON.stringify(config), null, 4)
        ctx.body = 'hola'
    })

module.exports = router;
