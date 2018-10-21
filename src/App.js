import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";

import NavBar from './components/NavBar'
import Deck from './components/Deck'
import CPUCards from './components/CPUCards'
import PlayerCards from './components/PlayerCards'
import './App.css';

import {Field} from './components/utils/Field'
import PoolCards from "./components/PoolCards";


const style = {
    main:{
        height: "85vh",
        padding: 24
    }
};

class App extends Component {
    render() {
        Field.init();
        return (
            <div>
                <NavBar/>
                <Grid container
                      className={this.props.classes.main}
                      direction="column"
                      justify="space-between"
                      alignItems="center"
                >
                    <CPUCards/>
                    <Grid container
                          direction="row"
                          justify="space-around"
                          alignItems="center"
                    >
                        <Deck/>
                        <PoolCards/>
                    </Grid>
                    <PlayerCards/>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.element.isRequired
};

export default withStyles(style)(App);