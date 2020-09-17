import React, { Component } from 'react';
import AnimeCard from '../components/AnimeCard'
import AnimeModel from '../models/Anime';

import {Grid} from '@material-ui/core'



class Main extends Component{

    state = {
        anime: []
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () => {
        AnimeModel.show()
            .then(data => {
                this.setState({anime: data})
                console.log("Anime Data:", this.state.anime)
            })
    }

render(){
    return (
        <Grid container>
            <Grid item xs={12} sm={4}>
                <AnimeCard />
            </Grid>
        </Grid>
        )
    };
}

export default Main;
