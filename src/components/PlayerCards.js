import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'
import {Field} from "./utils/Field";

class PlayerCards extends React.Component{

    constructor(props) {
        super(props);
        this.state = {playerCards: Field.playerCards};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            playerCards: Field.playerCards
        });
    }

    render(){
        return(
            <div>
                {this.state.playerCards ? (
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          spacing={16}
                    >
                        {this.state.playerCards.map(card => (
                            <Grid item card={card}>
                                <Card card={card} handleClick = {this.handleClick}/>
                            </Grid>
                        ))}
                    </Grid>
                ) : "List of cards is empty"}
            </div>
        )
    }
};

export default PlayerCards;