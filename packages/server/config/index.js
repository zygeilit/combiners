// 证书集 多域名support
const tls = require("tls");
const parseDomain = require("parse-domain");
require('module-alias/register')
const certificates = require('@cert/cert-composer')();
const { _default } = certificates;
module.exports = {
    ..._default,
    SNICallback: function (servername, callback) {
        const {domain,tld} = parseDomain(servername)
        const fullTld = `${domain}.${tld}`
        const sslDomain = certificates[fullTld]
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
