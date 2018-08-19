import React, { Component }  from 'react'
import Journey from './../journey/Journey'
import axios from 'axios';

/**
 * Class allowing display of the journey list
 */
class JourneyList extends Component {

state = {
  error: null,
  isLoaded: false,
  items: []
}

/**
 * The content is executed after the page is displayed
 */
componentDidMount() {
  // This is the GraphQL query for allJourney
  const query = `
  {
    allJourney {
      destination
      price
    }
  }
  `;

  // These variables are optional we can leave empty
  const variables = {};

  // We call the method here to execute our async function
  this.getJourneyList(query, variables)

}

/**
 * Get the journey list from the server
 */
getJourneyList = async (query, variables) => {
  try {
    const response = await axios.post('http://localhost:8080/graphql', {
      query,
      variables
    });

    // Log the response so we can look at it in the console

    // Set the data to the state
    this.setState(() => ({
      isLoaded: true,
      items: response.data.data.allJourney
    }));

  } catch (error) {
    // If there's an error, set the error to the state
    this.setState(() => ({ error }))
  }
}

// The new render()
render() {
  const { error, isLoaded, items } = this.state;

  if (error) {
    return <div>{error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  
    return items.map((journey, index) => (
      <Journey key={index} {...journey} />
    ));
  
  }
}

}

export default JourneyList;
