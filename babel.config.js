// @flow strict

/*::
 
type ApiType = {|
  +assertVersion: number => void,
  +cache: {|
    forever: () => void
  |}
|}
 
*/

module.exports = function(api /*: ApiType */) {
  api.assertVersion(7);
  api.cache.forever();
  const presets = ['@adeira/babel-preset-adeira'];

  return {
    presets,
    babelrcRoots: ['.', './src/*'],
  };
};
