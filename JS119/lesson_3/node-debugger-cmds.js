// run the node command with inspect as an argument to use the debugger.

// example:
// > node inspect debug.js


// access the value of any var in scope by executing the exec cmd 
// with a the name of a variable as an argument 

// example:
//   exec counter


// using the next cmd will continue execution until the next expression

// next has shorthand, n




// c (or cont) command does is effectively 'un-pause' the program execution, and continue 
// it to the end (or until you experience an error or a breakpoint).



// we can either start program execution again from the 
// beginning using the run or restart commands


// we can add a `debugger` statement like so to adda breakpoint

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   debugger;
//   counter += 1;
// }






// Executing Expressions or Functions


// exec can also be used to evaluate expressions
//  (this includes function invocations)



// Another way to evaluate expressions or execute functions within
//  the debugger is to access the built-in REPL. 
// You can access the REPL via the repl command.


// there is a way to add and remove breakpoints within the 
// debugger whiles its running. 

// using the setBreakpoint() or sb() commands, and removed
//  using the clearBreakpoint() or cb() commands.

// etBreakpoint()/ sb() can be used without an argument 
// to set a breakpoint on the current line, or with a line number 
// passed as an argument in order to set a breakpoint on the line
//  specified.

// clearBreakpoint()/ cb() takes two arguments, 
// the name of the file and the line number.




// use the s or step cmd to to "step" into
//  a function (more applicably a callback)



// USE THE `help` cmd to list all the available cmds



// The list() command can be used to reveal additional lines of code
// within the debugger UI.

// Normally only five lines are visible (the current line, two above, 
//   and two below)

// The list() command (called without arguments) will display five
//  lines above and five below the current line

// An argument can be passed in to the command to specify the number 
// of lines to display above and below the current line. For example 
// list(8) would show the current line, eight lines above it, and eight 
// lines below it.