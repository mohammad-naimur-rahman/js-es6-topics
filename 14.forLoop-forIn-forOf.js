// for loop

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//for in loop

const myObj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brendan Eich'
}

for (property in myObj) { // for in is used in object and its param property iterate the properties or keys of the object
    console.log(property);
}
// for of loop

// for of can be applied in array and string as well

const myArr = [1, 3, 5, 7, 9];

for (element of myArr) {
    console.log(element);
}

// if for in is used in an array, it will return index
for (element in myArr) {
    console.log(element);
}

// in string
const myStr = 'Kolimullah';

for (element of myStr) {
    console.log(element);
}