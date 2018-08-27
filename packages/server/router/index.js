const Router = require('koa-router');
const router = new Router();

router
    // .use('*', matcher())
    // .get('*', matcher())
    .get('/config', (ctx, next) => {
        // console.log(2222220)
    })
    .post('/tabs', (ctx, next) => {
    })
    .post('/custom', (ctx, next) => {
    })
    .post('/domain', (ctx, next) => {
    })
    .post('/general', (ctx, next) => {
    })
    .post('/whiteList', (ctx, next) => {
    })
    .post('/activeTab', (ctx, next) => {
    })
    .post('/activeMenu', (ctx, next) => {
    })

module.exports = router;
