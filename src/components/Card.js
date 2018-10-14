import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardMaterial from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({      //Todo: study theme
    root: {                     //Todo: Check
        flexGrow: 1,
    },
    card: {
        height: 140,
        width: 100,
    },
    control: {                  //Todo: Check
        padding: theme.spacing.unit * 2,
    }
});

const Card = (props) =>{
    const { classes } = props;
    const { rank } = props;

    return (
        <div>
            {classes ? (
                <CardMaterial className={classes.card}>
                    <CardContent>
                        <Typography variant="h6">
                            {rank}
                        </Typography>
                    </CardContent>
                </CardMaterial>
            ) : null}
        </div>
    );
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,   //Todo: study PropTypes
};

export default withStyles(styles)(Card);