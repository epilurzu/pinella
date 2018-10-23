import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardMaterial from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

import {Field} from "./utils/Field"

const styles = theme => ({      //Todo: study theme
    root: {                     //Todo: Check
        flexGrow: 1,
    },
    card: {
        height: "15vh",     //140px
        width: "10.71vh",   //100px
    }
});

export class Deck extends React.Component{
    render(){
        return (
            <div>
                {Field.deck ? (
                    <CardMaterial className={this.props.classes.card}>
                        <CardActionArea>
                            <CardMedia className={this.props.classes.card}
                                       image="/svgCards/deck.svg"
                                       title="deck.svg">
                            </CardMedia>
                        </CardActionArea>
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