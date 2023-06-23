
                                  FOREACH


// How does the callback know what number is? For each iteration, forEach
//  sends the value of the current element to the callback in the form of
//   an argument. In this callback, the parameter is number; it represents
//    the value of the current element in the array.



// foreach also passes a second argument to the callback, the index position of 
// the element in the array



// let produceKeyValues = Object.entries(produce);
// // produceKeyValues contains:
// //   [['apple', 'Fruit'],
// //    ['carrot', 'Vegetable'],
// //    ['pear', 'Fruit'],
// //    ['broccoli', 'Vegetable']]

// produceKeyValues.forEach(keyValue => {
//   let [ key, value ] = keyValue;

//   console.log(`${key} is a ${value}`);
// });
// // logs:
// // apple is a Fruit
// // carrot is a Vegetable
// // pear is a Fruit
// // broccoli is a Vegetable





// let [ key, value ] = keyValue;

// this is array destructuring assignment. we can assign elements of the array
//  to multiple variables by wrapping the variable names in brackets. 
//  The first element gets assigned to the first variable, the second 
//  element gets assigned to the second variable, and so on. We can rewrite
//   that line without array destructuring assignment as follows:

// Copy Code
// let key = keyValue[0];
// let value = keyValue[1];




// foreach of course returns undefined


// > let val = [1, 2, 3].forEach(num => console.log(num))
// > val
// undefined









                              FILTER


// To perform the selection, filter examines the return value of the callback
//  on each iteration. It determines the truthiness of the return value.


// JavaScript treats six values as falsy:

//  undefined, null, NaN, 0, -0, 0n, '', and false





// Note that the body of the callback function in the above example is a 
// single expression. That means that we can eliminate the curly braces 
// and the return keyword, and it'll still work:

// [1, 2, 3].filter(num => num % 2 === 1); // => [ 1, 3 ]

// This code provides a much more succinct way to do things. It's the 
// preferred approach if your callback has a simple one-line selection 
// criterion.




// [1, 2, 3].filter(num => num + 1);
// [ 1, 2, 3 ]

// Here, the callback's return value is always truthy. 
// If the value is anything other than the six falsy values mentioned above, 
// it's truthy. In this case, the return value is always an integer greater 
// than 0, all of which are truthy.



// > [1, 2, 3].filter(num => {
//   ...   num + 1;
//   ... })
//   []
//   filter now returns an empty array. Why is that? Since our callback 
//   doesn't explicitly return a value, its implicit return value is
//    undefined. Since undefined is falsy, filter won't select any elements.




// That sort of works, but the return value isn't ideal: it returns an
//  array, not an object as we want. Maybe we can convert the array to
//   an object using forEach:

// Copy Code
// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceKeyValues = Object.entries(produce);
// let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
//   let [ key, value ] = keyValue;
//   return value === 'Vegetable';
// });

// let onlyVegetables = {};

// onlyVegetablesArr.forEach(keyValue => {
//   let [ key, value ] = keyValue;
//   onlyVegetables[key] = value;
// });

// onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
// Okay, that works, but it's complicated logic. Can we simplify it? 
// Let's try using forEach by itself without using filter at all:

// Copy Code
// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceKeyValues = Object.entries(produce);
// let onlyVegetables = {};

// produceKeyValues.forEach(keyValue => {
//   let [ key, value ] = keyValue;
//   if (value === 'Vegetable') {
//     onlyVegetables[key] = value;
//   }
// });

// onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
// Oh, that's better. This code is much more succinct than the previous code.
// For each is better suited to filtering an object than using a combo of 
// foreach and filter














                                            MAP 


// uses the return value of the callback to perfrom transformation instead 
// of selection



// [1, 2, 3].map(num => num * 2);

// In this example, the return value of the callback function is the 
// product of num and 2. map then takes this value and places it in a new 
// array. This process repeats for each element in the original array. We 
// can see what the return value of map looks like in the console.

// > [1, 2, 3].map(num => num * 2)
// [ 2, 4, 6 ]







// What happens if we write code that doesnt appear to be transforming? For instance
// a comparison?

// The key is to remember that map always perform transformation based on the
// return of the callback, so in this case the callback would be a boolean, 
// therefore map would return an array of booleans


// > [1, 2, 3].map(num => num % 2 === 1)
// [ true, false, true ]






// [1, 2, 3].map(num => {
//   num * 2;
// });

// [ undefined, undefined, undefined ]

// This is because there is no return explicity stated and the body uses curly
// brackets, meaning undefined will be returned every time the callback is 
// invoked




// For instance, suppose we want to select all of the vowels in a string 
// and get a new string that contains all of those vowels, and nothing else.
//  We can use split, filter, and join like so:

// Copy Code
// let str = "What's up, Doc?";
// str.split('')
//    .filter(char => 'aeiou'.includes(char.toLowerCase()))
//    .join('');
// // => 'auo'













SORT




To sort the elements in an array without mutating the original array, 
use toSorted().


// [...array] prevents mutation, eturns shallow copy
