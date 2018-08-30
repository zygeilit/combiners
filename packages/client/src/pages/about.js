import React from 'react';
import './about.scss'
// import './logger.scss'
// import { inject, observer } from 'mobx-react';
// @inject('loggerStore')
// @observer'
import Typography from '@material-ui/core/Typography';
import Card from '../components/card'
import IconWebpack from '../static/webpack.png'
import IconRedux from '../static/redux.png'
import IconNode from '../static/nodejs.png'

export default class About extends React.Component {
    render() {
        return <section className='about-container'>
            <header className="about-header">
                <Card 
                    title = 'Cli'
                    backgroundColor='#3c3c3c' 
                    src={IconNode} />
                <Card 
                    title = 'Config'
                    backgroundColor="rgba(142, 214, 251, 0.35)" 
                    src={IconWebpack} />
                <Card 
                    title = 'bootstarp'
                    backgroundColor="#e6d7ff" 
                    src={IconRedux} />
            </header>
            <content className="about-content">

                {/* <Card></Card> */}
            </content>
            <footer className='about-footer'>
                Talent UI 2.0 强力驱动
            </footer>
        </section>
    }
}
{/* <Typography component="div">
   -  图形化配置,上手简单
</Typography>
<Typography component="div">
   -  支持文件转发多种支持
</Typography>
<Typography component="div">
   -  支持多站点多端口同时调试
</Typography>
<Typography component="div">
   -  内置TalentUI 2.0/Cloud扩展文件转发规则
</Typography>
<Typography component="div">
   -  Http/Https多协议支持,自动生成ssl证书
</Typography> */}