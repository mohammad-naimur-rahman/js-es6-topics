// ES6 fat arrow function or arrow function

const number = () => 10; // returning single statement

const number2 = a => a ** 2; // taking only one param

const number3 = (a, b) => a + b; // taking multi param

const number4 = (a, b, c) => { // multiline statement
    let sum = a + b + c;
    return sum ** 2;
}

// this keyword in arrow function

var javascript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function () {
        this.libraries.forEach(element => console.log(`${this.name} loves ${element}`)); // forEach changes 'this' keyword, here, arrow function comes in for solving problems
    }
}

//javascript.printLibraries();

const serchInput = document.querySelector('.search');
const display = document.querySelector('.result');
const thanks = document.querySelector('.thanks');

function show() {
    display.innerHTML = this.value;
    setTimeout(() => {
        thanks.innerHTML = `You have typed: ${this.value}`;
    }, 1000);
}

// const show = () => {
//     display.innerHTML = this.value; // by this way, this will point at global object.. so, if someone wants the value of this from a object, then he should use normal function... it is okay to use normal function and arrow function at the same time in a project according to it's needs. normal function for getting value from object or in normal scenario and arrow function for js built in methods or with no this...
// }

serchInput.addEventListener('keyup', show);

// new keyword in fat arrow function

function Person(name) {
    this.name = name;
}

let manush = new Person('Manush');

// if

const Person2 = name => {
    this.name = name;
}; // this won't work this way