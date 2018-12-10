import React, { Component } from 'react'
import JourneyCard from './../journey-card/JourneyCard'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    parent: {
        width: 500,
        margin: '0 auto',
      },
    actions: {
        textAlign: 'center',
        marginTop: 20,
    }
});

/**
 * Class allowing the feature of creation of a journey
 */
class CreateJourney extends Component {

    constructor(props) {
        super(props);
        // Contains the state of the component
        this.state = {
            error: null,
            isLoaded: false,
            firstDisplay: true,
            journey: [],
            journeyId: null
        }
    };

    /**
     * Save the value of the field when it changes
     */
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    /**
     * Create the new Journey
     * @param {} e 
     */
    createJourney = function (e) {
        let query = `mutation {
            createJourney(input:{ price: "`
        query += this.state.price
        query += `" destination: "`
        query += this.state.destination
        query += `" }){
                        price
                        destination
                    }
        }`;

        // These variables are optional we can leave empty
        const variables = {};

        try {
            axios.post('http://localhost:8080/graphql', {
                query,
                variables
            }).then((response) => {
                // Log the response so we can look at it in the console
                console.dir(response.data)
                // TODO : Gestion des erreurs
                // Set the data to the state
                this.setState(() => ({
                    isLoaded: true,
                    firstDisplay: false,
                    journey: response.data.data.createJourney
                }));
                // We redirect to the list of journeys
                this.props.history.push('/journeys');
            });
        } catch (error) {
            // If there's an error, set the error to the state
            console.log('error : ' + error);
            this.setState(() => ({ error }))
        }
    }.bind(this);

    /**
     * Display the form
     * If there is an error, it's also displayed
     */
    render() {
        const { classes } = this.props;
        // Gestion d'erreur à définir
        // const { error, isLoaded, journey, firstDisplay } = this.state;
        // let elementContent = <div></div>;
        // if (error) {
        //     elementContent = <div>{error.message}</div>;
        // } else if (firstDisplay) {
        //     elementContent = <div></div>
        // } else if (!isLoaded) {
        //     elementContent = <div>Loading...</div>
        // } else {
        //     elementContent = <JourneyCard key={journey.id} {...journey} />
        // }

        return (

            <div className={classes.parent}>
                <form>
                    <div className={classes.container}>
                        <TextField
                            id="destination"
                            label="Destination"
                            className={classes.textField}
                            onChange={this.handleChange('destination')}
                            margin="normal"
                        />
                        <TextField
                            id="price"
                            label="Price"
                            className={classes.textField}
                            onChange={this.handleChange('price')}
                            margin="normal"
                        />
                    </div>
                    <div className={classes.actions}>
                        <Button onClick={this.createJourney} variant="contained" color="primary">Valider</Button>
                    </div>
                </form >
            </div>
        );
    }
}

CreateJourney.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateJourney);