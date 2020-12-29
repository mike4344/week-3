/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.
***********************************************************************/
function range(num1, num2) {
  if (num1 >= num2){
     return [];
  }
  let range1 = [num1];
  range1 = range1.concat(range(num1 + 1, num2))
  return range1;
}

console.log(range(1, 5)); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
