import React from 'react';

import './logger.scss'
import { inject, observer,toJS } from 'mobx-react';
import Log from '../components/log'
@inject('rootStore')
@observer
export default class Logger extends React.Component {
    render() {
        const { logStore } = this.props.rootStore;
        return <section className='logger-container' >
            <header className="logger-header">
            </header>
            <content className="logger-content">
                <div className="shell-wrap">
                    <ul className="shell-body">
                        {logStore.logs.map((log) => {
                            return <Log key={log.id} {...log}/>
                        })}
                    </ul>
                </div>
            </content>
        </section>
    }
}