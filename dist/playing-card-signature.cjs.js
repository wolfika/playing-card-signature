'use strict';

var signatureRegex = /([a2-9tjqk]{1}|10)([cdhs]{1})/i;
var defaultOptions = {
  castTto10: false,
};

/**
 * Accepts a card signature and an options object as parameter,
 * and returns the parsed data from it:
 *  - rank
 *  - suit
 *  - the signature itself
 *
 * Returns null if the signature could not be parsed.
 *
 * @param {string} signature A valid card signature, e.g: 'a4'
 * @param {object} userOptions An object of options
 * @returns {object|null} The parsed data or null
 */
var parse = function (signature, userOptions) {
  if ( userOptions === void 0 ) userOptions = {};

  var ref = Object.assign({}, defaultOptions, userOptions);
  var castTto10 = ref.castTto10;
  var ref$1 = signature.match(signatureRegex) || [];
  var rank = ref$1[1];
  var suit = ref$1[2];

  if (!rank || !suit) {
    return null;
  }

  if (castTto10 && rank === 't') {
    rank = '10';
  }

  return {rank: rank, suit: suit, signature: ("" + rank + suit)};
};

/**
 * Returns whether the given signature is valid or not.
 *
 * @param {string} signature  A card signature
 * @returns {boolean} Is the signature valid
 */
var validate = function (signature) {
  var matches = signature.match(signatureRegex);

  return Array.isArray(matches) && matches.length === 3;
};

module.exports = {
  parse: parse,
  validate: validate,
};
