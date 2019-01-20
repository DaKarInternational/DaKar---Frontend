/**
 * @flow
 * @relayHash 5c7add430fbcb35fc4da255264f40b65
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type JourneyInput = {
  destination: string,
  price: string,
};
export type CreateJourneyMutationVariables = {|
  input: JourneyInput
|};
export type CreateJourneyMutationResponse = {|
  +createJourney: ?{|
    +price: string,
    +destination: string,
  |}
|};
export type CreateJourneyMutation = {|
  variables: CreateJourneyMutationVariables,
  response: CreateJourneyMutationResponse,
|};
*/


/*
mutation CreateJourneyMutation(
  $input: JourneyInput!
) {
  createJourney(input: $input) {
    price
    destination
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "JourneyInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "JourneyInput"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "destination",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateJourneyMutation",
  "id": null,
  "text": "mutation CreateJourneyMutation(\n  $input: JourneyInput!\n) {\n  createJourney(input: $input) {\n    price\n    destination\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateJourneyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createJourney",
        "storageKey": null,
        "args": v1,
        "concreteType": "Journey",
        "plural": false,
        "selections": [
          v2,
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateJourneyMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createJourney",
        "storageKey": null,
        "args": v1,
        "concreteType": "Journey",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '73193ea2df5838b6cf534607f1b1ca1d';
module.exports = node;
