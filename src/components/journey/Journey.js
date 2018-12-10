import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import JourneyCard from './../journey-card/JourneyCard'
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        flexDirection: 'column',
    },
    bigAvatar: {
        margin: 10,
        width: 250,
        height: 250,
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        width: 500,
        margin: '0 auto',
    },
    chip: {
        marginRight: theme.spacing.unit,
    },
    section1: {
        margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    section2: {
        margin: theme.spacing.unit * 2,
    },
    section3: {
        margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    },
});

class Journey extends Component {

    constructor(props) {
        super(props);
        console.log('hello : ' + props.match.params.id);
        // Contains the state of the component
        this.state = {
            error: null,
            isLoaded: false,
            journey: [],
            journeyId: props.match.params.id
        }

        console.log('before : ' + props.match.params.id);
        // It allows for the function to get "this"
        this.findJourney = this.findJourney.bind(this);
        console.log('hello : ' + props.match.params.id);
    };

    componentDidMount() {
        this.findJourney();
    }

    /**
     * Bring a journey from the server (graphql)
     */
    getJourney = async (query, variables) => {
        try {
            const response = await axios.post('http://localhost:8080/graphql', {
                query,
                variables
            });

            // Log the response so we can look at it in the console
            console.log('response.data : ' + response.data)
            // TODO : Gestion des erreurs
            // Set the data to the state
            this.setState(() => ({
                isLoaded: true,
                firstDisplay: false,
                journey: response.data.data.findJourneyById
            }));

        } catch (error) {
            // If there's an error, set the error to the state
            console.log('error : ' + error);
            this.setState(() => ({ error }))
        }
    }

    /**
 * Find a journey
 */
    findJourney() {
        console.log('findJourney');
        // This is the GraphQL query for findJourney
        let query = `
            query findJourney {
                findJourneyById(id:"`
        query += this.state.journeyId
        query += `") {
                    id
                    destination
                    price
                }
            }
            `;

        // These variables are optional we can leave empty
        const variables = {};

        // We call the method here to execute our async function
        this.getJourney(query, variables)
    }

    loadPicture(picture) {
        let img = '';
        try {
            img = require('../../assets/images/' + picture + '.jpg');
        } catch (e) {
            console.log('error', e);
        }
        return img;
    }

    // The render() of the JourneyDisplay page
    render() {
        const { classes } = this.props;
        const { error, isLoaded, journey } = this.state;
        let elementContent;
        if (error) {
            elementContent = <div>{error.message}</div>;
        } else if (!isLoaded) {
            elementContent = <div>Loading...</div>
        } else {
            elementContent =
                <div className={classes.root}>
                    <div className={classes.section1}>
                        <Grid container justify="center" alignItems="center">
                            <Avatar alt="Remy Sharp" src={this.loadPicture(journey.destination)} className={classes.bigAvatar} />
                        </Grid>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h4">
                                    {journey.destination}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="h6">
                                    $ {journey.price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.section3}>
                        <Button variant="contained" color="primary" component={Link} to="/journeys" fullWidth>
                            Back to the list
                        </Button>
                    </div>
                </div>

        }

        return (
            <div>
                {elementContent}
            </div>

        );
    }
}

Journey.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Journey);
