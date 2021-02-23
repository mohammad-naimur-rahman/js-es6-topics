// spread operator

var myNumbers = [1, 2, 3]

var newNumbers = [...myNumbers, 4, 5, 6];
console.log(newNumbers);

var a = myNumbers; // mutately set
var b = [...myNumbers]; // exact copy of numbers (immutable way)

console.log(a);
console.log(b);

myNumbers.push(6);
console.log(myNumbers); // added 6
console.log(a); // added 6
console.log(b); // didn't added 6

var nums1 = [1, 2, 3];
var nums2 = [4, 5, 6];
var nums = [...nums1, ...nums2];
console.log(nums);

// object spreading

var myObj1 = {
    x: 1,
    y: 2
}

var myObj2 = {
    a: 1,
    b: 2
}

console.log({
    ...myObj1,
    ...myObj2
});