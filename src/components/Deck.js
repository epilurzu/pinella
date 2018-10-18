import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardMaterial from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import { Rank, Suit, Points } from "./utils/Utils";
import { Card } from "./Card";

const styles = theme => ({      //Todo: study theme
    root: {                     //Todo: Check
        flexGrow: 1,
    },
    card: {
        height: "15vh",  //140px
        width: "5vw",   //100px
    }
});

export class Deck extends React.Component{

    constructor(props){
        super(props);
        this.deck= [];
        this.populateDeck();
    }

    populateDeck(){
        for (let i=0; i<Rank.length*Object.keys(Suit).length; i++){
            let prop= {};
            prop.rank= Rank[i%13];
            prop.suit= Suit[Math.floor(i/13)];
            prop.number= (i%13)+1;
            prop.points= Points[i%13];

            this.deck.push(new Card(prop));
        }

        this.deck.push(new Card({rank: "Jolly", suit: "red", number: 0, points: 25}));
        this.deck.push(new Card({rank: "Jolly", suit: "black", number: 0, points: 25}));

        this.deck = this.deck.filter(function (card) {
            return !(card.number === 2 && (card.suit === Suit[1] || card.suit === Suit[2]));
        });

        this.deck.forEach(function (card) {
           console.log(card.rank, card.suit, card.number, card.points);
        });
    }

    render(){
        return (
            <div>
                {this.deck ? (
                    <CardMaterial className={this.props.card}>
                        <CardContent>
                            <Typography variant="h6"
                                        align="center">
                                deck
                            </Typography>
                        </CardContent>
                    </CardMaterial>
                ) : null}
            </div>
        );
    }
}

Deck.propTypes = {
    classes: PropTypes.object.isRequired,   //Todo: study PropTypes
};

export default withStyles(styles)(Deck);