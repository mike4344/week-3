//  We want to write a function recursiveRange(num1, num2) which takes two numbers,
//    and returns an array of all integers between the two numbers (inclusive). This
//    This should be an inclusive range.
//  This problem must be solved recursively.


// Repeating pattern
//  incrementing from smaller numbner to larger number

// Where does the pattern break or change
//  when we reach the larger number

// Base Case
//  if num1 == num2 then return the array

// Recursive Case
//  if(num1 < num2) increment

// Recrusive Step
//  recursiveRange(num1+1, num2)


function recursiveRange(num1, num2) {
    if(num1 === num2){ // base case
        return [num2];
    } else if (num1 > num2){
       return recursiveRange(num2, num1);
    }

    let range = [num1];
    range = range.concat(recursiveRange(num1 + 1, num2)); // recursive step

    return range;
}

console.log(recursiveRange(1, 7));



// recursiveRange(num1, num2);   // 1st frame,   num1 = ,   num2 =
// recursiveRange(num1, num2);   // 2nd frame,   num1 = ,   num2 =
// recursiveRange(num1, num2);   // 3rd frame,   num1 = ,   num2 =
// recursiveRange(num1, num2);   // 4th frame,   num1 = ,   num2 =
// recursiveRange(num1, num2);   // 5th frame,   num1 = ,   num2 = ,  returns ,    popped off the stack
// 4th frame,     return from 5th frame = ,    returns ,     popped off the stack
// 3rd frame,     return from 4th frame = ,    returns ,     popped off the stack
// 2nd frame,     return from 3rd frame = ,    returns ,     popped off the stack
// 1st frame,     return from 2nd frame = ,    returns ,     popped off the stack
// Final return value:







// function rangeOfNumbers(num1, num2) {
//     if (num1 - num2 == 0) {
//         return [num1];
//     } else if (num1 <= num2) {
//         var nums = rangeOfNumbers(num1, num2 - 1);
//         nums.push(num2);
//         return nums;
//     }
// };
