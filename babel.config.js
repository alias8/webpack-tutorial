// module.exports = {
//   "presets": [
//     ["@babel/preset-env", {
//       "targets": {
//         "browsers": ["last 2 versions", "safari >= 7"],
//         "node": "current"
//       }
//     }],
//     "@babel/preset-typescript"
//   ]
// };

module.exports = {
  "presets": [
    "@babel/env",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
