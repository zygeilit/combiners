#!/usr/bin/env node
require('module-alias/register')
const fs = require('fs');
const path = require('path');
const sudo = require('sudo-prompt');
const certManager = require('./packages/cert/cert-manager')
const initData = require('@server/config/data.js');
const { homePath, configFile } = require('@server/constant');
const configPath = path.join(homePath, configFile);
const rootCert = path.join(__dirname, './packages/cert/shell/out/root.crt')

// 证书导入 可选
if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(initData, null, 4), 'utf8')
    try {
        certManager.addCert(rootCert)
    } catch (error) {
        console.log('进根证书自动导入失败,请手动下载导入')
    }
}
const options = {
    name: 'develop server'
}

sudo.exec(`node ${__dirname}/packages/server/index.js`, options, function (error, stdout, stderr) {
    if (error) {
        console.log('服务启动失败,请确认80端口未占用,请确认nginx已经关闭。')
        return
    };
})