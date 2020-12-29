/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:
*/
function flatten(array) {
  return array.reduce((acc, item) => {
 if (Array.isArray(item)){
  return acc.concat(flatten(item)) }
    return acc.concat(item)
  }, []);
}
console.log(flatten([1,2,[5]])); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
