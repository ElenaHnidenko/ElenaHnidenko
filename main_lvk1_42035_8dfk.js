const variableName = getRandomNumber();
const formatDate = date => new Date(date).toLocaleDateString();

35 - 9
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
