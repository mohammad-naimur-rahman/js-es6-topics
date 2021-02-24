// what is set? set is used for storing unique datas, its like an array but not array

function log(anything) {
    console.log(anything);
}

//let myArray = []; // array liteal syntax

//let myArray = new Array(); //constructor syntax

let mySet = new Set(); // set is always defined by constructor syntax

// method to add element in set
mySet.add(5); // number can be added
// to be noticed, if we add or delete in set, it returns a modified set, so, we can apply method further on it;
mySet.add(6).add(7);
mySet.add('Bangladesh'); // string can also be added

log(mySet.has(5)); // to check if any element exists
mySet.delete(5); // to delete an element
log(mySet);
log(mySet.size); // will return the length
mySet.clear(); // will clear the whole set
log(mySet);


// array to set
let arr = [1, 2, 3];
log(arr);
let set = new Set(arr);
log(set);

// anything is iterable[iterable means in which loop can be used] can be converted or added on set
// set is iterable, so, loop can done on it

for (value of set) { // using for of on set
    log(value);
}
// are set and array same thing? no...


// set to array

const myArr = [...set]; // converted set to array
log(myArr);

// another way
const newArr = Array.from(set);
log(newArr);


// firstly said, set is used for saving unique values
// if you want to add same value twice or more, it won't be added more than once
// lets see an example
let M = new Set();
M.add(7).add(8).add(9);
log(M);
M.add(8);
log(M); // it will result {7, 8, 9}

// here numbers that tried to added twice are iterable, so, it didn't add it twice, but if you want to add same object twice or more, it will add them multiple time, cz objects are reference type, not iterable
// but if you first set an object in a variable, then try to add that in set multiple times, it won't add the object multiple times

// Use case of set

// getting all the unique values from an array
let arrr = [1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 8, 8, 8];

log([...new Set(arrr)]); // first convert the array into set, then reconvert it to array again, then log it to the console

// if we reacll our memory from class 9, set were used for intersection or union... in js also, set is used for intersection or union

const A = new Set([1, 2, 3]);
const B = new Set([2, 3, 4, 6, 9]);

// union A U B
let union = new Set([...A, ...B]);
log(union);

// intersection A ⋂ B
let intersection = new Set([...A].filter(el => B.has(el)));
log(intersection);

// difference A \ B
let differece = new Set([...A].filter(el => !B.has(el)))
log(differece);


// WeakSet
// WeakSet is also like set but with fewer methods
// only object can be stored in WeakSet and also WeakSet is not iterable

const ws = new WeakSet();
ws.add({ a: 1 });
log(ws);
// WeakSet has only 3 method - add, delete and has

// Use case of WeakSet

const wset = new WeakSet();

class SomeClass {
    constructor() {
        ws.add(this);
    }
    method() {
        if (!ws.has(this)) {
            throw new Error('You cannot access this method directly')
        }
        return 'I am a method';
    }
}
const a = new SomeClass();
a.method(); // regular way

//log(SomeClass.prototype.method()); // this can be the second way to call the method.. but if you want uesr to force to use regular way, WeakSet comes in