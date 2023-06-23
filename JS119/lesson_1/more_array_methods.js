// Array.prototype.some


// > [1, 2, 3].some(num => num > 2)
// true

// > [1, 2, 3].some(num => num > 3)
// false

// There are two return values that we need to be aware of here: the return 
// value of the method call to some, and the return value of the callback on
//  each iteration. some looks at the truthiness of the callback's return
//   value to determine its own return value. If the callback function 
//   returns a truthy value for any element in the collection, then the 
//   some method will return true. In effect, the method asks "Are there
//    some values in the array for which the given callback returns a 
//    truthy value?".

// exp.

// let animals = { a: 'ant', b: 'bear', c: 'cat' };
// Object.values(animals).some(animalName => animalName.length > 4);
// // => false

// Object.values(animals).some(animalName => animalName.length > 3);
// // => true









// Array.prototype.every

// checks if every elem is truthy

// The every method works similarly to some. It also looks at the truthiness 
// of the callback's return value, but the method only returns true if the
//  callback's return value in every iteration is truthy (that is, not one
//    of the falsy JavaScript values).

// Copy Code
// > [1, 2, 3].every(num => num > 2)
// false

// > [3, 4, 5].every(num => num > 2)
// true


// exp. 

// let animals = { a: 'ant', b: 'bear', c: 'cat' };
// Object.values(animals).every(animalName => animalName.length > 2);
// //  => true







// Array.prototype.find


// The find method also takes a callback function as an argument and returns 
// the first element for which the callback function returns a truthy value:

// Copy Code
// > [2, 1, 4, 3, 5].find(num => num > 2)
// 4

// returns undefined if nothing is found

// > [2, 1, 4, 3, 5].find(num => num < 1)
// undefined







// Array.prototype.findIndex


// findIndex is similar to find except it returns the index of the element
//  for which the callback returns a truthy value:

// Copy Code
// > [2, 1, 4, 3, 5].findIndex(num => num > 2)
// 2

// obviously returns -1 if nothing is found because we a 
// returning indices












// Array.prototype.reverse
// The name of the reverse method is self-explanatory: it reverses the 
// elements of the array it's called on. The first element becomes the last,
//  and the last becomes the first.

// Copy Code
// > [1, 2, 5, 7, 3].reverse()
// [ 3, 7, 5, 2, 1 ]
// A crucial point to note about reverse is that it does the reversal in 
// place. In other words, it mutates the original array.

// Copy Code
// let nums = [1, 2, 3];
// nums.reverse(); // => [3, 2, 1]
// nums;           // => [3, 2, 1]


//if you dont want this behaviour, use slice to create a shallow copy






// Array.prototype.includes
// The includes method searches the array used to call it for an element 
// whose value is strictly equal (===) to the single argument. It returns
//  true when a matching element exists in the array and false when it 
//  doesn't.

// Copy Code
// > [2, 1, 3].includes(1)
// true

// > [2, 1, 3].includes(5)
// false


// Strictly speaking, includes does not actually use the === operator. 
// There's one place where you can clearly see that: you can use includes 
// to search for the NaN value even though you cannot use either === or == to
//  determine whether a value is NaN. That is, both NaN === NaN and 
//  NaN !== NaN return false.


// > NaN === NaN
// false

// > [2, NaN, 3].includes(NaN)
// true

//this will essentially be using Number.isNaN() to check 




// includes doesnt work to check if an object exist in an array, at least 
// not in the way you'd expect.

// let arr = ['a', 'b', {c: 'foo'}];
// arr.includes({c: 'foo'}); // => false

// This is because again, the includes method is behaving as though its using
//  === in most cases. In this case we are comparing references.



// example where they share the same value:

//  let obj = {c: 'foo'};
// let arr = ['a', 'b', obj];

// arr.includes(obj); // => true






// As with so many other array methods, includes is useful when working 
// with objects as well. For example, you could use it in conjunction with
//  Object.keys to determine whether a specific key exists in an object:


// let obj = {a: 'apple', b: 'banana', c: 'custard'};
// Object.keys(obj).includes('c'); // => true
// Object.keys(obj).includes('f'); // => false


//or you could just use hasOwnProperty
// Another method you can use to check if a key exists in an object is
//  Object.prototype.hasOwnProperty.

// let obj = {a: 'apple', b: 'banana', c: 'custard'};
// obj.hasOwnProperty('c'); // => true
// obj.hasOwnProperty('f'); // => false



// JavaScript arrays supply more than 30 methods