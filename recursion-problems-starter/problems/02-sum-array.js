/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

***********************************************************************/
let sumArray = (arr, total = 0) => {
  if (arr.length <= 0){
    return total
  } else {
    total += arr[0]
    let newArr = arr.slice(1)
    return sumArray(newArr, total)
  }
}
sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
