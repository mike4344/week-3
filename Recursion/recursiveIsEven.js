//  We want to write a function recursiveIsEven(num) which takes a number,
//    and returns true if num is even, false otherwise.
//  This problem must be solved recursively.


// Repeating pattern
//      not recursive: num % 2 === 0
// mod(%) shows us remainders from division
// repeated subtraction

// Where does the pattern break or change
//  if num > 0, when num < 2
//  if num < 0, num > -2

// Base Case
//  if (num >= 0 && num <= 2) if else (num <= 0 && num >= -2)

// Recursive Case
// if (num < -2 || num > 2)

// Recursive Step
// if (num > 2) then recuresiveIsEven( num - 2)
// ifn(num < 2) then recuresiveIsEven( num + 2)


// function recursiveIsEven(num) {
//     if(num < 0){                        // if num is negative
//         num = num * -1;
//     }

//     if (num < 2) {                      // base case
//         return num === 0;
//     }

//     return recursiveIsEven(num - 2)     // recursive step
// }
// console.log(recursiveIsEven(-8));
let div = (num, divisor, i = 0) =>{
    
    if (num === 0) {
    return i
    }else if (num < 0){
        return `${i - 1} with the remainder of ${divisor - num * -1}`
    }
    else{
    i++
     return div(num - divisor, divisor,i )
    }
}
console.log(div(10,1))
// recursiveIsEven(num);   // 1st frame,   num =
// recursiveIsEven(num);   // 2nd frame,   num =
// recursiveIsEven(num);   // 3rd frame,   num =
// recursiveIsEven(num);   // 4th frame,   num =
// recursiveIsEven(num);   // 5th frame,   num = ,  returns ,    popped off the stack
// 4th frame,     return from 5th frame = ,    returns ,     popped off the stack
// 3rd frame,     return from 4th frame = ,    returns ,     popped off the stack
// 2nd frame,     return from 3rd frame = ,    returns ,     popped off the stack
// 1st frame,     return from 2nd frame = ,    returns ,     popped off the stack
// Final return value:
