/*
* note that ts-loader does not polyfill .includes
* see http://kangax.github.io/compat-table/es2016plus/
* */
const test = "something".includes("s");
console.log(test);
