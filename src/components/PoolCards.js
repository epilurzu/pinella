import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'
import {Field} from "./utils/Field";

const PoolCards = (props) => {
    return(
        <div>
            {Field.poolCards ? (
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={16}
                >
                    {Field.poolCards.map(card => (
                        <Grid item card={card}>
                            <Card card={card}/>
                        </Grid>
                    ))}
                </Grid>
            ) : "List of cards is empty"}
        </div>
    )
};

export default PoolCards;