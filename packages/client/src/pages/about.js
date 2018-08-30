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

import { inject, observer } from 'mobx-react';

@inject('aboutStore')
@observer
export default class About extends React.Component {
    render() {
        const { aboutStore: { cards, copyright } } = this.props;
        return <section className='about-container'>
            <header className="about-header">
                {cards.map(k => {
                    return <Card
                        key = {k.name}
                        title={k.name}
                        backgroundColor={k.background}
                        src={k.icon}
                        icon = {k.icon}
                        content= {k.content}
                        />
                })}
            </header>
            <content className="about-content">

                {/* <Card></Card> */}
            </content>
            <footer className='about-footer'>
                {copyright}
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