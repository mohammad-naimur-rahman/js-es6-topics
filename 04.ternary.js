// ternary operator

var age = 5;

// var type;
// if (age >= 18) {
//     type = 'adult';
// } else {
//     type = 'child';
// }

// in ternary way
//var type = (age >= 18) ? 'adult' : 'child';

// nested ternary operator

var type = (age >= 18) ? 'adult'
    : (age < 10)
        ? 'child'
        : 'young'

console.log(type);
// but this is not the best way to use nested ternary operator, use ternary operator for single condition that makes coding a bit easier

// another example
var isLoggedin = false;

//var access = isLoggedin ? true : false;
// more shortcut way
var access = isLoggedin;

console.log(isLoggedin);