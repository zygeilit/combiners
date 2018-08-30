import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Project from '../project'
import { observer } from 'mobx-react';

const styles = theme => ({
    button: {
        marginLeft: 30,
        marginTop: 10
    },
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});
@observer
class ProjectContainer extends React.Component {
    render() {
        const { classes ,tab} = this.props;
        return (<div className={classes.root}>
            <Button  onClick = {tab.addProject} variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
                    <AddIcon />
                </Button>
            { tab.projects.map(item => this.props.render(item))}
            </div>
        );
    }
}

ProjectContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectContainer);

