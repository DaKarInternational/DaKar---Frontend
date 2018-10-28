import React, { Component } from 'react'
import Journey from './../journey/Journey'
import axios from 'axios';
import JourneyService from '../../services/JourneyService'

/**
 * Component allowing the feature of creation of a journey
 */
class CreateJourney extends Component {

    constructor(props) {
        super(props);
        // Contains the state of the component
        this.state = {
            error: null,
            isLoaded: false,
            firstDisplay: true,
            journey: {} // empty object for init
        }
    };

    /**
     * Handle change on the input field
     * @param {} e the onChange event 
     */
    handleChange = function (e) {
        // console.log(e.target.name);
        switch (e.target.name) {
            case 'destination':
                this.setState({ destination: e.target.value });
                break;
            case 'price':
                this.setState({ price: e.target.value });
                break;
            default:
                console.error('No such state attribut')
                break;
        }
    }.bind(this);

    /**
     * Create the new Journey once the button is clicked
     * @param {} e the onClick event
     */
    createJourney = function (e) {
        JourneyService.test();

        let query = `mutation {
            createJourney(input:{ price: "${this.state.price}" destination: "${this.state.destination}" }){
                        price
                        destination
                    }
        }`;

        // These variables are optional we can leave empty
        const variables = {};

        try {
            // is there a way to use Relay here instead of directly axios ?
            axios.post('http://localhost:8080/graphql', {// TODO export this URL into a config file
                query,
                variables
            }).then((response) => {
                // Log the response so we can look at it in the console
                console.dir(response.data);
                // TODO : Gestion des erreurs
                // Set the data to the state
                this.setState(() => ({
                    isLoaded: true,
                    firstDisplay: false,
                    journey: response.data.data.createJourney // put the Journey that we received from the back in the state
                }));
                console.dir(this.state);
            });
        } catch (error) {
            // If there's an error, set the error to the state
            console.log('error: ' + error);
            this.setState(() => ({ error }))
        }
    }.bind(this);

    // The render() of the JourneyDisplay page
    render() {
        const { error, isLoaded, journey, firstDisplay } = this.state;
        let elementContent;
        if (error) {
            elementContent = <div>{error.message}</div>;
        } else if (firstDisplay) {
            elementContent = <div></div>
        } else if (!isLoaded) {
            elementContent = <div>Loading...</div>
        } else {
            // usage of the spread operator:
            // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition
            elementContent = <Journey {...journey} /> 
        }

        return (
            <div>
                <label htmlFor="destination">Journey destination: </label>
                <input id="destination" type="text" name="destination" onChange={this.handleChange} />
                <br />
                <label htmlFor="price">Price: </label>
                <input id="price" type="text" name="price" onChange={this.handleChange} />
                <br />
                <button onClick={this.createJourney}>Create</button>
                <div>
                    {elementContent}
                </div>
            </div>
        );
    }
}

export default CreateJourney;
