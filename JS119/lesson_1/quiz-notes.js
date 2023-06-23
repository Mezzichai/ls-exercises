// obj.x and obj['x'] both return undefined if property x is not present in
//  obj. However, they also return undefined if the property is present but 
//  has the value undefined.








// A
// text.split(' ')

// B
// text.split('')

// C
// text.split()

// D
// split(text)

// Discussion
// A is the only answer that works here. It uses a space character as the 
// delimiter to split the text string into words.
















// Your Answer
// A
// If the callback function returns a falsy value on every iteration, filter 
// returns undefined.

// B
// filter evaluates the truthiness of the callback's return value to determine
//  whether it should select or reject each of the elements of the array.

// C
// If the callback function returns a truthy value on every iteration, filter 
// returns the original calling array.

// D
// The callback function can accept and use 1, 2, or 3 arguments for every 
// element in the array.

// Discussion
// If the callback returns a falsy value for every element in the array, the
//  return value of filter is an empty array. If the callback returns a 
//  truthy value for every element, the return value of filter is a new 
//  array that contains the same elements as the original array. However,
//   this is not the same as returning the original array.




// let result = ['a', 'b', 'c'].filter(function(item) {
//   return console.log(item);
// });

// result; // []


// because undefined is being returned!!!!!
