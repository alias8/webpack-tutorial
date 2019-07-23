const someNumber: number = 2;
console.log("testing typescript (just strips out type info): " + someNumber);
console.log("testing map transform from es6 to lower es: " + [1, 2].map((aNumber) => aNumber * 2));
console.log("testing includes (requires polyfill from @babel): " + [1, 2, 3].includes(2));

const a = [1, 2, 3].includes(2);
