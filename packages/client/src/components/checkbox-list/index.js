import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import ServerIcon from '@material-ui/icons/OndemandVideoTwoTone';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import Input from '@material-ui/core/Input';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
const styles = theme => ({
    button: {
        marginLeft: 30,
        marginTop: 10
    },
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});

class SwitchListSecondary extends React.Component {
    state = {
        checked: ['wifi'],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;

        return (


            <div className={classes.root}>
                <Button variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
                    <AddIcon />
                </Button>
                <List disablePadding >
                    <ListItem>
                        <ListItemIcon>
                            <ServerIcon />
                        </ListItemIcon>

                        <ListItemIcon>
                            <Switch
                                onChange={this.handleToggle('bluetooth')}
                                checked={this.state.checked.indexOf('bluetooth') !== -1}
                            />
                        </ListItemIcon>

                        <ListItemIcon>
                            <Input
                                placeholder="项目名称"
                                // className={classes.input}
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemIcon>
                            <Input
                                placeholder="端口号"
                                // className={classes.input}
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemIcon>
                            <IconButton className={classes.button} aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>

                </List>
            </div>
        );
    }
}

SwitchListSecondary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchListSecondary);

