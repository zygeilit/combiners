const Router = require('koa-router');
const router = new Router();
const path = require('path');
const fs = require('fs');
const { homePath, configFile } = require('../constant')
const { markConfigChange } = require('../util/configurator')
router
    // todo 把匹配器移动到路由
    // .get('*', (ctx, next) => {
    // })
    .get('/get', (ctx, next) => {
        ctx.body = JSON.parse(fs.readFileSync(path.resolve(homePath, configFile), 'utf8'));
    })
    // todo 备份配置 
    .get('/backup', (ctx, next) => {
        res.download(path.resolve(__dirname, '../ssl/beisen.com.root.crt'))
    })
    // 保留手动下载部分
    .get('/download', (ctx, next) => {
        res.download(path.resolve(__dirname, '../ssl/beisen.com.root.crt'))
    })
    .post('/save', (ctx, next) => {
        debugger
        let { body } = req;
        fs.writeFile(path.resolve(homePath, configFile), JSON.stringify(body, null, 4), err => {
            if (err) {
                res.json({ status: '500' })
            } else {
                markConfigChange();
                res.json({ status: '200' })
            }
        })
    })

module.exports = router;
