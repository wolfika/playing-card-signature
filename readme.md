# playing-card-signature

[![Build Status](https://travis-ci.org/wolfika/playing-card-signature.svg?branch=master)](https://travis-ci.org/wolfika/playing-card-signature) [![codecov](https://codecov.io/gh/wolfika/playing-card-signature/branch/master/graph/badge.svg)](https://codecov.io/gh/wolfika/playing-card-signature)

> Parse playing card signatures, to programatically determine their rank and suit


## Installation

`yarn add playing-card-signature`


## Usage

```javascript
const { parse } = require('playing-card-signature');

const options = {
  castTto10: false,
};

console.log(parse('4s', options)); // { rank: '4', suit: 's', signature: '4s' }
```


## API

### `parse(signature : string, options : object)`

Accepts a card signature and an options object as parameter, and returns the parsed data from it:
* rank
* suit
* the signature itself

Returns null if the signature could not be parsed.


## License

MIT © [Máté Farkas](https://github.com/wolfika)
