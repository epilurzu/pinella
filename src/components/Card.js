import React from 'react'
//import {Card as CardMaterial} from '@material-ui/core/Card'
import CardMaterial from '@material-ui/core/Card'   //Todo:WUT?
//import Card from '@material-ui/core/Card'         //Todo:WUT?
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'


const Card = (variabile) =>{
    console.log(JSON.stringify(variabile))

    return(
        <div>
            {variabile ? (
                <CardMaterial>
                    <CardContent>
                        <Typography variant="h6">
                            {variabile.singleItem}
                        </Typography>
                    </CardContent>
                </CardMaterial>
            ): null}
        </div>
    )
}

export default Card;