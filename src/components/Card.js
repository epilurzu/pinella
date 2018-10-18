import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardMaterial from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'


const styles = theme => ({      //Todo: study theme
    root: {                     //Todo: Check
        flexGrow: 1,
    },
    card: {
        height: "15vh",     //140px
        width: "10.71vh",   //100px
    }
});

export class Card extends React.Component{

    constructor(props){
        super(props);

        let { rank, suit, number, points }= props;
        this.rank= rank;
        this.suit= suit;
        this.number= number;
        this.points= points;
    }

    render(){
        let list= ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "jack", "queen", "king"];

        return (
            <div>
                {list ? (
                    <CardMaterial className={this.props.classes.card}>
                        <CardActionArea>
                            <CardMedia className={this.props.classes.card}
                                       image="/svgCards/ace_spades.svg"
                                       title="ace_spades.svg">
                            </CardMedia>
                        </CardActionArea>
                    </CardMaterial>
                ) : null}
            </div>
        );
    }
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,   //Todo: study PropTypes
};

export default withStyles(styles)(Card);