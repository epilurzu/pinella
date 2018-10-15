import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CardList from './components/CardList'
import './App.css';
import Grid from "@material-ui/core/Grid/Grid";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Grid container
                      direction={"column"}
                      justify={"flex-end"}>
                    <CardList/>
                    <CardList/>
                    <CardList/>
                </Grid>
            </div>
        );
    }
}

export default App;