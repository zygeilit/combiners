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
const styles = {
  slideContainer: {
    height: '100%',
  }
}
function PageContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
 }
 class Content extends React.Component {
  render() {
      const { value } = this.props;
    return (
        <SwipeableViews
        style={styles.slideContainer}
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={this.handleChangeIndex}
        >
        <PageContainer> <Project/> </PageContainer>
        <PageContainer> <General/> </PageContainer>
        <PageContainer> <WhiteList/> </PageContainer>
        <PageContainer> <Logger/> </PageContainer>
        <PageContainer> <About/> </PageContainer>
        <PageContainer> <Domain/> </PageContainer>
        <PageContainer> <Custom/> </PageContainer>
        </SwipeableViews>
    );
  }
}


export default Content