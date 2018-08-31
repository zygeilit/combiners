import React from 'react';
import Row from '../components/row'
import { inject, observer } from 'mobx-react';
import Project from '../components/project/domian-fields'
import { v1 } from 'uuid';
@inject('domainStore')
@observer
export default class Domain extends React.Component {
    render() {
        const {domainStore } = this.props;
        return  <Row tab={domainStore} render={(item) => {
          return  <Project key={v1()} project={item} />
        }} ></Row>
    }
}
