import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import environment from './../../Environment';
import { QueryRenderer, graphql } from "react-relay";

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

// This is the GraphQL query to find a journey by id
const query = graphql`
        query JourneyQuery($id: String!) {
            findJourneyById(id: $id) {
            id
            destination
            price
        }
    }
`;

class Journey extends Component {

    constructor(props) {
        super(props);
        // Contains the state of the component
        this.state = {
            error: null,
            isLoaded: false,
            journey: [],
            journeyId: props.match.params.id
        }
    };

    // Load a picture
    loadPicture(picture) {
        let img = '';
        try {
            img = require('../../assets/images/' + picture + '.jpg');
        } catch (e) {
            console.log('error', e);
        }
        return img;
    }

    // The render() of the Journey page
    render() {
        const { classes } = this.props;
        return (<QueryRenderer
            environment={environment} //Here is the enviroment that we configured before
            variables={{ //Passing the params/variables that we created
                id: this.state.journeyId
            }}
            query = {query} //And here goes your GraphQL query
            render = {
              ({ error, props }) => {
                if (error) {
                  //Here we pass our error view in case of query errors or fetch failure
                  return <div>{error.message}</div>;
                } else if (props) {
                  //Here we pass our component that should be rendered
                  return <div className={classes.root}>
                            <div className={classes.section1}>
                                <Grid container justify="center" alignItems="center">
                                    <Avatar alt={props.findJourneyById.destination} src={this.loadPicture(props.findJourneyById.destination)} className={classes.bigAvatar} />
                                </Grid>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h4">
                                            {props.findJourneyById.destination}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom variant="h6">
                                            $ {props.findJourneyById.price}
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
                //Here goes our activity indicator or loading view
                return <div>Loading...</div>;
              }
            }
          />
          )
    }
}

Journey.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Journey);
