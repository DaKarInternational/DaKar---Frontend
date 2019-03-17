import React, { Component } from 'react'
import JourneyCard from './../journey-card/JourneyCard'
import axios from 'axios';
import Button from '@material-ui/core/Button';

/**
 * Class allowing the feature of displaying a journey
 */
class JourneyDisplay extends Component {

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
        // It allows for the function to get "this"
        this.findJourney = this.findJourney.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    /**
     * Bring a journey from the server (graphql)
     */
    getJourney = async (query, variables) => { //TODO: see if we can use RxJs instead of async await
        try {
            const response = await axios.post('http://localhost:8080/graphql', { // TODO: put the URL in a properties file
                query,
                variables
            });

            // Log the response so we can look at it in the console
            console.log('response.data: ' + response.data)
            // TODO : Gestion des erreurs
            // Set the data to the state
            this.setState(() => ({
                isLoaded: true,
                firstDisplay: false,
                journey: response.data.data.findJourneyById
            }));
            // We redirect to a journey
            this.props.history.push(`/journey/${response.data.data.findJourneyById.id}`);

        } catch (error) {
            // If there's an error, set the error to the state
            console.log('error : ' + error);
            this.setState(() => ({ error }))
        }
    }

    /**
     * Handle change on the input field
     * @param {} e the onChange event
     */
    handleChange(e) {
        this.setState({ journeyId: e.target.value });
    }

    /**
     * Find a journey
     */
    findJourney() {
        // This is the GraphQL query for findJourney
        let query = `
            query findJourney {
                findJourneyById(id:"${this.state.journeyId}") {
                    id
                    destination
                    price
                }
            }`;

        // These variables are optional we can leave empty
        const variables = {};

        // We call the method here to execute our async function
        this.getJourney(query, variables)
    }

    // The render() of the JourneyDisplay page
    render() {
        return (
            <div>
                <label htmlFor="journey-id">Visualiser une journey : </label>
                <input id="journey-id" type="text" name="journeyId" onChange={this.handleChange} />
                <Button onClick={this.findJourney} variant="contained" color="primary">Valider</Button>
            </div>
        );
    }

}

export default JourneyDisplay;
