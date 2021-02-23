let numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.slice(1, 3); // (start index, end index (one index before))
console.log(result); // slice() return an array with sliced elements
console.log(numbers); // it doesn't change the main array