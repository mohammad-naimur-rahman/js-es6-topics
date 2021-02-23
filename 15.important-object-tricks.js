var x = 5;
var y = 6;
var z = x * y;

var myObj = {
    name: 'JavaScript',
    founder: 'Brendan Eich',
    estd: 1995,
    ranking: 1,
    // x: x,
    // y: y,
    // z: z
    x, //Object shorthand
    y, //Object shorthand
    z //Object shorthand
};

var keys = Object.keys(myObj); // an array of all the keys of the object
var values = Object.values(myObj); // an array of all the values of the object
var entries = Object.entries(myObj); // an array of keys and values and the are also in arrays
console.log(keys, values, entries);