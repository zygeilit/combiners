import React from 'react';
import Row from '../components/row'
import { inject, observer } from 'mobx-react';
import Project from '../components/project/custom-fields'

@inject('customStore')
@observer
export default class Custom extends React.Component {
    render() {
        const { customStore } = this.props;
        return <section className='custom-container'>
            <Row tab={customStore} render={(item) => {
             return   <Project key={item.id} project={item} />
            }} ></Row>
        </section>
    }
}
