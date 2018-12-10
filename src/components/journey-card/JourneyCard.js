import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import './JourneyCard.css'

// Component used to display a journey as a Material Card
const JourneyCard = (props) => {

    /**
     * Get the picture if it exists
     * @param {*} picture 
     */
    function loadPicture(picture) { 
        let img = '';
        try{
            img = require('../../assets/images/' + picture + '.jpg');
        }catch(e){
            console.log('error', e);        
        }
        return img;
    }

    /**
     * A card represents a Journey
     * When we click on it, the user is redirected to the journey details
     */
    return (
        <div>
            {props.journey ? (
                <Card >
                    <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                        image={loadPicture(props.journey.destination)}
                        title={props.journey.destination}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.journey.destination}
                        </Typography>
                        <Typography component="p">
                            {props.journey.destination}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" component={Link} to={`/journey/${props.journey.id}`}>
                            Go To Journey
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default JourneyCard