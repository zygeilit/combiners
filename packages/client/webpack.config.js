const path = require('path');
const exampleDir = './examples'
module.exports = require('@talentui/webpack-config')({
    mode: 'production',
    entry: `${exampleDir}/index.js`,
    // hostPage: path.resolve(__dirname, `${exampleDir}/index.html`)
})