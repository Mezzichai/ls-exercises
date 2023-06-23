// Note that we use bracket notation within the loop. We can't use dot 
// notation here since prop is a variable that contains a property name.
//  The name prop is not the actual property name. That distinction is
//   subtle, so stop a moment to think about it.


// For instance, in the second iteration of the loop, prop will be set to age.
//  If we try to use person.prop, though, it will evaluate to undefined since
//   prop is not one of the property names in the person object. We actually
//    want person.age, but we can't use that since we'll want a different
//     property name during each iteration. When we write person[prop], prop
//      gets evaluated as a variable. Thus, person[prop] gets evaluated as 
//      person['age'], and that returns the value of the desired property.


// you should use hasownproperty to make sure you arent iterating over another
// prototypes props

// Object.keys is obviously a static method, because it it being called from
// the constructor









// while (true) {
//   let number = Math.floor(10 * Math.random());
//   console.log(number);

//   if (number === 5) {
//     console.log('Exiting...');
//     break;
//   }
// }
// That mimics the behavior of a do/while loop. For instance, here's the equivalent do/while
//  code:

// Copy Code
// let number;

// do {
//   number = Math.floor(10 * Math.random());
//   console.log(number);
// } while (number !== 5);

// console.log('Exiting...');


// If we put the break at the beginning of the loop, it mimics a regular while loop:

// Copy Code
// let str = '';

// while (true) {
//   if (str.length >= 10) {
//     break;
//   }

//   str += '*';
//   console.log(str);
// }







// Looping comprises four primary elements: a looping construct such as for or while, a 
// counter (or control variable), a way to retrieve a current value, and a way to exit the 
// loop. It's important to understand how to manually loop over collections with nothing more
//  than these 4 tools. It's often tempting to go "method hunting" to search for a method to 
//  iterate over a collection, but, if you master the basics of looping, you'll find that you
//   can perform nearly any operation you need with the simple techniques in this assignment.
//    Methods can be useful, but they shouldn't be used as a crutch.