// let advice = "Few things in important life are as important as house important training your pet dinosaur.";

// while (advice.includes("important")) {
//   advice = advice.replace("important", "urgent")
// }





// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]



// let numbers = [1, 2, 3, 4, 5];

// numbers.slice().reverse()
// numbers.slice().sort((num1, num2) => num2 - num1)
//or
// [...numbers].sort((num1, num2) => num2 - num1);



// let newArr = []
// numbers.slice().forEach(element => {
//  newArr.unshift(element)
// });




// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// numbers.includes(number1) 
// numbers.includes(number2)




// let famousWords = "seven years ago...";
// let otherWords = "Four score and"

// famousWords + " " + otherWords

// `${otherWords} ${famousWords}`

// otherWords.concat(famousWords)

// "Four score and ".concat(famousWords);




// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1);
// console.log(numbers)




// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);


// let newArr = []

// function recurse(arr) {
//   arr.forEach((elem) => {
//     if (typeof elem === "object") {
//       recurse(elem)
//     } else {
//       newArr.push(elem)
//     }
//   })
// }

// recurse(flintstones)
// console.log(newArr)

// //or 

// flintstones = [].concat(...flintstones);

// //or 

// flintstones.reduce((accum, elem) => {
//   return accum.concat(elem)
// }, [])

//or 

// let newFlintstones = [];
// flintstones.forEach(element => {
//   newFlintstones = newFlintstones.concat(element);
// });

// or

// let newFlintstones = flintstones.flat();





// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };


// // let newArr = Object.entries(flintstones)[2]

// //or

// let newArr = Object.entries(flintstones).filter(elem => {
//  elem.includes("Barney")
// })

// //or 

// let newArr = Object.entries(flintstones).filter(elem => {
//  elem[0] === "Barney".shift()
// })
//we shift to unnest the arr




// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// Array.isArray(numbers)
// Array.isArray(table)



// let width = 40
// let title = "Flintstone Family Members";
// let pos = title.padStart(((width/2) - Math.floor(title.length/2)) + title.length)

// console.log(pos.length)

//or 

// let padding  = Math.floor((40 - title.length) / 2);
// title.padStart(padding + title.length)

// console.log((title.padStart(padding + title.length)).length)





// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// // statement1.match(/t/g).length
// // statement2.match(/t/g).length

// //or 

// statement1.split('').filter(elem=> elem==='t').length
// statement2.split('').filter(elem=> elem==='t').length





