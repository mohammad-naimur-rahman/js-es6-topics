var numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.findIndex(el => el > 5); // findIndex() is similar like find(), but it return the index only... // if it can not find the specific value, it will return -1
console.log(result);