import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { commitMutation, graphql } from "react-relay";
import environment from './../../Environment';

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
     * Create the journey mutation
     */
    createJourneyMutation = (destination, price, callback) => {

        const mutation = graphql`
            mutation CreateJourneyMutation($input: JourneyInput!) {
                createJourney(input: $input) {
                    price
                    destination
                }
            }
        `

        // Variables used by the mutation
        const variables = {
            input: {
                destination,
                price,
                owner: ""
            },
        }

        // Execute the mutation through relay
        commitMutation(
            environment,
            {
                mutation: mutation,
                variables,
                onCompleted: () => {
                    callback()
                },
                onError: err => {
                    console.error(err)
                    this.setState(() => ({ err }))
                }
            },
        )
    }

    /**
     * Create the journey
     */
    createJourney = () => {
        const { destination, price } = this.state
        this.createJourneyMutation(destination, price,
            () => {
                // We redirect to the list of journeys
                this.props.history.push('/journeys');
            })
    }

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