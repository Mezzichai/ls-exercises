// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);
//
//red,green,blue,yellow



// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);
//
//red, green, blue, undefined
//thought it would throw a reference err but no



// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors, color1);
// updateColors(colors, color2);
// console.log(colors);
//
//red, green, blue, purple, pink




// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
//   return colors;
// }

// let newColors = updateColors(colors, color1);
// updateColors(newColors, color2);
// console.log(colors);
//
//red, green, blue, purple, pink

//we need to return so newColors gets assigned aswell



// let color = 'purple';
// let colors = ['red', 'green', 'blue'];

// function addColor(colors, color) {
//   colors.push(color);
//   return colors;
// }

// function removeColor(colors) {
//   color = colors.pop();
//   return colors;
// }

// let newColors = removeColor(colors);
// addColor(colors, color);
// console.log(newColors);
//
//red, green, blue



// function capitalize() {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim() {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);
//
// hello!!!
// Hello
// hello!!!

//the key lies in that niether function defines params 
//we dont use the arguments passed in, so the "word" var being referencd
// is defined on line 9
//and because primitives cannot be mutated, capitalize does nothing to
//the "word" var
//keep in mind that the "+=" does not mutate, but reassigns

// Nothing will happen even if you try to add properties to a primitive.




// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim(word) {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);
//
//hello
//Hello
//Hello!!!

//we are no longer reassigning the "word" var because params are defined.
//This allows for capitalized word to be passed and used as an
//an argument

//undefined params being passed in does not throw an error, they
// are simply ignored