var numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((prevValue, currValue, currIndex, arr) => {
    return prevValue + currValue;
}, 0); // reduce() takes 4 param, do things for prevValue and also currValue and in next iteration, it sets currValue as next prevValue, here, 0 is initial value for prevValue as it has no initial value for first iteration.. 3rd param is current Index and 4th is the whole array

console.log(sum);
console.log(numbers); // it doesn't change the main array