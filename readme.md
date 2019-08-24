# promiseThat

Helper functions for quickly wrapping mock data in promises for unit tests.

e.g.:

```typescript

import promiseThat from "promisethat";

// mock response that needs to be wrapped in promise
const data: {
    aProperty: "with a value",
};

// stubbed api call
sinon.stub(anApiLibrary, "anApiCall")
     .returns(promiseThat.resolvesWith(data));

```