import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from './Card'

const styles = {
    top: {
        flexDirection:'row',
        padding: 16
    },
    centre: {
    },
    bottom: {
    }
};

const CardList = (props) => {
    const cardList= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    return(
        <div>
            {cardList ? (
                <Grid container
                      className={props.classes.top}
                      spacing={16}
                      justify={'center'}
                >
                    {cardList.map(rank => (
                        <Grid key={rank} item>
                            <Card rank={rank}/>
                        </Grid>
                    ))}
                </Grid>
            ) : "List of cards is empty"}
        </div>
    )
};

CardList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardList);