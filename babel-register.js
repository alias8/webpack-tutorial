// Tell Babel to compile all JS/TS extensions
require("@babel/core").transform("code", {
  presets: ["@babel/preset-typescript"],
});
