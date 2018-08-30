import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProjectRule from '../components/row'
import Project from '../components/project'
import Swiper from '../components/swiper'
import Grid from '@material-ui/core/Grid';
import { inject, observer } from 'mobx-react';

function PageContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir}
            style={{ padding: 10 }}
        >
            {children}
        </Typography>
    );
}


const styles = theme => ({
    root: {
        height: '100%',
        display: 'flex',
        width: '100%',
        position: 'absolute',
        flexGrow: 'row wrap',
        backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
        width: '100%',
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#1890ff',
            //   fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
});

@inject('tabsStore')
@observer
class CustomizedTabs extends React.Component {
    render() {
        const { classes, tabsStore } = this.props;
        const { tabs, activeTab, changeIndex } = tabsStore
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start" >
                <Tabs
                    value={activeTab}
                    onChange={changeIndex}
                    classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} >
                    {
                        tabs.map(tab => <Tab
                            disableRipple
                            key={tab.id}
                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                            label={tab.name}
                        />)
                    }
                </Tabs>
                <content className="content">
                    <Swiper value={activeTab}>
                        {tabs.map(tab => <PageContainer key={tab.id}>
                            <ProjectRule tab={tab} render={(item) => {
                               return <Project key={item.id} project={item} />
                            }} ></ProjectRule>
                        </PageContainer>)}
                    </Swiper>
                </content>
            </Grid>
        );
    }
}
// CustomizedTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(CustomizedTabs);

