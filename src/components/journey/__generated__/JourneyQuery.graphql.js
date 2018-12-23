/**
 * @flow
 * @relayHash 0b87b69de622f2133fef6ebd6b36a50a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type JourneyQueryVariables = {|
  id: string
|};
export type JourneyQueryResponse = {|
  +findJourneyById: ?{|
    +id: string,
    +destination: string,
    +price: string,
  |}
|};
export type JourneyQuery = {|
  variables: JourneyQueryVariables,
  response: JourneyQueryResponse,
|};
*/


/*
query JourneyQuery(
  $id: String!
) {
  findJourneyById(id: $id) {
    id
    destination
    price
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "findJourneyById",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "String!"
      }
    ],
    "concreteType": "Journey",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "destination",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "price",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "JourneyQuery",
  "id": null,
  "text": "query JourneyQuery(\n  $id: String!\n) {\n  findJourneyById(id: $id) {\n    id\n    destination\n    price\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "JourneyQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "JourneyQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ef9cc2dfc16730b05190f77b49ab6f9';
module.exports = node;
