// let string = "The Flintstones Rock!"

// for (let spaces = 0; spaces < 10; spaces++) {
//   console.log(string.padStart(spaces + string.length))
// }

// or 

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }





let munstersDescription = "The Munsters are creepy and spooky.";

// let arr = munstersDescription.split("")


// arr.forEach((elem, index)=> {
//   if (elem.toLowerCase() === elem) {
//     arr[index] = elem.toUpperCase()
//   } else arr[index] = elem.toLowerCase()
// })

// console.log(arr.join(""))

//or

// console.log(munstersDescription.split("").map(elem => {
//   if (elem.toLowerCase() === elem) {
//     return elem.toUpperCase()
//   } else return elem.toLowerCase()
// }).join(""))








// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(10))

// //or 

// factors.push(number / divisor);
//on line 3 to have the factors in reverse


// number % divisor === 0
// It determines whether the result of the division is an integer -- if the
//  number has no remainder, the result is an integer, so the number divided
//   by the divisor is a factor.




// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }
//
//Yes, there is a difference. While both functions have the same return 
//value, the first implementation mutates the argument represented by buffer.
//That is, the caller will see that the array is different when the
//function returns. The rollingBuffer2 implementation doesn't mutate the 
//argument specified by the value of buffer.

// The key difference is that addToRollingBuffer1 modifies the buffer array
//  directly by using push() and shift(), while addToRollingBuffer2 creates
//   a new array by using concat() and reassigns the buffer variable with
//   the new array.





// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);

//not .9 and not true, because of floating points, 64bit digits
//




// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

//false, to test whether a value is nan we use Number.isNaN()





// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

//34






// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// messWithDemographics(munsters);
//
// the data was mutated, object.values returns a direct reference
//and its valies are being mutated





// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

//paper




// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }

// bar(foo());
//
//"no"
// his is because the value returned from the foo function will 
// always be "yes", and "yes" === "no" will be false.