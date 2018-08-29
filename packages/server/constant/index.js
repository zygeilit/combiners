
const path = require('path')
module.exports = {
    configFile: '.dsconfig.json',
    homePath:
        process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
    talentuiReplacer: /{{\s*project\s*}}/,
    // todo 信息配置化
    proxyDecision: {
        whiteList: "匹配到白名单规则，转发到线上",
        custom: "自定义直连规则匹配成功, 返回用户设置的地址",
        talentui: "匹配talentui成功，将代理此请求",
        notMatched: "匹配失败，转发到线上",
        general: "匹配规则成功，将代理此请求",
        extension:"扩展项目匹配成功"
    },
    isRemoteFileRequest: true,
};
