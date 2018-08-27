// 组合证书到 https-server

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
module.exports = function CertGenerater(domain) {
    const command = `security add-trusted-cert -d -k /Library/Keychains/System.keychain ${path}`
    sudo.exec(command, options,
        (error, stdout, stderr) => {
            if (error) throw error;
            console.log('stdout: ' + stdout);
        }
    );
}


