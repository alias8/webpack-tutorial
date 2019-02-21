import {promise2} from "./promises";

const promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('promise1');
  }, 300);
});

console.log("hello promise1" + promise1 + promise2);
