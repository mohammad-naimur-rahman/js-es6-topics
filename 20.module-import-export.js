// import / export

// to access import / export, first you need to turn on the module by creating a package.json and type
/*
{
    "type": "module"
} but it may not work, then the solution is given in the last line
*/
// import * as test from "./external.js" // import everything
// import {a, pi} from "./external.js" // named import
// import { a as varA, pi as varPi } from "./external.js"; // named import as other name variable

// console.log(varA, varPi);

// import something, { pi } from "./external.js"; // default import with named import
// to be noted, only one thing can be set as default

// console.log(something, pi);

import { myFunc } from "./external.js"; // function import

myFunc();

// you have to add type="module" in html script tag for import export