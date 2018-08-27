// 证书工厂  提供给cli使用
const fs = require('fs')
const path = require('path')
const json = path.join(__dirname, 'index.json')
module.exports = function factory() {
    // 默认保护 增加try catch
    let config = JSON.parse(fs.readFileSync(json, 'utf8'))
    Object.keys(config).map((domain, index) => {
        if (!index && !config._defaulut) { config._defaulut = config[domain]; }
        config[domain].key = fs.readFileSync(path.join(__dirname, config[domain].key), 'utf8')
        config[domain].cert = fs.readFileSync(path.join(__dirname, config[domain].cert), 'utf8')
        return config
    })
    return config
}
