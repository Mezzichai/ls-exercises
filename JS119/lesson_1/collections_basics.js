// Collections are made up of individual elements. To work with collections,
//  we need to understand how they are structured and how to reference and 
//  assign the individual elements within them.





      // String Element Reference

//string use indexes to represent characters in the string, 0 based of course


//to represent multiple characters, use the string slice


// What happens when you provide negative arguments to slice?

// 'abcdefghi'.slice(-4, -2); // => 'fg'

// slice treats negative arguments as `string length + index`. 
// In the above, an index of -4 is equivalent to 9 + (-4) since the length 
// of the string is 9 and 9 + (-4) equals 5. Likewise, -2 is equivalent to 7.

//we are basically starting from the opposite end of the string or array




// slice and substring differ in that:

// when the start index is greater than the end index, substring swaps 
// the two arguments, while slice returns an empty String


// when either argument is negative, substring treats them as 0


// slice is recommended, it is more predicatable and natural


// `substr` is deprecated








                // Array Element Reference


// Arrays, like strings, are also ordered, zero-indexed collections.

// Calling slice without any arguments returns a shallow copy of the
//  original array:


// > let arr = ['a', 'b', 'c', 'd']
// > let arrCopy = arr.slice()
// > arrCopy.push('e')
// 5

// > arr
// [ 'a', 'b', 'c', 'd' ]
// > arrCopy
// [ 'a', 'b', 'c', 'd', 'e' ]

// its also a shallow copy, not a deep one. This is important when the copied
// array contains objects and  other arrays as elements:


// > let nestedArr = [1, [2, 3], { foo: 4 } ]
// > let nestedCopy = nestedArr.slice()

// > nestedCopy.push(5)
// 4
// > nestedCopy[1].push(6)
// 3
// > nestedCopy[2].bar = 7;
// 7

// > nestedArr
// [ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 } ]
// > nestedCopy
// [ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 }, 5 ]









              // Object Element Reference
            
// object use key value pairs, where key is a string and value is any js value


//accessing string chars within objects
// let obj = { fruit: 'apple', vegetable: 'carrot' };
// obj.fruit; // => 'apple'
// obj.fruit[3]; // => 'l'
// obj['vegetable']; // => 'carrot'
// obj['vegetable'][0]; // => 'c'


// KEY NAMES MUST BE UNIQUE

// DUPLICATES WILL BE OVERWRITTEN



// How do we find out if a object value is blank or has the value undefined?

// Use hasOwnProperty for this:

// let obj = { a: 'foo', b: 'bar', c: undefined};
// obj.hasOwnProperty('c'); // => true
// obj.hasOwnProperty('d'); // => false

//you could also use: 

// Object.keys(obj).includes('c'); // => true
// Object.keys(obj).includes('d'); // => false




// The chief difference between an array and some other object is that it uses
//  non-negative integers as its primary keys.

//  another difference is that when adding elements to the array increases the 
//  value of its length property, and changing the value of the length 
//  property causes the number of elements to change.


// let arr = ['foo', 'bar', 'qux'];
// arr['boo'] = 'hoo';
// arr[-1] = 374;
// arr;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
// arr.length;        // => 3 (not 5!)
// arr.forEach(element => console.log(element)); // prints: foo, bar, qux
// Object.keys(arr);  // => [ '0', '1', '2', 'boo', '-1' ]


// Note that arr[-1] = 374 looks like we're creating an element at index 
// position -1. In fact, the '-1' property is not really an element of the
//  array, but is an ordinary property of the object. You can see this in 
//  the return value from line 4 where the property is shown as '-1': 374. 
//  By the same token, arr['boo'] isn't an element of the array, but a 
//  property of the object.

//the value of length does not change when non element properties are added
// to the array

//these propeties are also ignored by array methods like foreach, map, and filter

//when an object/ARRAY method such as `keys` is used, it WILL retrieve these 
// properties. Curiously, the return value here shows the indices of the
//  array elements as string keys, '0', '1', and '2'.

// use Array.isArray to check if something is an arr






                        Conversion
          
                        

// String.prototype.split, when called without any arguments, returns 
// an array with the string as its only element:

// 'this is a string'.split(); // => ['this is a string']


// Any other string provided to split as the argument will be
// used to separate the string using the argument as the delimiter:

// 'apple,orange,mango'.split(','); // => ['apple', 'orange', 'mango']




// when called with no arguments, join will return a sting of elements
// joined by commas

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// arr.join(); // => 'a,b,c,d,e,f'

//to avoid this

// arr.join(''); // => 'abcdef'




// use Object.entries to convert an object to an array.

// let obj = { sky: 'blue', grass: 'green' };
// Object.entries(obj); // => [ [ 'sky', 'blue' ], [ 'grass', 'green' ] ]







//                         Element Assignment

// access via indice to assign elements
// let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1;  // => 2
// numbers;                      // => [ 2, 2, 3, 4 ]








                    // String Character Assignment




// You can try to use the array element assignment syntax with strings
//  without getting any errors, but it does not affect the string:

// Copy Code
// let str = 'bob';
// str[0] = 'B'; // => 'B'
// str; // => 'bob'

//how do i change a string then?:

// str = 'B' + str.slice(1);
// str; // => 'Bob'



