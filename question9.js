const strings = ["hello", "world", "javascript"];
const capitalized = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(capitalized);