//  We want to write a function reverseString(string) which takes in a string
//      and returns a new string with all characters in the reverse order.
//  This problem must be solved recursively.

// There is an error in the below code. We must use our debugging skills to fix this error.




// Debugging Steps:

// 1. Break the code out into multiple lines

// 2. console.log(); relevant values in a readable manner

// 3. Determine what values should be logged on to the screen before checking the output


function reverseString(string) {
    if(string.length === 0) {
        return string;
    }
    return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
}

const lilDog = 'race car';

console.log(reverseString(lilDog));
