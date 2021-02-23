let numbers = [1, 2, 3, 4, 5];

const result = numbers.splice(1, 3, 10, 11, 12); //(start index, length to splice out, from the 3rd param, it adds element in the main array after the 2nd param spliced out value...)
console.log(result); // splice() return an array according the param it gets
console.log(numbers); // splice() cut the values and return an array with rest of the element in main array, in here, 10, 11, 12 will be added between 1 and 5, cz they have been given by splice() as 3rd param