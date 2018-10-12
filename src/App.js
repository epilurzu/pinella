import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CardList from './components/CardList'
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <CardList/>
            </div>
        );
    }
}

export default App;