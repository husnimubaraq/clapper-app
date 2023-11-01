/* eslint-disable unicorn/prefer-module */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      "nativewind/babel"
    ],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],  
          root: ['./'],
          alias: {
            "apis": "./apis",
            "components": "./components",
            "features": "./features",
            "hooks": "./hooks",
            "layouts": "./layouts",
            "types": "./types",
            "utils": "./utils"
          }
        },
      ],
      'react-native-reanimated/plugin'
    ],

  };
};
