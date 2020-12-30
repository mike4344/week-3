// The call stack is a structure that JavaScript uses 
//   to keep track of the evaluation of function calls.
// It uses the stack data structure.
// When a function is called, a new frame is pushed onto the stack.
// When a function returns, the frame on the top of the stack is 
//   popped off the stack.

// Three key points to take away:
//  1. The frame on the top of the stack corresponds to the function 
//     currently being executed
//  2. Calling a function will push a new frame to the top of the stack
//  3. Returning from a function will pop the top frame from the stack



function foo(){
    console.log('a');
    bar();
    console.log('e');
}

function bar() {
    console.log('b');
    baz();
    console.log('d');
}

function baz() {
    console.log('c');
}

foo();