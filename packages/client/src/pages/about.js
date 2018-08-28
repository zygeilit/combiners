import React from 'react';

// import './logger.scss'
// import { inject, observer } from 'mobx-react';
// @inject('loggerStore')
// @observer'
import Card from '../components/card'
export default class About extends React.Component {
    render() {
        return <section>
            <header className="about-header">
            </header>
            <content className="about-conten">
            抹去繁琐的Nginx配置过程,内置TalentUI 2.0 / Cloud扩展文件转发规则,支持自定义转发规则,
            一键配置Https环境,无需手动生成证书,支持多站点多端口同时调试。
                {/* <Card></Card> */}
            </content>
            <footer>
                Talent UI 2.0 强力驱动
            </footer>
        </section>
    }
}