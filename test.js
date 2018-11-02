import test from 'ava';
import fn from '.';

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
});

test('#parse() should return the correct rank, suit, and signature of the given card signature', (t) => {
  const samples = [
    {
      signature: '4s',
      expectedResult: {
        rank: '4',
        suit: 's',
        signature: '4s',
      },
    },
    {
      signature: 'ad',
      expectedResult: {
        rank: 'a',
        suit: 'd',
        signature: 'ad',
      },
    },
    {
      signature: 'kc',
      expectedResult: {
        rank: 'k',
        suit: 'c',
        signature: 'kc',
      },
    },
    {
      signature: 'th',
      expectedResult: {
        rank: 't',
        suit: 'h',
        signature: 'th',
      },
    },
    {
      signature: '10h',
      expectedResult: {
        rank: '10',
        suit: 'h',
        signature: '10h',
      },
    },
    {
      signature: '5C',
      expectedResult: {
        rank: '5',
        suit: 'C',
        signature: '5C',
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
      suit: 'c',
      signature: '10c',
    },
  };

  t.deepEqual(fn.parse(sample.signature, options), sample.expectedResult);
});

test('#parse() should return null if unable to parse signature', (t) => {
  t.is(fn.parse('cat'), null);
});
