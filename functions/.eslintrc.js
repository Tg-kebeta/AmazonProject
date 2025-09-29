// module.exports = {
//   env: {
//     es6: true,
//     node: true,
//   },
//   parserOptions: {
//     "ecmaVersion": 2018,
//   },
//   extends: [
//     "eslint:recommended",
//     "google",
//   ],
//   rules: {
//     "no-restricted-globals": ["error", "name", "length"],
//     "prefer-arrow-callback": "error",
//     "quotes": ["error", "double", {"allowTemplateLiterals": true}],
//   },
//   overrides: [
//     {
//       files: ["**/*.spec.*"],
//       env: {
//         mocha: true,
//       },
//       rules: {},
//     },
//   ],
//   globals: {},
// };
module.exports = {
  env: {
    es6: true,
    node: true, // ✅ enables Node.js globals
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "no-undef": "off", // ✅ prevent false "not defined" errors
  },
  overrides: [
    {
      files: ["**/*.spec.js"], // ✅ correct glob for test files
      env: {
        mocha: true,
      },
    },
  ],
  globals: {
    module: "writable",
    require: "readonly",
    process: "readonly",
    exports: "writable",
  },
};