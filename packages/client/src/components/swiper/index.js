import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slideContainer: {
    height: '100%',
  }
}

 class Content extends React.Component {
  render() {
      const { value,children } = this.props;
    return (
        <SwipeableViews
        style={styles.slideContainer}
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={this.handleChangeIndex}
        >
        {children}
        </SwipeableViews>
    );
  }
}


export default Content