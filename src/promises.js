export const promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("promise2");
  }, 300);
});

console.log("hello promise2" + promise2);
