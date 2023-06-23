// // collections can be nested


// // arr[0]; // => [ 1, 3 ]

// // arr[0][1]; // => 3




// // we can modify a value in a nested array.

// // let arr = [[1, 3], [2]];
// // arr[0][1] = 5;



// // We can also add another array instead of an integer:

// // let arr = [[1], [2]];

// // arr[0].push([3]);
// // arr; // => [ [ 1, [ 3 ] ], [ 2 ] ]

// // That leaves us with a three-layer nested data structure.




// // Other nested structures


// // objects can be nested within arrays too

// // [{ a: 'ant' }, { b: 'bear' }]



// // if we wanted to insert a new key value pair in the first nested
// // object:

// // let arr = [{ a: 'ant' }, { b: 'bear' }];

// // arr[0]['c'] = 'cat';
// // arr[0].d = 'dog';
// // arr; // => [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]


// // First we use arr[0] to retrieve the first inner object, so we
// //  get { a: 'ant' }. Next, we use the normal object key/value
// //   creation syntax to create a new key/value
// //    pair: { a: 'ant' }['c'] = 'cat' or { a: 'ant' }.d = 'dog'.




// // let arr = [['a', ['b']], { b: 'bear', c: 'cat' }, 'cab'];

// // arr[0];       // => [ 'a', [ 'b' ] ]
// // arr[0][1][0]; // => 'b'
// // arr[1];       // => { b: 'bear', c: 'cat' }
// // arr[1]['b'];  // => 'bear'
// // arr[1].b[1];  // => 'e'
// // arr[2][1];    // => 'a'









// // Variable reference for nested collections




// // let a = [1, 3];
// // let b = [2];
// // let arr = [a, b];
// // arr // => [ [ 1, 3 ], [ 2 ] ]


// // The variables a and b are pointing to Array objects. When we 
// // create an array that uses these variables to specify elements,
// //  the result looks as if we've actually added the arrays to the 
// //  array. However, we've only added references to those arrays. To
// //   see how this affects things, let's consider some examples.



// // First, what happens if we modify a after placing it in arr?


// // let a = [1, 3];
// // let b = [2];
// // let arr = [a, b];

// // arr; // => [ [ 1, 3 ], [ 2 ] ]

// // a[1] = 5;
// // arr; // => [ [ 1, 5 ], [ 2 ] ]

// // this did what was expected, arr hold references to objects in Memory,
// // these objects are being changed

// // this does the same 


// // arr[0][1] = 8;
// // arr; // => [ [ 1, 8 ], [ 2 ] ]
// // a;   // => [ 1, 8 ]


// // a and arr[0] are, in fact, two different ways to reference the
// //  same object. The assignment arr[0][1] = 8 is equivalent to
// //   a[1] = 8.









// // Shallow Copy



// // Shallow Copying Arrays


// // one way to shallow copy is by using slice with no arguments

// // let arr = ['a', 'b', 'c'];
// // let copyOfArr = arr.slice();
// // copyOfArr; // => [ 'a', 'b', 'c' ];



// // a better, more modern, succint, way is with the spread 
// // operator:

// // let arr = ['a', 'b', 'c'];
// // let copyOfArr = [...arr];
// // copyOfArr; // => [ 'a', 'b', 'c' ];



// // verify copying arrs will create separate objects

// // let arr = ['a', 'b', 'c'];
// // let copyOfArr = [...arr];

// // copyOfArr.push('d');

// // arr;       // => [ 'a', 'b', 'c' ]
// // copyOfArr; // => [ 'a', 'b', 'c', 'd' ]





// // ONLY THE TOP LEVEL IS COPIED, when the arr has other objects, those
// // objects are shared, not copied, so mutating them will still have 
// // an effect on the original array:

// // let arr = [['a'], ['b'], ['c']];
// // let copyOfArr = arr.slice();

// // copyOfArr[1].push('d');

// // arr;       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
// // copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]


// // It's important to understand that this behavior occurs because 
// // the destructive method push was called on a shared array object, 
// // ['b'], rather than a separate array. When you mutate a shared
// //  object in an array or other collection, it is the shared object 
// //  you are affecting rather than the collection.

// // Another example of copy by reference when nested objects exist:

// // let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
// // let copyOfArr = [...arr];

// // copyOfArr[1].d = 'qux';

// // arr;       // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
// // copyOfArr; // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]



// // BE Aware of the level you are working at. Are objects nested within 
// // this object im working with?








// // Shallow Copying Objects


// // We've previously seen that the Object.assign method can be used 
// // to copy properties of one or more objects into another:

// // let obj1 = { a: 'foo' };
// // let obj2 = { b: 'bar' };

// // Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
// // obj1;                      // => { a: 'foo', b: 'bar' }


// // exp: 
// // let obj = { a: 'foo', b: 'bar' };
// // let copyOfObj = Object.assign({}, obj);

// // copyOfObj; // => { a: 'foo', b: 'bar' }


// // copyOfObj['c'] = 'baz';
// // copyOfObj; // => { a: 'foo', b: 'bar', c: 'baz' }
// // obj;       // => { a: 'foo', b: 'bar' }



// // Object.assign creates a shallow copy


// // let obj = { a: { b: 'foo' }, c: ['bar'] };
// // let copyOfObj = Object.assign({}, obj);

// // obj['a']['d'] = 'baz';
// // copyOfObj; // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
// // obj;       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }









// // Deep Copy


// // JS has not explicit methods for deep copying objects. But there 
// // exists an indirect way that, but it only workis with nested plain 
// // objects.

// // Objects that have methods and complex objects like dates or custom objects cannot be 
// // deep-cloned with this technique.


// // let arr = [{ b: 'foo' }, ['bar']];
// // let serializedArr = JSON.stringify(arr);
// // let deepCopiedArr = JSON.parse(serializedArr);


// // JSON.stringify method serializes any object, including arrays,
// //  that only has primitives, arrays, and plain objects as elements.
// //   Serializing involves converting an object to a string form that 
// //   can be subsequently converted back into an identical object. The
// //    JSON.parse method performs that conversion from a string back 
// //    to an object.


// // verify that this is a deep copy: 

// // deepCopiedArr[1].push('baz');
// // deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
// // arr;           // => [ { b: 'foo' }, [ 'bar' ] ]








// // Freezing Objects



// // Another example of an operation not affecting objects nested 
// // within objects is the operation of freezing objects. What is 
// // freezing? In JavaScript, objects can be frozen using the 
// // Object.freeze method. The method prevents objects
// // (including arrays) from being modified.




// let obj = Object.freeze({ a: 'foo' });
// let arr = Object.freeze(['a', 'b', 'c']);

// obj['b'] = 'bar';
// obj; // => { a: 'foo' }

// obj.c = 'ccc';
// obj; // => { a: 'foo' }

// arr[3] = 'x';
// arr; // => [ 'a', 'b', 'c' ]

// arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible



// trying to use a mutating method on a frozen object with raise 
// TypeError

// otherwise, using reassignemnt will just fail silently


// primitive val are obviously frozen by default



// to check if an object is frozen use the Object.isFrozen method

// Object.isFrozen('abc'); // => true





// Object.freeze only freezes the top most layer, it will not freeze
// nested objects. They can still be modified within it


// let arr = Object.freeze([[1], [2], [3]]);
// arr[2].push(4);
// arr; // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]


// In JavaScript, there's no built-in function or an easy workaround
//  to deep-freeze objects.




// use that JSON.stringify and then parse method for closest thing to
// deep freezing/copying

