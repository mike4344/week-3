// The Call Stack
//    A call stack is a stack data structure that stores information about the 
//      active functions and procedures of a computer program. 
//    Each time we invoke a function, that invocation will be added to the call stack.
//    A function or procudure cannot be popped off the call stack until it has
//      been completed.
//    This means, each time we invoke a function recursively, 
//      that recursive call will be added to the stack.
//    The first time we will return is when we hit our base case.
//    Each function call can then receive a return value and be 
//      popped off the stack one at a time until we finally can resolve
//      the return value for our initial function call.






// Visual example of the call stack:
//    https://www.cs.usfca.edu/~galles/visualization/RecFact.html





function echo(word) {                   // 
  if (word.length > 1) {                // 
    console.log(word.toUpperCase());    // 

    let newWord = word.slice(1);        // 
    let response = echo(newWord);       // 

    console.log(response);              // 
    return word;                        // 
  } else {                              // 
    console.log(word.toUpperCase());    // 
    return word;                        // 
  }
}


echo('camp');    // 1st frame,   word = ,  logs ,    newWord = 
// echo();   // 2nd frame,   word = ,   logs ,     newWord = 
// echo();    // 3rd frame,   word = ,    logs ,      newWord = 
// echo();    // 4th frame,   word = ,     logs ,       returns ,    popped off the stack
// 3rd frame,     continues past line 34,       returns ,   popped off the stack
// 2nd frame,     continues past line 34,       returns ,  popped off the stack
// 1st frame,     continues past line 34,       returns , popped off the stack
