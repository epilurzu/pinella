import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BookIcon from '@material-ui/icons/Book';

const styles = {
    right: {
        marginLeft: 'auto',
        marginRight: -12,
    }
};

const NavBar = (props) => {
    const { classes } = props;
    return(
        <div>
            <AppBar position="static">
                <Toolbar>

                    <IconButton color="inherit" aria-label="Menu" >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" color="inherit">
                        Pinella
                    </Typography>

                    <IconButton color="inherit" className={classes.right}>
                        <BookIcon/>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    )
}

NavBar.propTypes = {
    classes: PropTypes.element.isRequired
};

export default withStyles(styles)(NavBar);