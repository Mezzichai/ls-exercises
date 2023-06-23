// let arr = ['10', '11', '9', '7', '8'];

// arr.sort((a, b)=> {
//  return Number(b)-Number(a)
// })







// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// books.sort((a,b) => {
//   return Number(a.published) - Number(b.published)
// })

// console.log(books)






// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]; 
// // arr1[2][1][3]

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// // console.log(arr2[1]["third"][0])
// //must have quotations


// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// // arr3[1]["third"][0][0]
// //access the arr prop with 0 then access its chars

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// ///obj1["b"][1]

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// //Object.keys(obj2.third)[0]







// let arr1 = [1, [2, 3], 4];
// arr[1][1] = 4

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4

// let obj1 = { first: [1, 2, [3]] };
// obj1["first"][2][0] = 4

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2["a"]["a"][2] = 4







// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };


// console.log(Object.values(munsters).filter(elem => {
//   return elem.gender === "male"
// }).reduce((acc, e) => {
//   return acc + e.age
// }, 0))

//or 


// let totalMaleAge = 0;

// for (let member in munsters) {
//   if (munsters[member]['gender'] === 'male') {
//     totalMaleAge += munsters[member].age;
//   }
// }

// console.log(totalMaleAge); // => 444


// Another way to do it would be to use the Object.values
//  method along with forEach or a loop:


// Copy Code
// let memberDetails = Object.values(munsters);
// let totalMaleAge = 0;

// memberDetails.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });








// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// Object.keys(munsters).forEach(element => {
//  console.log(`${element} is a ${munsters[element].age}-year-old ${munsters[element].gender}`)
// })
// ;


// //or 


// Object.entries(munsters).forEach(entry => {
//   let name = entry[0];
//   let age = entry[1]['age'];
//   let gender = entry[1].gender;

//   console.log(`${name} is a ${age}-year-old ${gender}.`);
// });








// let a = 2;
// let b = [5, 8];
// let arr = [a, b];

// arr[0] += 2;
// arr[1][0] -= a;

// a // => 2
// b // => [ 3, 8 ]

// The value of a didn't change since we don't reference a at any 
// point. The code arr[0] += 2 modifies the array arr, but not a. 
// In effect, we are assigning a new value to that index of the
//  array so that instead of arr[0] containing 2, the value obtained 
//  from a, it now contains 4. We can confirm that by examining the
//   value of arr:


// arr; // => [ 4, [ 3, 8 ] ]
// Since b is an array and we are modifying that array by assigning
//  a new value to index 0, the value of b does change.






// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(elem => {
//   elem.forEach(elem => {
//     elem.split("").forEach(elem => {
//       if ("aeiou".includes(elem)) {
//         console.log(elem)
//       }
//     })
//   })
// })






// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// console.log(arr.map(arr => {
//   if (typeof arr[0] === 'string') {
//     return arr.slice().sort();
//   } else {
//     return arr.slice().sort((a,b)=> {
//       return a-b
//     })
//   }
// }))





// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];



// console.log(arr.map(arr => {
//   return arr.slice().sort((a,b)=>{
//     if (typeof a === 'number') {
//        return b - a
//     }

//     if (a < b) {
//       return 1
//     } else if (b < a) {
//       return -1
//     } else return 0
//   })
// }))






// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let serializedArr = JSON.stringify(arr)
// let parsedArr = JSON.parse(serializedArr)

// let newArr = parsedArr.map(elem => {
//     return Object.keys(elem).map(e => {
//       return {[e]: elem[e] + 1}
//     })
// })
// console.log(newArr)


// ^^^^ ehhh



// arr.map(obj => {
//   let newObj = {}

//   for (let key in obj) {
//     newObj[key] = obj[key] + 1
//   }

//   return newObj
// });// => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

// arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]

// the original objects are never mutated, becasue they are never
// reassigned.






// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// console.log(arr.map(elem => {
//     return elem.filter(elem => {
//         return elem % 3 === 0
//     })
//   }
// ))






// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(arr.sort((a, b) => {
//   a = a.filter(elem => elem % 2 === 1).reduce((acc, elem) =>{ 
//     return acc + elem
//   }, 0)
//   b = b.filter(elem => elem % 2 === 1).reduce((acc, elem) =>{ 
//     return acc + elem
//   }, 0)

//   return a - b
// }))





// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let capitalize = word => word[0].toUpperCase() + word.slice(1)

// console.log(Object.values(obj).map(elem => {
//   if (elem["type"] === "fruit") {
//     return elem["colors"].map(char => capitalize(char))
//   } else {
//     return elem["size"].toUpperCase()
//   }
// }))







// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];


// console.log(arr.filter(elem => {
//   return Object.values(elem).every(arr => {
//     return arr.every(num => num % 2 === 0)
//   })
// }))






// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// let obj = {}

// arr.forEach(elem=> {
//   obj[elem[0]] = elem[1]
// })



// In more recent versions of JavaScript, you can use 
// Object.fromEntries for an even simpler solution:

// Object.fromEntries(arr);











// function UUID() {
//   let arr = [8,4,4,4,12]
//   const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

//   let string = ""
//   arr.forEach((elem, index)=> {
//     let count = 0
//     while (count < elem) {
//       string += characters[Math.floor(Math.random() * characters.length)]
//       count += 1 
//     } 
//     if (index < arr.length - 1) {
//       return string += "-"
//     } 
//   })
//   return string
// }



// // or 




// function generateUUID() {
//   let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
//   let sections = [8, 4, 4, 4, 12];

//   let uuid = '';
//   sections.forEach((section, sectionIndex) => {
//     for (let index = 1; index <= section; index++) {
//       let randomIndex = Math.floor(Math.random() * characters.length);
//       uuid += characters[randomIndex];
//     }

//     if (sectionIndex < sections.length - 1) {
//       uuid += '-';
//     }
//   });

//   return uuid;
// }












  // let arr = ['10', '11', '9', '7', '8'];

  // arr.sort((a,b) => {
  //   return Number(b)-Number(a)
  // })









// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// books.sort((a, b) => {
//   return a["published"] - b["published"]
// })

// console.log(books)






// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };



// console.log(Object.keys(munsters).filter(elem => {
//   return munsters[elem].gender === "male"
// }).reduce((acc, elem) => {
//   return acc + munsters[elem].age
// }, 0))


//or 


// let totalMaleAge = 0;

// for (let member in munsters) {
//   if (munsters[member]['gender'] === 'male') {
//     totalMaleAge += munsters[member].age;
//   }
// }
// console.log(totalMaleAge); // => 444

// Another way to do it would be to use the Object.values method
// along with forEach or a loop:

// let memberDetails = Object.values(munsters);
// let totalMaleAge = 0;

// memberDetails.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });








// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };


// Object.keys(munsters).forEach(elem => {
//   console.log(`${elem} is a ${munsters[elem].age}-year-old ${munsters[elem].gender}.`)
// });





// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];



// console.log(arr.map(elem => {
//   return elem.sort((a,b) => {
//     if (typeof a === "number") {
//       return a-b
//     } else if (a < b) {
//       return -1
//     } else return 1
//   })
// }))


//or


// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// console.log(arr.map(elem => {
//   if (typeof elem[0] === "string") {
//     return elem.slice().sort()
//   } else {
//     return elem.sort((a,b) => a-b)
//   }
// }))






// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];


// console.log(arr.map(elem => {
//   return elem.sort((a,b) => {
//     if (typeof a === "number") return b-a
//     if (a < b) return 1
//     if (a > b) return -1
//     return 0
//   })
// }))







// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


// console.log(arr.map(elem => {
//   let obj = {}
//   Object.keys(elem).forEach(e => {
//     obj[e] = elem[e] + 1
//   })
//   return obj
// }))

// console.log(arr)







// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];



// console.log(arr.map(elem => {
//   return elem.filter(elem => {
//     return elem % 3 === 0
//   })
// }))




// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(arr.sort((a,b) => {
//   return a.filter(elem => {
//     return elem % 2 === 1
//   }).reduce((acc, elem) => {
//     return acc + elem
//   }, 0) - b.filter(elem => {
//     return elem % 2 === 1
//   }).reduce((acc, elem) => {
//     return acc + elem
//   }, 0)
// }))









// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };


// console.log(Object.keys(obj).map(elem => {
//   if (obj[elem].type === "fruit") {
//     return obj[elem].colors.map(elem=> {
//       return elem[0].toUpperCase() + elem.slice(1, elem.length)
//     })
//   } else return obj[elem].size.toUpperCase()

// }))




// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];


// console.log(arr.filter((elem, index)=>{
//   return Object.keys(elem).every(elem=> {
//     return arr[index][elem].every(num => {
//       return num % 2 === 0
//     })
//   })
// }))






// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// let obj = {}

// arr.forEach(elem => {
//   obj[elem[0]] = elem[1]
// })

// console.log(obj)

// using object entries on an array get the indices as keys






// sort use utf to sort if no arguments are passed










// function evenValues(array) {
//   let evens = [];

//   array.forEach(value => {
//     if (value % 2 === 0) {
//       evens.push(value);
//     }
//     array.shift();
//   });

//   return evens;
// }

// evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);


// the callback is mutating the array, by shortening it. Because the higher order function 
// uses indice, the value param will change what is was going to point to, 
// therefore returning:
// [ 4, 4, 12 ]