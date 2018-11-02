# playing-card-signature

[![Build Status](https://travis-ci.org/wolfika/playing-card-signature.svg?branch=master)](https://travis-ci.org/wolfika/playing-card-signature) [![codecov](https://codecov.io/gh/wolfika/playing-card-signature/branch/master/graph/badge.svg)](https://codecov.io/gh/wolfika/playing-card-signature)

> Parse playing card signatures, to programatically determine their rank and suit

**Ranks:** `A`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10` (or sometimes `T`), `J`, `Q`, `K`

**Suits:** ♣ clubs, ♦ diamonds, ♥ hearts, ♠ spades

When working with playing cards in software, the cards might be referred to using their signature. The signature is a shorthand notation of a card's rank and suit. For example, a card with a signature of `4s` actually means the `four of spades`.

This library aims to provide a lightweight and reusable way to parse, validate, and process these card signatures, for the purpose of making it easier to work with them.

> Note: This library supports the standard 52-card French deck only. Support for other decks is not planned.


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

Returns `null` if the signature could not be parsed.


### `validate(signature : string)`

Validates the given card signature, and returns a boolean, indicating the result.

Valid examples:
* `8d`
* `kh`
* `as`

Invalid examples:
* `s4`
* `dd`
* `11c`


## License

MIT © [Máté Farkas](https://github.com/wolfika)
