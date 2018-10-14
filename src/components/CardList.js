import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'

class CardList extends Component{
    cardList= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.cardList ? (
                    <div>
                        <Grid container
                              spacing={24}
                              justify="center"
                              style={{padding:24}}>
                            {this.cardList.map(rank => (
                                <Grid item
                                      direction="column"
                                      justify="center"
                                      alignItems="center"
                                >
                                    <Card rank={rank}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "List of cards is empty"}
            </div>
        )
    }
}

export default CardList;