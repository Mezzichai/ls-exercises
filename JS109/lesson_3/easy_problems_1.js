// let numbers = [1, 2, 3];
// numbers[6] = 5;
//
//no, it will create up to 6 indices


// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];  // what will this line return?
//
//undefined
//despite it returning undefined, it is actaully entirely vacant
//map will return empty slots like so

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
// numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]




// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false
// //
// function endsWithExcalm(str) {
//  return str[str.length-1] === "!"
// }

// or 

// str1.endsWith("!"); // true
// str2.endsWith("!"); // false





// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// ages.hasOwnProperty("Spot")




// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// let newStr = munstersDescription.charAt(0).toUpperCase + 
//   munstersDescription.substring(1).toLowerCase




// console.log(false == '0');
// console.log(false === '0');

//true
//false





// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additionalAges)





// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// str1.includes("Dino")
// str2.includes("Dino")

// //or

// str1.match('Dino') !== null;
// str2.match('Dino') !== null;

// //or

// str1.indexOf('Dino') > -1; // false
// str2.indexOf('Dino') > -1; // true




// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino")

// or 

// flintstones = flintstones.concat("Dino");

// or 

// flintstones[flintstones.length] = "Dino";





// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.concat("Dino", "Hoppy")

//or 

// flintstones.push("Dino", "Hoppy");   // we can pass multiple arguments to push





// let advice = "Few things in life are as important as house training your pet dinosaur.";

// // Expected return value:
// // => 'Few things in life are as important as '

// advice.split("house")[0]

// //or

// advice.slice(0, advice.indexOf('house'));
