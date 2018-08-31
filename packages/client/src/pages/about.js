import React from 'react';
import './about.scss'
import Card from '../components/card'
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
            </content>
            <footer className='about-footer'>
                {copyright}
            </footer>
        </section>
    }
}