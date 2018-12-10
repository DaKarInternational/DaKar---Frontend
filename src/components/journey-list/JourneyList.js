import React, { Component } from 'react'
import JourneyCard from '../journey-card/JourneyCard'
import { QueryRenderer, graphql } from "react-relay";
import environment from './../../Environment';
import Grid from '@material-ui/core/Grid';

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
      query = {query} //And here goes your GraphQL query
      render = {
        ({ error, props }) => {
          if (error) {
            //Here we pass our error view in case of query errors or fetch failure
            return <div>{error.message}</div>;
          } else if (props) {
            //Here we pass our component that should be rendered
            return <div>
              <Grid container spacing={24} style={{ padding: 24 }}>
                {props.allJourney.map((currentJourney) => (
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <JourneyCard journey={currentJourney} />
                  </Grid>
                ))}
              </Grid>
            </div>;



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