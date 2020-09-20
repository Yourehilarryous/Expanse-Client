import React, { Component } from 'react';
import AnimeModel from '../models/Anime'
import { makeStyles } from '@material-ui/styles'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'





class AnimeCard extends Component {

    

    state = {
        animeList: [],
        classes: makeStyles({
            root: {
                maxWidth: 345,
            },
        })
    }
    // const {input} = useState();

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        await AnimeModel.show(this.props.inputValue)
            .then(animeData => {
                this.setState({ animeList: animeData.data.results })
                console.log(animeData.data.results)
            })
    }


    render() {
        const anime = this.state.animeList.map((a, i) => {
            return (
                <div key={i}>
                    <Card className={this.state.classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                // alt="Contemplative Reptile"
                                height="140"
                                image={a.image_url}
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



        return (
            <div>
                {anime}
            </div>
        );
    }
}

export default AnimeCard;
