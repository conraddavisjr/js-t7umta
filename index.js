// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>Hey CJ!</h1>`

// appDiv.append('hey')

// appDiv.append(' another line')
// appDiv.innerHTML = `<h1>Hey CJ!</h1>`;

const shoe = document.getElementById('shoe');
var blue = 'blue';

// TASK 1
// make the variable shoe target the id shoe in the DOM ---> in other words redo line 5, but target 'shoe' instead

// TASK 2
// create another id in the DOM (HTML)
// and edit its innerHTML. Make its value
//  an h2 with the content WE MADE IT!!!

//  Vocabulary
//  DOM - Document Object Model
/**
 * Tree
 * root
 * variable
 * selector
 * target
 *
 */

function Person(name) {
  function run() {}
  function walk() {}

  return {
    run,
    walk,
  };
}

const CJ = Person('CJ');
CJ.run();

const water = document.getElementById('water');
water.innerHTML = `WE MADE IT!!!`;

// ASSIGNMENT
// const, let, var
// TELL ME WHAT EACH IS, and what are their differences
// Show an example using each
// Const: A keyword that defines a variable or pointer as unchangeable
// const y = 2;
// let: a keyword that is used to declare a block scoped varaible
let x = 8;
//var: statement that declares a function-scoped or globally-scoped variable.
var z = 24;
//Differences between Const,let,var: "Var declarations are globally or functionally scoped while let and const are block scoped.Var can be updated and redeclared, let can be updated but not redeclared, and const can do neither".
//
// DATA TYPES ---> "water"
//
// ASSIGNMENT
//
// Complete the examples for the data types
// Object, null, and undefined
//
// Create something using each... report it to the console
//
// string --> "Hello" --> 'hello'
const myString = 'hello';
const myString2 = ' CJ';
console.log('THIS IS THE STRING EXAMPLE: ', myString + myString2);

// number --> 1345
const a = 24 + 4;
console.log(a);
// boolean --> true / false
const a1 = 'true';
const b1 = 'false';
console.log(24 == 8);
// array -> [1, "hello", false, 4, 45, 5]
// const bev = ['juice , tea'];
// console.log(bev.length);
/* object -> {property1: value1,property2:value2.....propertyN:valueN
} */
const person = {
  name: ' Justin ',
  age: 25,
};
console.log(person.name);
// null --> variable === null
const n = null;
console.log(typeof n);
// undefined --> typeof x === undefined
let name;
console.log(name);

/// Discuss
// array, object, null, undefined

//
const y = 'CJ';
// let: a keyword that is used to declare a block scoped varaible
let CareyJrFullName = 'Carey Orlando Davis Jr';
CareyJrFullName = 'Carey Orlandooo Davis Jr';
//var: statement that declares a function-scoped or globally-scoped variable.
// var z = 298984;

const bev = [
  'juice',
  'tea',
  1,
  false,
  {},
  [[1, 2, 3], ['CJ']],
  null,
  undefined,
  ['Hello!!'],
];
console.log(bev);
// arrays are index-based

// 1) Get the "juice" value from the bev array, and assign it to the variable flavor
// console.log "juice", using the value pulled from the array
const flavor = bev[0];
console.log('bev[0]', flavor);

// 2) Get the "Hello!!" value from the bev array, and assign it to the variable greeting
// console.log greeting, using the value pulled from the array
const greeting = bev[8][0];
console.log('greeting', greeting);
// 3) Pull the string-literal value of "CJ" from the bev array, and assign it to the variable name1
// let name1 = undefined
// console.log "CJ", using the value pulled from the array
let name1 = bev[5][1][0];
console.log('CJ', name1);
let name2 = bev[5][0][2];
console.log('Uncle jay', name2);

let numbersArray = [
  1, 2, 3, 49, 5, 90, 67, 8, 9, 10, 100, 17, 2, 3, 49, 5, 60, 7, 865, 9, 150,
  100, 16, 27, 3, 49, 5, 60, 17, 88, 9, 10, 100, 1, 2, 3, 49, 5, 60, 74, 0, 9,
  10, 100, 31, 2, 388, 49, 35, 60, 7, 8, 9, 10, 100, 1, 2, 783, 49, 5, 60, 7, 8,
  9, 10, 100, 111, 2, 321, 49, 52, 60, 547, 8, 39, 10, 100, 1, 2, 3, 459, 25,
  60, 7, 8, 9, 10, 100, 12, 2, 3, 49, 554, 60, 7, 28, 99, 190, 100, 199, 2, 3,
  49, 5, 60, 57, 78, 9, 10, 1800, 100, 111, 2, 321, 49, 52, 60, 547, 8, 39, 10,
  100, 1, 2, 3, 459, 25, 60, 7, 8, 9, 10, 100, 12, 2, 3, 49,
];

let results = [];

for (let i = 0; i < numbersArray.length; i++) {
  // const currentValue = numbersArray[i];
  results.push(numbersArray[i] * 2);
  // Short circut
  // if (i > 100) {
  //   console.log('Breaking this loop');
  //   break;
  // } else {

  // }
}

// Comparison operators
//
// < less than
// > greater than
// === equal to
//
console.log('results: ', results);
console.log(numbersArray.map((x) => x * 2));

// every time you get a value that is equal to 100
// console.log(WOAH!! Keeping it 100 :P) and return 100.
// DON'T multiply that value by 2. you MUST still multiply
// all other values by 2, as long as they're not 100. Don't opertate on it.
// addtionally, console.log() the index of the value 100
