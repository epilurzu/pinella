import React from 'react'
import Card from '@material-ui/core/Card'

import Typography from '@material-ui/core/Typography'


import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const PlayingCard = (variabile) =>{
    console.log(JSON.stringify(variabile))

    return(
        <div>
            {variabile ? (
                <Card>
                    <CardContent>
                        <Typography variant="h6">
                            {variabile.singleItem}
                        </Typography>
                    </CardContent>
                </Card>
            ): null}
        </div>
    )
}

export default PlayingCard;