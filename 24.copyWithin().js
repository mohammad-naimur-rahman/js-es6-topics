//copyWithin(target, start, end) // it takes 3 param

const langs = ['Java', 'JavaScript', 'Ruby', 'C++', 'Go', 'Rust'];
//[(0)'Java',(1) 'JavaScript',(2) 'Ruby',(3) 'C++',(4) 'Go',(5) 'Rust']
// here I marked the position

const changedLangs = langs.copyWithin(3, 0, 2);
console.log(changedLangs); // ["Java", "JavaScript", "Ruby", "Java", "JavaScript", "Rust"]
console.log(langs); // it changed the main array

// here, start position is 0 where 'Java' stand and end position is 2 where 'Ruby' stands.. in between them, there are 'Java' and 'JavaScript'
// and the target position is 3 where 'C++' stands
// so, 'Java' and 'JavaScipt' wil be copied from 'C++'.. here if you notice 'C++' and 'Go' is removed and replaced by the copied items..
// this is because there is only one place for a single element

//[(-6)'Java',(-5) 'JavaScript',(-4) 'Ruby',(-3) 'C++',(-2) 'Go',(-1) 'Rust']
// copyWithin works with negative value too
// here I marked the negative position

//-- Features of copyWithing()
//copyWithin(target, start, end) // it takes 3 param
// target is requied, must be assigned
// start and end is not a must but by default start value is 0 and end value is array.length
// it never changes array.length
// it overwrites original array
// it returns modified array