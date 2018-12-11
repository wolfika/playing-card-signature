import test from 'ava';
import fn from './index';

test('should be an object', (t) => {
  t.is(typeof fn, 'object');
});

test('should have a parse method', (t) => {
  t.is(typeof fn.parse, 'function');
});

test('#parse() should return an object with the correct number and type of properties', (t) => {
  const sampleResult = fn.parse('4s');

  t.is(typeof sampleResult, 'object');
  t.truthy(sampleResult.rank);
  t.truthy(sampleResult.suit);
  t.truthy(sampleResult.signature);
  t.truthy(sampleResult.niceSignature);
});

test('#parse() should return the correct rank, suit, and signature of the given card signature', (t) => {
  const samples = [
    {
      signature: '4s',
      expectedResult: {
        rank: '4',
        suit: 'S',
        signature: '4S',
        niceSignature: '♠4',
      },
    },
    {
      signature: 'ad',
      expectedResult: {
        rank: 'A',
        suit: 'D',
        signature: 'AD',
        niceSignature: '♦A',
      },
    },
    {
      signature: 'kc',
      expectedResult: {
        rank: 'K',
        suit: 'C',
        signature: 'KC',
        niceSignature: '♣K',
      },
    },
    {
      signature: 'th',
      expectedResult: {
        rank: 'T',
        suit: 'H',
        signature: 'TH',
        niceSignature: '♥T',
      },
    },
    {
      signature: '10h',
      expectedResult: {
        rank: '10',
        suit: 'H',
        signature: '10H',
        niceSignature: '♥10',
      },
    },
    {
      signature: '5C',
      expectedResult: {
        rank: '5',
        suit: 'C',
        signature: '5C',
        niceSignature: '♣5',
      },
    },
  ];

  samples.forEach((sample) => {
    t.deepEqual(fn.parse(sample.signature), sample.expectedResult);
  });
});

test('#parse() should provide option to cast T rank to 10', (t) => {
  const options = {
    castTto10: true,
  };
  const sample = {
    signature: 'tc',
    expectedResult: {
      rank: '10',
      suit: 'C',
      signature: '10C',
      niceSignature: '♣10',
    },
  };

  t.deepEqual(fn.parse(sample.signature, options), sample.expectedResult);
});

test('#parse() should return null if unable to parse signature', (t) => {
  t.is(fn.parse('cat'), null);
});

test('should have a validate method', (t) => {
  t.is(typeof fn.validate, 'function');
});

test('#validate() should return whether the signature given as a parameter is valid or not', (t) => {
  t.true(fn.validate('4c'));
  t.false(fn.validate('11i'));
  t.false(fn.validate('m323'));
  t.false(fn.validate('666'));
  t.false(fn.validate('1337'));
  t.false(fn.validate('i18n'));
});
