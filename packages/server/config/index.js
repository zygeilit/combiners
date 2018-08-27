// 证书集 多域名support
const fs = require('fs')
const path = require('path')
const tls = require("tls");
require('module-alias/register')
const certificates = require('@cert/cert-composer')();
const { _default } = certificates;
module.exports = {
    ..._default,
    SNICallback: function (servername, callback) {
        // todo 增加域名 通配符匹配 *.beisen.com
        if (certificates[servername]) {
            const ctx = tls.createSecureContext(Object.assign(certificates[servername]))
            // 兼容node低版本
            if (callback) {
                callback(null, ctx);
            } else {
                return ctx;
            }
        }
    }
}
