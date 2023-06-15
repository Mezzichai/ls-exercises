// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
// }

// let myWord = 'Hello';
// changeMyWord(myWord);
// console.log(myWord);
// 
// Hello
// Hello
//passing in myWord as an argument to the 
// changeMyWord function invocation acts like pass-by-value



// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// myWord = changeMyWord(myWord);
// console.log(myWord);
//
//Hello
//HELLO
//change occurs because of reassignment




// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);
//
//Hello
//Hello
//HELLO



// function changeMyWords(words) {
//   console.log(words);
//   words[0] = 'Hi';
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);
//
//hello, goodbye
//hi, goodbye




// function changeMyWords(words) {
//   console.log(words);
//   words = ['Hi', 'Goodbye'];
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);
//
//hello, goodbye
//hello, goodbye

//because of reassignment, and a lack of mutation, the words variable does
// not mutate the value

// be CAREFUL of assignment vs mutation