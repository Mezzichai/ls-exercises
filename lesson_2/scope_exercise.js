// let num = 5;

// function myFunc() {
//   num = 10;
// }

// myFunc();
// console.log(num);
//
//10



// let num = 5;

// function myFunc() {
//   console.log(num);
//   num = 10;
// }

// myFunc();
// console.log(num);
//
//5 then 10



// let num = 5;

// function myFunc() {
//   let num = 10;
// }

// myFunc();
// console.log(num);
//
//5



// let num = 5;

// function myFunc() {
//   console.log(num);
//   let num = 10;
// }

// myFunc();
// console.log(num);
//
//it will raise an exception error, the let declaration creates a new num var
//therefore the log will attempt to log the num within its block even if it is 
//not yet intialized, casuing a reference error



// let num = 5;

// function myFunc(num) {
//   num = 10;
// }

// myFunc();
// console.log(num);
//
//5



// let num = 1;

// while (num < 3) {
//   num += 1;
// }

// console.log(num);
//
//3



// let num = 1;

// while (num < 3) {
//   let num = 5;
//   num += 1;
// }

// console.log(num);
//
//infinite loop because the outer num will never increment



