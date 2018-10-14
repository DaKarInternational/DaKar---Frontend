import React, { Component } from 'react'
import Journey from './../journey/Journey'
import { QueryRenderer, graphql } from "react-relay";
import environment from './../../Environment';

/**
 * Class allowing display of the journey list
 */

// This is the GraphQL query for allJourney
const query = graphql`
    query JourneyListQuery {
      allJourney {
        destination
        price
        id
      }
    }
    `;

// These variables are optional we can leave empty
const variables = {};

class JourneyList extends Component {

  state = {
    error: null,
    isLoaded: false,
    items: []
  }

  // This render the html page to display journey list
  render() {

    return (<QueryRenderer
      environment={environment} //Here is the enviroment that we configured before
      variables={variables} //Passing the params/variables that we created
      query={query} //And here goes your GraphQL query
      render={
        ({ error, props }) => {
          if (error) {
            //Here we pass our error view in case of query errors or fetch failure
            return <div>{error.message}</div>;
          } else if (props) {
            //Here we pass our component that should be rendered
            return props.allJourney.map((journey, index) => (
              <Journey key={index} {...journey} />
            ));
          }
          //Here goes our activity indicator or loading view
          return <div>Loading...</div>;
        }
      }
    />
    )
  }
}

export default JourneyList;