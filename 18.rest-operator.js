//old way
function myFunc() {
    console.log(arguments);
}

myFunc(5, 6, 7); // it results array like object

// rest operator way

function myFunc2(...params) { // when triple dot (...) is used as param, it is called rest operator or rest parameter
    console.log(params);
}

myFunc2(5, 6, 7); // it will return an array

// to be noted, rest parameter can only be used as last pareameter in case of multi parameter, if you give multiple param, the first ones will behave like normal param and rest param will return ar array.. you can use rest param only once in a function