import React, { useState, useEffect } from 'react';
import AnimeCard from '../components/AnimeCard'
import AnimeModel from '../models/Anime';
import Search from '../components/Search'
import { makeStyles } from '@material-ui/core/styles';

import {Grid} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        flexDirection: 'column',
        alignContent: 'center',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }, 
    cards: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    }
}))

const Main = () => {

    const classes = useStyles()

    const [input, setInput] = useState('');

    const handleSearch = (e) => {
        setInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        //Use the input toput to make the serach URL
        //COnfirm that the search returns data
        //Set data in this.state
        //Pass data down to the right components
    }
    // const [animeList, setAnimeList] = useState();

    // const fetchData = async () => {
    //     await AnimeModel.show()
    //         .then(data => {
    //             setAnimeList(data)
    //             console.log("Fetched Data:", data)
    //         })
    // }

    // useEffect(() => {
    //     fetchData()
    // },[])

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={6} >
                <Search 
                    input={input}
                    onChange={setInput}
                    handleSubmit={onSubmit}
                />
            </Grid>
            <Grid item className={classes.cards} xs={12} sm={4}>
                <AnimeCard 
                    inputValue={input}
                    handleSearch={handleSearch}
                />
            </Grid>
        </Grid>
        )
    };


export default Main;
