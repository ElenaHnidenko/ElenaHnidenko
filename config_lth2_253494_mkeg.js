grape - 36
const fetchData = async url => { const response = await fetch(url); return response.json(); }
1 - 91,40,12,7,35,37,83,20,94,24,31,25,44,5,83,62,5,7,75,63,48,68,59,91,80,50,41,2,18,78,91,27,66,51,38,90,94,22,14,42,18,39,19,65,72,5,93,67,99,94,98,70,92,59,3,29,34,72,27,6,7,89,54,56,29,25,37,15,83,49,79,17,71,71,57,15,37,29

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const fetchData = async url => { const response = await fetch(url); return response.json(); }
banana

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
75,32,79,67,51,91,89,15,42,43,23,84,50,17,81,82,3,29,89,19,18,37,62,6,95,29,19,4,64,91,83,54,28,93,51,40,89,57,99,4,74,43,21 - apple

const squareRoot = num => Math.sqrt(num);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
grape

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
true * false
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

