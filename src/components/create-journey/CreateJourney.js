import React, { Component } from 'react'
import Journey from './../journey/Journey'
import axios from 'axios';

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
     * Handle change on the input field
     * @param {} e 
     */
    handleChange = function(e) {
        // console.log(e.target)
        switch(e.target.name){
            case 'journey-id':
                this.setState({ journeyId: e.target.value });
                break;
            case 'destination':
                this.setState({ destination: e.target.value });
                break;
            case 'price':
                this.setState({ price: e.target.value });
                break;
            default:
                console.error('no such state attribut')
                break;
        }
    }.bind(this);

    /**
     * Create the new Journey
     * @param {} e 
     */
    createJourney = function(e) {
        // console.log(e)
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
                console.dir(this.state)
            });
        } catch (error) {
            // If there's an error, set the error to the state
            console.log('error : ' + error);
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
            elementContent = <Journey key={journey.id} {...journey} />
        }

        return (
            <div>
                <label htmlFor="journey-id">Journey id: </label>
                <input id="journey-id" type="text" name="journeyId" onChange={this.handleChange} />
                <br/>
                <label htmlFor="destination">Journey destination: </label>
                <input id="destination" type="text" name="destination" onChange={this.handleChange} />
                <br/>
                <label htmlFor="price">Create a journey : </label>
                <input id="price" type="text" name="price" onChange={this.handleChange} />
                <br/>
                <button onClick={this.createJourney}>Validate</button>
                <div>
                    {elementContent}
                </div>
            </div>
        );
    }
}

export default CreateJourney;