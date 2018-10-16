import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'

const CardList = (props) => {
    const cardList= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    return(
        <div>
            {cardList ? (
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={16}
                >
                    {cardList.map(rank => (
                        <Grid item key={rank}>
                            <Card rank={rank}/>
                        </Grid>
                    ))}
                </Grid>
            ) : "List of cards is empty"}
        </div>
    )
};

export default CardList;