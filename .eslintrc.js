module.exports = {
  "env": {
    "es2021": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prop-types": "off",
    "indent": [
      "error",
      2
    ],
    "linebreak-style": ["error", "windows"],  // changes the file to LF
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
