import React from 'react';
import Row from '../components/row'
import { inject, observer } from 'mobx-react';
import Project from '../components/project/white-list-fields'
@inject('rootStore')
@observer
export default class Custom extends React.Component {
    render() {
        const { whiteListStore } = this.props.rootStore;
        return <Row tab={whiteListStore} render={(item) => {
            return <Project key={item.id} project={item} />
        }} ></Row>
    }
}
