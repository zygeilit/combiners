// 证书集 多域名support
const tls = require("tls");
const parseDomain = require("../util/parse-domain");
require('module-alias/register')
const certificates = require('@cert/cert-composer')();
const { _default } = certificates;
module.exports = {
    ..._default,
    SNICallback: function (servername, callback) {
        const tld = parseDomain(servername)
        const sslDomain = certificates[tld]
        if (sslDomain) {
            const ctx = tls.createSecureContext(Object.assign(sslDomain))
            // 兼容node低版本
            if (callback) {
                callback(null, ctx);
            } else {
                return ctx;
            }
        }
    }
}
