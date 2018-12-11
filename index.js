const signatureRegex = /([a2-9tjqk]{1}|10)([cdhs]{1})/i;
const defaultOptions = {
  castTto10: false,
};

const unicodeSuits = {
  C: '♣',
  D: '♦',
  H: '♥',
  S: '♠',
};

/**
 * Accepts a card signature and an options object as parameter,
 * and returns the parsed data from it:
 *  - rank
 *  - suit
 *  - the signature itself
 *  - nice signature (suit is displayed with respective unicode symbol)
 *
 * Returns null if the signature could not be parsed.
 *
 * @param {string} signature A valid card signature, e.g: 'a4'
 * @param {object} userOptions An object of options
 * @returns {object|null} The parsed data or null
 */
const parse = (signature, userOptions = {}) => {
  const {castTto10} = {...defaultOptions, ...userOptions};
  let [, rank, suit] = signature.toUpperCase().match(signatureRegex) || [];

  if (!rank || !suit) {
    return null;
  }

  if (castTto10 && rank === 'T') {
    rank = '10';
  }

  return {
    rank,
    suit,
    signature: `${rank}${suit}`,
    niceSignature: `${unicodeSuits[suit]}${rank}`,
  };
};

/**
 * Returns whether the given signature is valid or not.
 *
 * @param {string} signature  A card signature
 * @returns {boolean} Is the signature valid
 */
const validate = (signature) => {
  const matches = signature.match(signatureRegex);

  return Array.isArray(matches) && matches.length === 3;
};

module.exports = {
  parse,
  validate,
};
