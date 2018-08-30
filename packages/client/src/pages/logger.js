import React from 'react';

import './logger.scss'
import { inject, observer } from 'mobx-react';
@inject('logStore')
@observer
export default class Logger extends React.Component {
    render() {
        const { logStore } = this.props;
        return <section className='logger-container' >
            <header className="logger-header">
            </header>
            <content className="logger-content">
                <div className="shell-wrap">
                    <ul className="shell-body">
                        {logStore.logs.map((log) => {
                            return <li key={log.id} >{log.status}</li>
                        })}
                    </ul>
                </div>
            </content>
        </section>
    }
}