// Object destructuring

const user = {
    id: 445,
    name: 'Man',
    age: 12,
    // education: {
    //     degree: 'Masters',
    // },
};

// take out the name from the object and set as a variable
// var name = user.name; // old way
// console.log(name);

const { name } = user; // es6 way
const { name: title } = user; // save name as title
console.log(name, title);

const { education: { degree: education } = {} } = user; // if education was not not defined up in the object, it would occur an error, to handle this, use a default value.. here the empty object will set the default value and it will return undefined instead of error
console.log(education);

// Array destructuring

var numbers = [1, 2, 3, 4, 5, 6];

var [a, b] = numbers;
console.log(a, b);

var [, c, , , , d] = numbers; // assigning 2 and 6 from the array
console.log(c, d);

var numbers2 = [1, 2, [3, 4, 5], 6, 7];

var [, , [e, f]] = numbers2;
console.log(e, f);

// value swaping

var [m, n] = [100, 200];
console.log(m, n);

[n, m] = [m, n];
console.log(m, n);
