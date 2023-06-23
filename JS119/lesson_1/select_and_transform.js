// Besides iteration, the two most common actions to perform on 
// a collection are selection and transformation.

// selection is picking out some specific elements from a collection

// transformation is manipulating every element in the collection


// Selection and transformation both use the basics of looping: a loop, a
//  counter, a way to retrieve the current value, and a way to exit the loop.

// both selections and transformation need critrea to perform actions



// let numbers = [1, 3, 9, 11, 1, 4, 1];
// let ones = [];

// for (let counter = 0; counter < numbers.length; counter++) {
//   let currentNum = numbers[counter];

//   if (currentNum === 1) {
//     ones.push(currentNum); // appends currentNum to the ones array
//   }
// }

// ones; // => [1, 1, 1]
// The if condition determines which values are selected and which are 
// ignored; this is the selection criterion. The rest of the code is your
//  typical iteration code.


// When performing a transformation, it's always important to pay attention 
// to whether the original collection is mutated or if a new collection is 
// returned.






// function selectFruit(obj) {
//   let newObj = {}
//   for (key in obj) {
//     if (obj[key] === "Fruit") {
//       newObj[key] = "Fruit"
//     }
//   }
//   return newObj
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }











// function doubleNumbers(numbers) {
 
//   let counter = 0;

//   while (counter < numbers.length) {
//     numbers[counter] *= 2
//     counter += 1;
//   }
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);            






// function doubleNumbers(numbers, operand) {
 
//   let counter = 0;
//   let result = []
//   while (counter < numbers.length) {
//       result.push(numbers[counter] * operand)
//       counter += 1;
//     }
//   return result
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// doubleNumbers(myNumbers); 
// console.log(doubleNumbers(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18] 
// console.log(myNumbers);



// iteration, selection or transformation operations 


// Finally, it's common to chain actions on collections, but pay particular 
// attention to the return value, especially if the return value is an empty
//  collection or undefined. Trying to chain methods on empty collections or 
//  undefined is dangerous and results in a lot of broken programs.