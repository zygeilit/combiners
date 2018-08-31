import React from 'react';
import Row from '../components/row'
import { inject, observer } from 'mobx-react';
import Project from '../components/project/general-fields'
@inject('rootStore')
@observer
export default class General extends React.Component {
    render() {
        const {generalStore } = this.props.rootStore;
        return <Row tab={generalStore} render={(item) => {
            return <Project key={item.id} project={item} />
        }} ></Row>
    }
}
