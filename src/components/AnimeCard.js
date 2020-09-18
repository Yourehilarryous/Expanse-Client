import React from 'react';
import AnimeModel from '../models/Anime'
import {makeStyles} from '@material-ui/styles'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
import { useState, useEffect } from 'react';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});



const AnimeCard = () => {

    const classes = useStyles();

    const [animeList, setAnimeList] = useState([]);

    const fetchData = async () => {
        await AnimeModel.show()
            .then(animeData => {
                setAnimeList({animeList: animeData.data.results})
                console.log(animeData.data.results)
            })
    }

    const anime = animeList.map((a, i) => {
        return (
            <div key={i}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={a.image_url}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {a.title}
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p">
                                {a.synopsis}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    })

    useEffect(() => {
        fetchData()
    },[])
    
        return (
            <div>
                {anime}
            </div>
        );
    }

    export default AnimeCard;
