import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import CardList from './components/CardList'
import './App.css';
import Grid from "@material-ui/core/Grid/Grid";

const style = {
    main:{
        height: "90vh",
        padding: 24
    }
};

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Grid container
                      className={this.props.classes.main}
                      direction="column"
                      justify="space-between"
                      alignItems="center"
                >
                    <CardList/>
                    <CardList/>
                    <CardList/>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.element.isRequired
};

export default withStyles(style)(App);