// [1, 2, 3].filter(num => 'hi');
//
// [1,2,3]
//filter evaluates the return of the 
// callback, which is "hi", as a true, therfore it filters out not value 
// in the array




// [1, 2, 3].map(num => {
//   num * num;
// });
//
//[undefined, undefined, undefined]
//the expression is more that one line long and has not return statement!
// Therefore undefined is returned by the callback every invocation




// [1, 2, 3].map(num => num * num);
//
//[1,4,9]
// the expression is one line long,
// therefore, a return statment is no needed to return the value 





// ['ant', 'bear', 'caterpillar'].pop().length;

//11
// we are cal length on a string returned by the pop method





// [1, 2, 3].every(num => {
//   return num = num * 2;
// });


// 2
// 4
// 6
// true
// the assignment `num = num * 2;` is a truthy value
//and the callback returns the evaluation of the right hand side of the
// `num = num * 2` expression





// let arr = [1, 2, 3, 4, 5]
// arr.fill(1, 1, 5);

//
//we can find if the method is destructive by testing it in repl
// //it is

// By reading the documentation and trying some code in the console, we can 
// determine that fill takes a value and two indices and replaces the indices
//  value in between those two given indices with the given value. We can 
//  also verify that it's a destructive method.





// ['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// });
// //
// //[undefined, "bear"]


// There are some interesting things to point out here. First, the return 
// value of map is an array, which is the collection type that map always 
// returns. Second, where did we get that undefined value? If we look at 
// the if condition (elem.length > 3), we'll notice that it evaluates as 
// true when the length of the element is greater than 3. In this case,
//  the only value with a length greater than 3 is 'bear'. Thus, for the
//   first element, 'ant', the condition evaluates as false and elem isn't
//    returned.


// When a function doesn't explicitly return something, it implicitly 
// returns undefined. That's why we see undefined as the first element of
//  the returned array.





// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// let map = {}

// flintstones.forEach((elem, index) => {
//   map[elem] = index
// })




// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let result = 0;
// for (key in ages) {
//   result += ages[key]
// }

//or

// Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0);
//  // 6174


// One slight advantage of the reduce method is that we don't have to declare 
// and initialize a variable and then reassign to that value from inside the 
// callback.






// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };


// let arr = Object.values(ages)
// Math.min(...arr)




// let statement = "The Flintstones Rock";
// let obj = {};

// for (let i = 0; i < statement.length; i++) {
//   if (obj[statement[i]] !== undefined) {
//     obj[statement[i]]+=1
//   } else {
//     obj[statement[i]] = 1
//   }
// }

// console.log(obj)

//or



let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);





// Note the following line:

// result[char] = result[char] || 0;


// We're taking advantage of something called short-circuiting here. 
// What this means is that JavaScript first evaluates the left operand 
// (result[char]) of the || operator. If it is truthy, JavaScript doesn't
//  evaluate the right operand; it only evaluates the right operand when 
//  the left is falsy. Thus, if a character doesn't exist as a key in our
//   results object, result[char] will return undefined — a falsy value — 
//   resulting in the assignment of result[char] to 0. If result[char]
//    instead evaluates to a truthy value such as 1, it'll simply reassign
//     the current value to result[char].

// We can also code up the same logic without using the || operator:

// let charsInStatement = statement.split('').filter(char => char !== ' ');
// let result = {};

// charsInStatement.forEach(char => {
//   if (Object.keys(result).includes(char)) {
//     result[char] += 1;
//   } else {
//     result[char] = 1;
//   }
// });