import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Switch from '@material-ui/core/Switch';
import ServerIcon from '@material-ui/icons/OndemandVideoTwoTone';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { observer } from 'mobx-react';
import Input from '../../components/input'

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
class SwitchListSecondary extends React.Component {
    render() {
        const { classes, project } = this.props;
        const { id, name, enabled, regular, target } = project;
        console.log(project)
        return (<List key={id} disablePadding >
            <ListItem>
                <ListItemIcon>
                    <ServerIcon />
                </ListItemIcon>

                <ListItemIcon>
                    <Switch
                        onChange={project.toggle}
                        checked={enabled}
                    />
                </ListItemIcon>
                <Input
                    placeholder="名称"
                    value={name}
                    onChange={project.setName}
                />
                <Input
                    placeholder="请求url地址"
                    value={regular}
                    onChange={project.setRegular}
                />
                <Input
                    placeholder="例:localhost:3000/main.js"
                    value={target}
                    onChange={project.setTarget}
                />
                <ListItemIcon>
                    <IconButton className={classes.button} aria-label="Delete">
                        <DeleteIcon onClick={project.destroy} />
                    </IconButton>
                </ListItemIcon>
            </ListItem>
        </List>)
    }
}

SwitchListSecondary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchListSecondary);

