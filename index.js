const signatureRegex = /([a2-9tjqk]{1}|10)([cdhs]{1})/i;
const defaultOptions = {
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
const parse = (signature, userOptions = {}) => {
  const {castTto10} = {...defaultOptions, ...userOptions};
  let [, rank, suit] = signature.match(signatureRegex) || [];

  if (!rank || !suit) {
    return null;
  }

  if (castTto10 && rank === 't') {
    rank = '10';
  }

  return {rank, suit, signature: `${rank}${suit}`};
};

const validate = (signature) => {
  const matches = signature.match(signatureRegex);

  return Array.isArray(matches) && matches.length === 3;
};

module.exports = {
  parse,
  validate,
};
