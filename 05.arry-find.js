// Array.prototype.find()

var nums = [4, 5, 2, 45, 6];

const result = nums.find(el => el > 2);// when any value return true value, find() will stop and return that value only
// find() is used for finding an(and only one) element under a specific condition
// and also, find() doesn't change the main array

console.log(result);

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     test() {
//         console.log('hello');
//     }
//     exampleFunction() {
//         let array = [1, 2, 3];
//         array.find(function () {
//             this.test();
//         }, this);
//     }
// }

// by arrow function, things get easier
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log('hello');
    }
    exampleFunction() {
        let array = [1, 2, 3];
        array.find(() => {
            this.test();
        });
    }
}

let student = new Student('sumit', 35);

student.exampleFunction();