// <!-- Understand the problem

//   Identify inputs and outputs
//   Identify implicit concepts
//   Determine rules
//   high level overview of what needs to occurs and how it will be accomplished

// Examples / Test Cases

//   What is the expected output for this example input? Create a few test cases

// Data Structure

//   What we are using to convert input to output

//   consider the language

//   consider the mental model along side the algorithm

//   in enough detail that we know how to write it in code


// PEDA steps are interchangale

// The key is to understand the problem and then code with intent. Understand before taking action

// unless you test/validate, its very difficult to know if you missed anything -->







// P - [Understand the] Problem

//     - identify rules / boundries
//       - what are the implicit and explicit requirements?
//       - dont rush this step

//     -questions


// E - Examples / Test cases

//   - can confirm / refute assumptions
//   - can help to "codify" the rules an boundries
//   - help answer questions about implicit requirements

// D - Data Structure

//   - what is the structure of our input? How do we manipulate it
//   - help interact with data at implementation level
//   - closely linked with algorithms
  
// A - Algorithm

//   - sequence of steps for accomplishing task

//   - steps required to structure the data in a way that forms the required
//     output

//   - high level overview

//   - avoid implementaion detail

//   - revisit and update 

// C - Code with intent

//   - translate algortitm solution into code
//   - think about algorithm in the contect of the progamming language being 
//     used
//       - this mean thinking of language strengths an weaknesses
//       - built in functions
//       - syntax / patterns
//       create test cases
//       code with intent


// pedac is not neccessarily a linear process, focus on one thing at a time


// switch from implementation mode to abstract problem solving mode when neccessary

// dont try to problem solve at the code level





// array reverse exists, string reverse does not


// <!-- 
// function substrings(str) {
//   let result = [];
//   let startingIndex = 0;

//   while (startingIndex <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       let substring = str.slice(startingIndex, startingIndex + numChars);
//       result.push(substring);
//       numChars += 1;
//     }

//     startingIndex += 1;
//   }

