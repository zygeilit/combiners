import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Project from './project'
import General from './general'
import WhiteList from './white-list'
import Logger from './logger'
import About from './about'
import Domain from './domain'
import Custom from './custom'
import Swiper from '../components/swiper'

const styles = {
    slideContainer: {
        height: '100%',
    }
}

function PageContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir}
            style={{ paddingLeft: 10 }}
        >
            {children}
        </Typography>
    );
}
class Content extends React.Component {
    render() {
        // const { value } = this.props;
        return (
            <Swiper {...this.props}>
                <PageContainer> <Project /> </PageContainer>
                <PageContainer> <General /> </PageContainer>
                <PageContainer> <WhiteList /> </PageContainer>
                <PageContainer> <Custom /> </PageContainer>
                <PageContainer> <Domain /> </PageContainer>
                <PageContainer> <Logger /> </PageContainer>
                <PageContainer> <About /> </PageContainer>
            </Swiper>

        );
    }
}


export default Content