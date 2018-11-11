import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify-es';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'index.js',
  output: {
    name: 'playingCardSignature',
    exports: 'named',
  },
  plugins: [
    buble({
      objectAssign: 'Object.assign',
    }),
  ],
};

if (argv.format === 'umd') {
  config.plugins.push(uglify());
}

export default config;
