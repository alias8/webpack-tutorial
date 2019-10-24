
import get from "lodash/get";

/*
* note that ts-loader does not polyfill .includes
* see http://kangax.github.io/compat-table/es2016plus/
* */
// const test = "something".includes("s");
// console.log(test);

const object = { a: [{ b: { c: 3 } }] };
console.log(get(object, ["a", "0", "b", "c"]));
