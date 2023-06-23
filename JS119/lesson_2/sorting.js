// [2, 11, 9, 4, 107, 21, 1].sort();

// >>[
//   1, 107, 11, 2,
//  21,   4,  9
// ]

// the reason for this behaviour is this, js converts all the nums to 
// strings and compares by unicode char codes, therefore all the numbers
// that begin with one come first and so on. Essentially the 2nd
// digit is never parsed.

// When sort is called with no arguments, all elements except those
// that are `undefined` are coerced to strings


// > [null, 'a', true, 1].sort()
// [ 1, 'a', null, true ]


// undefined are special cases in terms of sorting, they are always 
// placed at the end of the Array

// > [undefined, 11, 'z', 'x', 'y', undefined].sort()
// [ 11, 'x', 'y', 'z', undefined, undefined ]



// calling sort on an arr of chars will order alphabetically, this
// should be fairly obvious


// sort is destructive (it sorts in place)

// returns a reference to that array.



// using slice we can avoid mutating the original object

// > let vowels = ['u', 'i', 'a', 'e', 'o']
// > vowels.slice().sort()
// [ 'a', 'e', 'i', 'o', 'u' ]
// > vowels
// [ 'u', 'i', 'a', 'e', 'o' ]



// Array.prototype.sort is an example of a function/method that has
//  a side effect and returns a meaningful value at the same time, 
//  contrary to our advice to not mix side effects with meaningful 
//  return values. You can argue that that's a little deceptive; 
//  returning the sorted array might lead one to believe that 
//  it doesn't mutate the original. You'll often see such design 
//  inconsistencies in programming languages, especially JavaScript.
//   That doesn't mean that you should emulate them -- leave breaking 
//   the rules to the experts.









//       UTF-16


// string order is determined by a character's code point in 
// the UTF-16 encoding. It is the code point that determines the 
// result when we compare one character with another using the 
// relational operators.



// If we want to compare the UTF-16 character + with the UTF-16 
// character 3, we need to know the code point for both characters. 
// We can use String.prototype.charCodeAt to determine that value, 
// then use the results to determine the order in which the 
// characters will be sorted.

// Copy Code
// > '+'.charCodeAt()
// 43
// > '3'.charCodeAt()
// 51
// > '+' < '3'
// true // since 43 < 51

// You may sometimes see people talk about ASCII characters when
//  talking about JavaScript's strings (and sort in particular). 
//  In fact, it uses UTF-16.



// > 'A' < 'a'         // 65 < 97
// true
// > 'Z' < 'a'         // 90 < 97
// true
// > '!' < 'A'         // 33 < 65
// true





// some key things to remember: 

// Uppercase letters come before lowercase letters

// Digits and most punctuation come before letters.


// There are several punctuation characters between the uppercase and 
// lowercase letters, and several more that come after all of the 
// letters.


// There is an extended ASCII table that contains accented and 
// other characters - 
// this comes after the main ASCII table.


// All other UTF-16 characters come after the extended ASCII 
// table and have a code point of at least 256.











// Generic Sorting

// The return value of that callback determines the final sequence 
// produced by the sort:

// Copy Code
// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }); // => [ 1, 2, 4, 9, 11, 21, 107 ]

// //or 

// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);

// If the callback returns a number less than 0, place a before b.
// If the callback returns a number greater than 0 place b before a.
// If the callback returns 0, leave the relative positions of a and b unchanged.


// Suppose we want to sort our array in descending order; that is,
//  by decreasing numeric value.
//  All we have to do is flip the logic of our callback:

// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a);




// You are allowed to write additional code in the block, as long 
// as the block returns a number.


// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   console.log(`a is ${a} and b is ${b}`);
//   return a - b;
// });



// sort uses doesn't compare every possible pair of values




// let words = ['go', 'ahead', 'and', 'jump'];

// words.sort((a, b) => {
//   return a.length - b.length
// })

// console.log(words)





// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// scores is an array of subarrays that each contain three elements. Suppose this is an array that represents the scores for three players in a game of three rounds. We want to sort the players in ascending order of their total score. In effect, we want to get the following return value:

// Copy Code
// [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];
// Let's give it a shot:

// Copy Code
// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// scores.sort((a, b) => {
//   let totalAScore = a.reduce((number, next) => number + next);
//   let totalBScore = b.reduce((number, next) => number + next);

//   return totalAScore - totalBScore;
// });


// only use a and b for comparison callbacks.