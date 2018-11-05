import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardMaterial from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import {Field} from "./utils/Field";

const styles = theme => ({      //Todo: study theme
    root: {                     //Todo: Check
        flexGrow: 1,
    },
    card: {
        height: "15vh",     //140px
        width: "10.71vh",   //100px
    }
});

class Card extends React.Component{

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        Field.playerCards.pop();
        this.props.handleClick();
    }

    render(){
        const title= this.props.card.rank + "_" + this.props.card.suit;
        const image= "/svgCards/" + this.props.card.rank + "_" + this.props.card.suit + ".svg";

        return (
            <div>
                <CardMaterial className={this.props.classes.card}>
                    <CardActionArea onClick={this.handleClick}>
                        <CardMedia className={this.props.classes.card}
                                   title={title}
                                   image={image}>
                        </CardMedia>
                    </CardActionArea>
                </CardMaterial>
            </div>
        );
    }
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,   //Todo: study PropTypes
};

export default withStyles(styles)(Card);