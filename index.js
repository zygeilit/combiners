#!/usr/bin/env node
require('module-alias/register')
const fs = require('fs');
const path = require('path');
const sudo = require('sudo-prompt');

// ssl certificate regular
const initData = require('@server/config/data.js');
const { homePath, configFile } = require('@server/constant');
const configPath = path.join(homePath, configFile);

if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(initData, null, 4), 'utf8')
}

const options = {
    name: 'develop server'
}

sudo.exec(`node ${__dirname}/packages/server/index.js`, options, function (error, stdout, stderr) {
    if (error) throw error;
    console.log('no error')
    console.log(stdout)
})