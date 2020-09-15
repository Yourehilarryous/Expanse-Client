import React, { Component } from 'react';
import AnimeCard from '../components/AnimeCard'
import AnimeModel from '../models/Anime';

import {Grid} from '@material-ui/core'



class Main extends Component{

    state = {
        anime: []
    }

    componentDidMount(){
        AnimeModel.show(this.props)
            .then(data => {
                this.setState({anime: data})
                console.log(data)
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
