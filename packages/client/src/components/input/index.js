import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import purple from '@material-ui/core/colors/purple';
import ListItemIcon from '@material-ui/core/ListItemIcon';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        '&$cssFocused': {
            color: 'rgb(225, 0, 80)'
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: 'rgb(225, 0, 80)',
        },
    },

});


function CustomizedInputs(props) {
    const { classes, onChange, placeholder,value, disabled = false } = props;

    return (
        <ListItemIcon>

            <div className={classes.container}>

                <FormControl className={classes.margin}>
                    <InputLabel
                        FormLabelClasses={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        }}
                        htmlFor="custom-css-input"
                    >
                        {placeholder}
                    </InputLabel>
                    <Input
                        value = {value}
                        onChange={onChange}
                        disabled = {disabled}
                        classes={{
                            underline: classes.cssUnderline,
                        }}
                        id="custom-css-input"
                    />
                </FormControl>

            </div>
        </ListItemIcon>

    );
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);