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

// write root ca
if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(initData, null, 4), 'utf8')
    try {
        certManager.addCert(rootCert)
    } catch (error) {
        console.log('only support osx platform', error)
    }
}
const options = {
    name: 'develop server'
}

sudo.exec(`node ${__dirname}/packages/server/index.js`, options, function (error, stdout, stderr) {
    if (error) throw error;
    console.log('no error')
})