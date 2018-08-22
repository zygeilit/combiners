import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { MainListItems, OtherListItems } from './components/menu';
import 'normalize.css'
import Tab from './components/tab'
import DevelopServer from '@material-ui/icons/ImportantDevicesTwoTone';

import Content from './pages'

// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// });
const drawerWidth = 220;

const styles = theme => ({
  root: {
    zIndex: 1,
    overflow: 'hidden',
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
  },
  drawerPaper: {
    width: drawerWidth,
    flexGrow: 1,
    display: 'flex',

  },
  content: {
    marginLeft: 220,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop:10,
    minWidth: 0, // So the Typography noWrap works
  },
  title:{
    fontWeight:300,
    marginLeft:20,
  },
  toolbar: theme.mixins.toolbar,
});


class ClippedDrawer extends PureComponent  {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {

    this.setState({ value: index });
  };
  render(){
    const { classes } = this.props;
    return ( <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
              <Toolbar>
                <DevelopServer/>
                <Typography 
                  classes={{
                    title: classes.title,
                  }}
                variant="title" color="inherit" noWrap>
               TalentUI Dev Server
            </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}>
              <div className={classes.toolbar} />
              <List>
                <MainListItems handleChangeIndex = { this.handleChangeIndex}/>
              </List>
              <Divider />
              <List>
              <OtherListItems handleChangeIndex = { this.handleChangeIndex}/>
              </List>
            </Drawer>   
            <main className={classes.content}>
              <div className={classes.toolbar} />
                <Content {...this.state}/>
            </main>
      </div>
    );
  }
}

export default withStyles(styles)(ClippedDrawer);