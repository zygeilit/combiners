import React from 'react';

import './logger.scss'
import { inject, observer } from 'mobx-react';
@inject('logStore')
@observer
export default class Logger extends React.Component {
    render() {
        const { logStore } = this.props;
        return <section>
            <header className="logger-header">
            </header>
            <content className="logger-conten">
                {logStore.logs.map((log) => {
                    return <div key={log.id} >{log.status}</div>
                })}
            </content>
        </section>
    }
}