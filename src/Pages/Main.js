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
    
    const [animeList, setAnimeList] = useState('');

    let search = false

    // const handleSearch = (e) => {
    // }
    const fetchData = async () => {
        await AnimeModel.show(inputValue)
            .then(animeData => {
                setAnimeList(animeData.data.results)
                console.log(animeData.data.results)
            })
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()


        await setInput(e.target.value)
        
        console.log(search)
        if(input){
            search = true
        } else {
            search = false
        }
        fetchData()
        console.log(search)
        console.log("Event:", e.target)
        console.log(input)
        //Use the input toput to make the serach URL
        //COnfirm that the search returns data
        //Set data in this.state
        //Pass data down to the right components
    }
    
    useEffect(() => {
            fetchData()
        },[])


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
            {search === true ?
                <AnimeCard 
                    inputValue={input}
                    animeList={animeList}
                />
                :
                <AnimeCard 
                    inputValue={input}
                    animeList={animeList}
                />
            }
            </Grid>
        </Grid>
        )
    };


export default Main;
