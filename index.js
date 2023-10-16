const firstName = "adam";
const dict = {};

for (let index = 0; index < firstName.length; index++) {
  const symbol = firstName[index];
  dict[symbol] ? dict[symbol]++ : (dict[symbol] = 1);
}

console.log("dict =", dict);
