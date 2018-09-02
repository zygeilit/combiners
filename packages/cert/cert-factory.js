// 组合证书到 https-server

/*
* @Author: abnercrack
* @Date:   2018-08-27 10:21:29
* @Last Modified 2018-08-27Name>
* @Last Modified time: 2018-08-27 10:21:33
*/

const sudo = require('sudo-prompt');

const options = {
    name: 'develop-server',
}
// 必须是顶域
module.exports = function CertGenerater(domain) {
    const command = `./shell/ssl.sh ${domain}`
    sudo.exec(command,
        (error, stdout, stderr) => {
            if (error) throw error;
            console.log('stdout: ' + stdout);
        }
    );
}


