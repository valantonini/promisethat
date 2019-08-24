# promisethat

[![Build Status](https://travis-ci.org/valantonini/promisethat.svg?branch=master)](https://travis-ci.org/valantonini/promisethat)
![npm](https://img.shields.io/npm/v/promisethat)

Helper functions for quickly wrapping mock data in promises for unit tests.

## usage
```bash
npm install promisethat --save-dev
```

e.g.:

```typescript

import promiseThat from "promisethat";

// mock response that needs to be wrapped in promise
const data: { aProperty: "with a value" };

// stubbed api call
sinon.stub(anApiLibrary, "anApiCall")
     .returns(promiseThat.resolvesWith(data));

```