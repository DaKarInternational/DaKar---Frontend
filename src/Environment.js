
import { Environment, Network, RecordSource, Store } from "relay-runtime";

/**
 * This class is used to setup the relay client environment
 */

const store = new Store(new RecordSource);

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

// Function to send graphql on the endpoint
function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch('http://localhost:8080/graphql' , {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Auth Headers goes here
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network,
  store
});

export default environment;