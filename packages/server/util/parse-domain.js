module.exports = function (domain) {
    // SNI 需要解析顶域
    const specialTld = ['.com.cn', '.net.cn', '.org.cn', '.gov.cn']
    let position = -2;
    const hasSpecial = specialTld.filter(item => domain.lastIndexOf(item) > 0)
    if (hasSpecial.length > 0) position = -3;
    return domain.split('.').slice(position).join('.')
};
