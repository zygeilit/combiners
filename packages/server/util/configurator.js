const path = require('path');
const fs = require('fs');
const { homePath, configFile } = require('../constant');
const configPath = path.resolve(homePath, configFile);
function loadConfigData(path) {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}
const data = {
    config: loadConfigData(configPath),
    changed: false
}
module.exports = {
    markConfigChange: function () {
        data.changed = true;
    },
    getConfig: function () {
        if (data.changed) {
            data.config = loadConfigData(configPath);
        }
        return data.config
    }
}