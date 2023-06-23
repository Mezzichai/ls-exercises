// Functions as First-Class Objects and Higher-Order Functions




// the first class or first class object is used to describe
//  values that meet the following conditions:

  // They can be assigned to a variable or an element of a data 
  // structure (such as an array or object).

  // They can be passed as an argument to a function.

  // They can be returned as the return value of a function.


  // functons meet this critrea  
  // That, in turn, allows for a more declarative 
  // and expressive style of programming.



  // an imperative approach. It's called imperative since you're
  //  telling the interpreter what to do each step of the way:

  // Declare and initialize an empty transformedNumbers array.
  // Declare a counter.
  // Increment a counter.
  // Assign the element at the indexth index to currentNum.
  // Compute the square of currentNum and assign it to squaredNum.
  // Append the squared number to the end of the transformedNumbers array.
  // The second approach, on the other hand, uses what we call adeclarative approach. We're declaring what we need to do with the numbers array by saying "We want to map each element of the array to the return value of passing that element to the given callback function."



  // This declarative style of programming is possible
  //  only because we can treat functions as values. 


  // Array.prototype.forEach is a higher-order function - we 
  // can pass another function
  //  (the callback) to forEach as an argument.



//   [[1, 2], [3, 4]].map(arr => {
//     console.log(arr[0]);
//     return arr[0];
//   });


//       action:                     performed on               side effect

//   method call to map           the outer arr                        no
//   callback execution           Each sub-array                      no
//   method call to console log   arr[0] of each sub arr           outputs to console
//   element reference ([0])      arr[0] of each sub arr           no


//     return                                    is the return used

// new arr                                       no
// new elems for sub arrs of new arr             yes, by map to tranform arr
// undefined                                     no
// new elems for sub arrs of new arr              yes as the return value of the callback


// for the element access: 

// element access ([0])	
// Each sub-array	
// None	
// Element at index 0 of sub-array	
// Yes, used by console.log

// element access return itself




// undefined (variable declaration always evaluates to undefined)


// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });






// [[1, 2], [3, 4]].map(arr => {
//   return arr.map(num => num * 2);
// });


// If you look closely and try to understand every line of code, 
// there are more than 4 return values that you need to examine:
//  the num * 2 expression has a return value. By now, you 
//  should be starting to realize that the return value of every 
//  expression is important. You can ignore an expression's return 
//  value when it isn't used in the code. More often than not, 
//  though, some implied return value is used in subtle ways that 
//  affect your code. Pay attention to the details.







// [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
//   return Object.keys(object).every(key => object[key][0] === key);
// });

// => [ { c: 'cat', d: 'dog' } ]


// The first thing to notice here is the use of the every method 
// within the filter callback. Since filter specifically cares about
//  the truthiness of the callback's return value, using a method
//  that returns a boolean value works well. every will return true
//   if the callback passed to it returns a truthy value for the 
//   array of keys. We're using object[key][0] === key to test 
//   whether all keys match the first letter of all their 
//   associated values. Note that the only object that meets 
//   this criterion is {:c => 'cat', :d => 'dog'}, and the 
//   return value is an array.

// What would happen if, instead of using every, we used some?
//  How would this affect the return value of filter?


// the array would never be mutated








// [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
//   return arr.filter(item => {
//     if (typeof item === 'number') {    // if it's a number
//       return item > 13;
//     } else {
//       return item.length < 6;
//     }
//   });
// });
// // => [ [ 27 ], [ 'apple' ] ]
// At first, you might think to reach for the filter method to perform 
// the selection. However, since we're working with a nested array, 
// that won't work. We first need to access the nested arrays before 
// we can filter the value we want.






// [[[1, 2], [3, 4]], [5, 6]].map(arr => {
//   return arr.map(elem => {
//     if (typeof elem === 'number') { // it's a number
//       return elem + 1;
//     } else {                  // it's an array
//       return elem.map(number => number + 1);
//     }
//   });
// });

// => [ [ [ 2, 3 ], [ 4, 5 ] ], [ 6, 7 ] ]





// don't mutate the collection that you're iterating through; that 
// includes selection and transformation, as well as any other 
// terative method provided by JavaScript arrays.


// Here's an example of what not to do:

// Copy Code
// let arr = [1, 2];

// arr.map(element => arr.pop()); // => [ 2, <1 empty item> ]



// That's a strange result. You might have expected to get the return 
//  of [2, 1] but we get the array [ 2, <1 empty item> ]. If you log 
//  the result, you'll see that the returned array now has one
//   element. Mutating the array while in the middle of the map 
//   operation —an iterative operation— has jeopardized the
//    operation. Array.prototype.map is always supposed to return an
//     array with as many elements as the array it's called on. Here
//      though, it doesn't do that because we mutate the array during 
//      the map call.



// let arr = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]];

// arr.map(subArr => subArr.pop()); // [ [ 4 ], [ 'c' ] ]

// arr; // [ [ [ 1 ], [ 2 ], [ 3 ] ], [ [ 'a' ], [ 'b' ] ] ]
// Array.prototype.pop is destructive and mutates each subArr 
// (therefore changing the contents of arr) in the middle of a 
// transformation action. The return value in this example makes 
// a lot more sense, but we've mutated the original array in the 
// process as well, which is potentially confusing as the reader 
// is very likely to miss the side effect caused by the map call.
//  There's almost always a much clearer way of achieving the
//   desired result without having to resort to mutating the 
//   collection while iterating through it.


// avoid mutating methods during iteration