import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './Journey.css'

// Component used to display a journey

const Journey = (props) => {
    console.log(props)
    return(
        <div>
            { props.journey ? (
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={require('../../assets/images/' + props.journey.destination + '.jpg')}
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
                    <Button size="small" color="primary" href={props.journey.destination} target="_blank">
                        Go To Journey
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Journey