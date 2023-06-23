// Js strings arent really collections because you cant
//  store generic data in them. They are more like collections
// of characters; they have some properties that one would associate 
// with collections. For example, you can access individual characters 
// or multiple characters of the string and can loop through all the
//  characters by using the length property in conjunction with the for
//   and while loops. That's the reason behind covering strings in a lesson 
//   about JavaScript collections.




// all of these method cause no mutation obviously, they return a new string


// String.concat concats a string to another. String.concat can take more 
// than one argument, it iwll simply combine them all together



// String.prototype.includes returns a bool signifying whether a string is within
// a string, a 2nd argument that specifies the index to start looking from 
// is also available



// String.prototype.split


// with no arguments this method will simply return an array with a single String
// as an element

// 'abcdef'.split()
// ['abcdef']



// > 'abcdef'.split('')
// ['a', 'b', 'c', 'd', 'e', 'f']

// Any other string argument you provide to split will be used as 
// the separator by which to split the string:

// > 'One potato, two potato, three potato, four'.split(', ')
// [ 'One potato', 'two potato', 'three potato', 'four' ]




// String.prototype.trim

// trims whitespace from both ends of the string. useful when getting input
// users.

// > '  abcdef   '.trim()
// 'abcdef'

// trim removes any number of space characters as well as whitespace
//  characters like \n and \t.

// > '\nabcdef\t'.trim()
// 'abcdef'



// There are a couple of variations on the trim method that are also very useful. The trimStart method removes whitespace from the beginning of the string while trimEnd does so at the end of the string.

// > '  abcdef  '.trimStart()
// 'abcdef  '
// > '  abcdef  '.trimEnd()
// '  abcdef'




// Sometimes, you want to convert only the first character of a string to its uppercase equivalent. You can do that by combining toUpperCase with slice and any of the string concatenation methods:

// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// capitalize('pete'); // => 'Pete'






String.prototype.charAt



// The charAt method is nearly identical to using brackets on a string. It takes an index as an argument and returns the character at that index in the given string:

// > let sentence = "It's a walk in the park."
// > sentence.charAt(5)
// 'a'



// Note that when we create the string literal, 
// "It's a walk in the park", we're using double quotes ("") 
// instead of the single quotes that we've normally been using.
//  The reason is that our string itself contains a single quote.
//   Using single quotes to wrap a string that contains a single 
//   quote will confuse the JavaScript engine; instead of being a
//    part of our string, it'll be interpreted as syntax. You can
//     use a similar technique with strings that contain double quotes:

// Copy Code
// > let sentence = 'He said, "I will come back!"'

// You can of course always use the escape character (\) to let
//  JavaScript know that the character immediately after the \ should
//   not be interpreted as part of the syntax:

// Copy Code
// > let sentence = 'It\'s a walk in the park'



// the main difference between charat and [] is when using indices for
//  characters that don't exist: charAt returns an empty string (''), 
//  while [] returns undefined:


// > 'abc'[5]
// undefined
// > 'abc'.charAt(5)
// ''
// > 'abc'[-2]
// undefined
// > 'abc'.charAt(-2)
// ''




String.prototype.charCodeAt

// similar to charat but it instead returns the unicode code point or 
// character code of the character at that index. A Unicode code point 
// is the number that represents a given character at the machine level.


// > 'abcdef'.charCodeAt(1)
// 98


// If you don't provide an index, charCodeAt assumes the index 0.

// > 'abcdef'.charCodeAt()
// 97 // the character code for 'a'



// The String.fromCharCode method does the opposite of 
// String.prototype.charCodeAt. It takes a character code 
// {Unicode code point) and returns the character represented by that 
//   character code.


// > String.fromCharCode(97)
// 'a'

// Note that fromCharCode is not a prototype method. It's instead what we
//  call a static method or a function. We can't call fromCharCode directly
//   on a string; instead, it must be called on the constructor String. 
//   It's a common pattern in different languages to write methods that 
//   don't pertain to a specific value of a type directly on the
//    class/constructor for that type. In this case, fromCharCode isn't an
//     operation you'd perform on a string value. That is, something like 
//     the following doesn't make sense:


// > 'abcd'.fromCharCode(97)
// => TypeError: "abcd".fromCharCode is not a function

// this method is being directly called the string constructor