import pImport from 'postcss-import';
import pUrl from 'postcss-url';
import pPreset from 'postcss-preset-env';

module.exports = {
  plugins: [
    pImport,
    pUrl,
    pPreset({
      browsers: 'last 2 versions',
      stage: 0,
    }),
  ],
};
