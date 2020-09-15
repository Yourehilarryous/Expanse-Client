import React from 'react';
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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});



const AnimeCard = () => {

    const classes = useStyles();
    
    
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body" color="textSecondary" component="p">
                            {/* <Anime /> */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }

    export default AnimeCard;
