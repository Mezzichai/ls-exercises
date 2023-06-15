// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }

// console.log(first());
// console.log(second());
//
//the second function will not return undefind because of the "return"
//placement
//js is inserting a semicolon after return on  the second function, 
//this is why the code is unreachable
//the code however, will not throw an error




// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object); // => { first: [1, 2]}


// If, instead of modifying the original object, we want to 
// modify numArray but not object, we have two options:

// We can declare and initialize numArray with a reference to a copy of the original array:

// let object = { first: [1] };
// let numArray = object["first"].slice();
// numArray.push(2);


// We can use Array.prototype.concat(), 
// which returns a new array instead of modifying the original array:

// let object = { first: [1] };
// let numArray = object["first"].concat();
// numArray.push(2);






// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // one
// console.log(`two is: ${two}`); // two
// console.log(`three is: ${three}`); // three

//we are reassigning the local versions of these variables to the
//which negates their effect on the global variables they used to
//  reference.
//we are assigning vars that reference objs to local, shadowed vars





// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); //one
// console.log(`two is: ${two}`); //tow
// console.log(`three is: ${three}`); //three

//because reassignment is occuring not mutation, thet will not effect
// global vars

// As with the first snippet, this version of messWithVars has three 
// parameters that shadow their global counterparts. Likewise, it only 
// performs reassignments to local variables so that the values that are 
// logged by lines 13 through 15 are the values of the global one, two and 
// three variables.

// Though this detail has no outcome on the final output, it's important to 
// note that within the messWithVars function, the local variables of one,
//  two and three are being reassigned to brand new arrays. Which means they
//   don't use any of the references that were passed to the function when 
//   it was invoked on line 11.





// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // two
// console.log(`two is: ${two}`); //three
// console.log(`three is: ${three}`); //once

//splice is mutating



// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length !== 4) return false
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false
//     }
//   }
  
//   return true;
// }

