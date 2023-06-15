// let numbers = [1, 2, 3, 4];

// numbers.length = 0

// while (numbers.length) {
//   numbers.pop()
// }


// numbers.splice(1)
// or
//numbers.splice(0, numbers.length);




// console.log([1, 2, 3] + [4, 5]);
//
// 1,2,34,5
// In some languages you can use + to concatenate two arrays, but not in 
// JavaScript. In JavaScript, the + operator first converts the arrays to 
// strings, and then concatenates the strings, so the output is the string 
// 1,2,34,5.

//you cannot "+" arrays in js
//they will be coerced into strings




// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1);

//hello there

//copy is created




// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);
//
//it should reflect the changes arr2 made, because of mutation


// +---------+             +---------------------+
// | pointer | ----------> | { first: "value1" } |
// +---------+             +---------------------+
// | pointer | -----+
// +---------+      |
// |    3    |      |      +----------------------+
// +---------+      +----> | { second: "value2" } |
// |    4    |             +----------------------+
// +---------+
// |    5    |
// +---------+


// // A deep copy makes a duplicate of every item in an existing array or object.
//  In particular, it creates completely new instances of any subarrays or 
//  subobjects in the source object. If we performed a deep copy on arr1, we
//   would have two different arrays as well as four separate objects.

// // A shallow copy only makes a duplicate of the outermost values in an 
// array or object. If we perform a shallow copy on arr1, we end up with two 
// different arrays, but we still only have one occurrence each of { first: 42 }
//  and { second: 'value2' }. In this case, both arr1[0] and arr2[0] point to
//   the same object in memory. Likewise, arr1[1] and arr2[1] point to the
//    { second: 'value2' } object.

// // The slice method performs shallow copies. Thus, when we call arr1.slice(),
//  we end up with something like this:

// // Copy Code

// arr1                                                       arr2
// +---------+             +---------------------+              +---------+
// | pointer | ----------> | { first: "value1" } | <----------- | pointer |
// +---------+             +---------------------+              +---------+
// | pointer | -----+                                    +----- | pointer |
// +---------+      |                                    |      +---------+
// |    3    |      |      +----------------------+      |      |    3    |
// +---------+      +----> | { second: "value2" } | <----+      +---------+
// |    4    |             +----------------------+             |    4    |
// +---------+                                                  +---------+
// |    5    |                                                  |    5    |
// +---------+                                                  +---------+





// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function isColorValid(color) {
//   return color === "blue" || color === "green"
// }

//or

// const isColorValid = color => color === "blue" || color === "green";

//or

//const isColorValid = color => ["blue", "green"].includes(color);

