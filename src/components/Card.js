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
    render(){
        const {card} = this.props;
        const title = card.rank + "_" + card.suit;
        const image = "/svgCards/" + title + ".svg";
        return (
            <div>
                <CardMaterial className={this.props.classes.card}>
                    <CardActionArea>
                        <CardMedia className={this.props.classes.card}
                                   image={image}
                                   title={title}>
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