/*
* @Author: abnercrack
* @Date:   2018-08-27 10:21:29
* @Last Modified 2018-08-27Name>
* @Last Modified time: 2018-08-27 10:21:33
*/

// https://ss64.com/osx/security-cert.html

const sudo = require('sudo-prompt');

const options = {
    name: 'develop server',
}
// 先不优化 

// todo 增加windows系统支持支持
// certutil .exe  -addstore  Root  MyCert .cer  // TrustedPublisher
// certutil .exe  -p  MyPassword  -importpfx  MyCert .pfx 
// certutil .exe  -p  MyPassword  -user  -importpfx  MyCert .pfx 

module.exports = {
    addCert: function (path) {
        const command = `security add-trusted-cert -d -k /Library/Keychains/System.keychain ${path}`
        sudo.exec(command, options,
            (error, stdout, stderr) => {
                if (error) throw error;
                console.log('certificate installed successfully');
            }
        );
    },
    removeCert: function () {
        const command = `security remove-trusted-cert -d ${path}`;
        sudo.exec(command, options,
            (error, stdout, stderr) => {
                if (error) throw error;
                console.log('certificate removed successfully');
            }
        );
    }
}



