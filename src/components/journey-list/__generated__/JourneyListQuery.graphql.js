/**
 * @flow
 * @relayHash f97331fb5e40a7ba8a77e59c281d11c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type JourneyListQueryVariables = {||};
export type JourneyListQueryResponse = {|
  +allJourney: ?$ReadOnlyArray<{|
    +destination: string,
    +price: string,
    +id: string,
  |}>
|};
export type JourneyListQuery = {|
  variables: JourneyListQueryVariables,
  response: JourneyListQueryResponse,
|};
*/


/*
query JourneyListQuery {
  allJourney {
    destination
    price
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allJourney",
    "storageKey": null,
    "args": null,
    "concreteType": "Journey",
    "plural": true,
    "selections": [
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "JourneyListQuery",
  "id": null,
  "text": "query JourneyListQuery {\n  allJourney {\n    destination\n    price\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "JourneyListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "JourneyListQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a2905abc996ff1b8a83b13124d3b5ec7';
module.exports = node;
