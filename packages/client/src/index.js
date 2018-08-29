import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import 'babel-polyfill'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { MainListItems, OtherListItems } from './components/menu';
import 'normalize.css'
import { inject, observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';
import DevelopServer from '@material-ui/icons/ImportantDevicesTwoTone';
import  api from './api'
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
        paddingTop: 10,
        minWidth: 0, // So the Typography noWrap works
    },
    title: {
        fontWeight: 300,
        marginLeft: 20,
    },
    toolbar: theme.mixins.toolbar,
});

@inject('logStore','viewStore')
@observer
class App extends Component {
    componentDidMount() {
        const { logStore } = this.props;
        api.log((log) => logStore.addNewLog(log))
    }
    render() {
        const { classes, viewStore } = this.props;
        return (<div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <DevelopServer />
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
                    <MainListItems handleChangeIndex={viewStore.changeIndex} />
                </List>
                <Divider />
                <List>
                    <OtherListItems handleChangeIndex={viewStore.changeIndex} />
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Content value={viewStore.activeMenu} />
            </main>
            {/* <DevTools/> */}
        </div>
        );
    }
}

export default withStyles(styles)(App)