//   return result;
// }

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindromeSubstrings(str) {
//   let result = [];
//   let substringsArr = substrings(str);

//   substringsArr.forEach(substring => {
//     if (isPalindrome(substring)) {
//       result.push(substring);
//     }
//   });

//   return result;
// } -->

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
// console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
// console.log(palindromeSubstrings("palindrome")); // []
// console.log(palindromeSubstrings(""));           // []

// Here's the complete informal pseudocode for this problem:

// // input: a string
// // output: an array of substrings
// // rules: palindrome words should be case sensitive, meaning "abBA"
// //        is not a palindrome

// // Algorithm:
// //  substrings function
// //  =================
// //    - create an empty array called `result` that will contain all required substrings
// //    - create a `startingIndex` variable (value `0`) for the starting index of a substring
// //    - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
// //      - create a `numChars` variable (value `2`) for the length of a substring
// //      - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
// //        - extract a substring of length `numChars` from `string` starting at `startingIndex`
// //        - append the extracted substring to the `result` array
// //        - increment the `numChars` variable by `1`
// //      - end the inner loop
// //      - increment the `startingIndex` variable by `1`
// //    - end the outer loop
// //    - return the `result` array

// //  isPalindrome function
// //  =====================
// //    - Inside the `isPalindrome` function, check whether the string
// //      value is equal to its reversed value.

// //  palindromeSubstrings function
// //  ============================
// //    - declare a `result` variable and initialize it to an empty array
// //    - create an array named `substrArray` that will contain all of the
// //      substrings of the input string that are at least 2 characters long.
// //    - loop through the words in the `substrArray` array.
// //      - if the word is a palindrome, append it to the `result` array
// //    - return the `result` array













// PEDAC Guided Practice: Leftover Blocks


// Problem: 

//   input: int for amount of blocks

//   output: int for left over cubes after building tallest valid structure

//   implicit:
//    - layer number correlates with blocks in a layer
//     - layer number x layer number = number of blocks in layer
   
//   explicit
//   - built with blocks
//     - block are cubes
//     - cubes are six sided, have square faces and equal lengthed sides
//   - The top layer in the structure consists of a single block
// - A block in an upper layer must be supported by four blocks in a 
//   lower layer
// - A block in a lower layer can support more than one block in an upper layer
// - Layers are solid structures -- there are no gaps between blocks in a layer

// How these questions are answered will depend on the context. In an interview situation you can perhaps ask clarification questions of the interviewer. If you are provided with test cases however, these should usually be your first port of call, as they may well contain the answers to your questions.


// Examples: 

// the test case provided confirm my understanding on the problem, a 
// pyramid structure must be formed, and remaining blocks returned


// DATA STRUCTURE: 
// an array with subarrays that act as layers?


// [
// 	['x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
// 	...
// ]


// Algorithm: 

// - declare a varible currentLayer init to 1

// - declare a variable layerSize and init to currentLayer x currentLayer

// - create a while loop that evaulates whether the input is >= layerSize
//   - subtract layerSize from input
//   - increment currentLayer and assign layer size to currentLayer x currentLayer again

// - return input


// Implementation:



// function calculateLeftoverBlocks(input) {
//   let currentLayer = 1;
//   let layerSize = 1;
  
//   while (input >= layerSize) {
//     input -= layerSize;
//     currentLayer += 1;
//     layerSize = currentLayer * currentLayer;
//   }

//   return input;
// };

// console.log(calculateLeftoverBlocks(0) === 0); //true
// console.log(calculateLeftoverBlocks(1) === 0); //true
// console.log(calculateLeftoverBlocks(2) === 1); //true
// console.log(calculateLeftoverBlocks(4) === 3); //true
// console.log(calculateLeftoverBlocks(5) === 0); //true
// console.log(calculateLeftoverBlocks(6) === 1); //true
// console.log(calculateLeftoverBlocks(14) === 0); //true


// you need to test as you go, stop building out the whole problem before 
// testing parts of it


























// PEDAC Guided Practice: Sort by Most Adjacent Consonants



// Problem

//  - explicit

//   - If two strings contain the same highest number of adjacent consonants they 
//     should retain their original order in relation to each other

//   - next to each other in the same word or if there is a space between
//    two consonants in adjacent words.

//   - implicit
//     - strings can contain multiple words
//     - Single consonants in a string do not affect sort order in
//       comparison to strings with no consonants. Only adjacent consonants
//       affect sort order.



//   - input:  array of strings
//   - output: array of sorted strings by number of adjacent consonants
    


//   --Questions--

// - Do strings always contain multiple words?
//   - Can strings contain a single word?
//   - Can strings be empty?
// - Is it possible for a string to contain no adjacent consonants?
// - What is meant by "a space between two consonants in adjacent words"?
// - Should the strings be sorted in ascending or descending order?
// - Is case important?





// Examples:

// - the test cases make clear that multiple words are allowed
//   - uppercase is not present 
//   - strings are never empty
// console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
// console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
// console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
// console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']





// Data structure:

//  - an array that will be pushed to 

//  - a hashmap that stores the string, and the number of adjacent consonants
 
//  or

//  - a 



//  Algorithm: 


// - declare a variable result and init to empty array

// - declare a variable map and init to an empty object

// - iterate over the input with an outer loop of i

//   - use the helper function to get the highest consonant chain

//   - add a key and value for input of i to the map

// - convert map into array of keys, then sort array by value




// create a helper function that counts the heighest number of adjacent
//  consonants



//for this helper function we want to...

// - remove whitespaces

// - init a consonantChain variable to 0

// - init an empty arr `chains`

// - loop over input 

//   - if the char is a consonant increment consonantChain


//   - otherwise set push consonantChain to chains and reset consonantChain

// - if the highest val in `chains `=== 1 
//     return 0;

// - return the highest value in  `chains`













// function countMaxAdjacentConsonants(str) {

//   str = str.replaceAll(" ", "");
//   let consonantChain = 0;
//   let chains = [];

//   for (let i = 0; i < str.length; i++) {
//     if ('bcdfghjklmnpqrstvwxyz'.includes(str[i])) {
//       consonantChain += 1
//     } else {
//       chains.push(consonantChain)
//       consonantChain = 0
//     }
//   }
//   chains.push(consonantChain)
//   if (Math.max(...chains) === 1) return 0
//   return Math.max(...chains)
// }


// function sortStringsByConsonants(arr) {

//   let map = {}

//     for (let i = 0; i < arr.length; i++) {
//       console.log(countMaxAdjacentConsonants(arr[i]))
//       map[arr[i]] = countMaxAdjacentConsonants(arr[i])

//     }

//   return Object.keys(map).sort((a, b) => {
//     return map[b] - map[a]
//   })
// }


//or 




function sortStringsByConsonants(strings){

  let sortedStrings = strings.sort((a, b) => countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));

  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempString = '';
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempString += letter;
      count = tempString.length
    } else {
      if (tempString.length > 1 && tempString.length > count) { count = tempString.length }
      tempString = '';
    }
  }

  return count;
}



console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']


console.log(countMaxAdjacentConsonants('dddaa')); // 3
console.log(countMaxAdjacentConsonants('ccaa')); // 2
console.log(countMaxAdjacentConsonants('baa')); // 0
console.log(countMaxAdjacentConsonants('aa')); // 0
console.log(countMaxAdjacentConsonants('ddd aa')); // 3
console.log(countMaxAdjacentConsonants('dd daa')); // 3
console.log(countMaxAdjacentConsonants('ccaa')) // 2
console.log(countMaxAdjacentConsonants('salt pan'));// 3