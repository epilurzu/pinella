import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'
import {Field} from "./utils/Field";

const PlayerCards = (props) => {
    return(
        <div>
            {Field.cpuCards ? (
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={16}
                >
                    {Field.cpuCards.map(card => (
                        <Grid item card={card}>
                            <Card card={card}/>
                        </Grid>
                    ))}
                </Grid>
            ) : "List of cards is empty"}
        </div>
    )
};

export default PlayerCards;