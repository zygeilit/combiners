/*
* @Author: abnercrack
* @Date:   2018-08-27 10:21:29
* @Last Modified 2018-08-27Name>
* @Last Modified time: 2018-08-27 10:21:33
*/

// https://ss64.com/osx/security-cert.html

const sudo = require('sudo-prompt');

const options = {
    name: 'develop-server',
}
// 先不优化 
module.exports = {
    addCert: function() {
        const command = `security add-trusted-cert -d -k /Library/Keychains/System.keychain ${path}`
        sudo.exec(command, options,
            (error, stdout, stderr) => {
                if (error) throw error;
                console.log('stdout: ' + stdout);
            }
        );
    },
    removeCert: function() {
        const command  = `security remove-trusted-cert -d ${path}`;
        sudo.exec(command, options,
            (error, stdout, stderr) => {
                if (error) throw error;
                console.log('stdout: ' + stdout);
            }
        );
    }
}



