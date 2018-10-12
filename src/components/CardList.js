import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
//import * as contentful from 'contentful'
import Card from './Card'
import NavBar from "./NavBar";

const SPACE_ID = ''
const ACCESS_TOKEN = ''

class CardList extends Component{
    state = {
        list: ["1", "2", "3", "4", "5", "6", "7", "8"],
        searchString: 'wow'
    }

    constructor(){
        super()
     //   this.getList()
    }

    onSearchInputChange = (event) => {
        console.log(event.target.value);
    }

    render(){
        return(
            <div>
                {this.state.list ? (
                    <div>
                        <TextField style={{padding:24}}
                                   id="searchInput"
                                   placeorder="Search for cards"
                                   margin="normal"
                                   onChange={this.onSearchInputChange}/>

                        <Grid container spacing={24} style={{padding:24}}>
                            {this.state.list.map(singleItem => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Card singleItem={singleItem}>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </div>
                ) : "List is empty m8"}
            </div>
        )
    }

}

export default CardList;