// Asymptotic Notation refers to the mathematical notation used to describe the
// running time of an algorithm when the input tends towards a particular value
// or a limiting value.

// Big O Notation
// Big O notation is used to describe the performance or complexity of an
// algorithm. Big O specifically describes the worst-case scenario, and can be
// used to describe the execution time required or the space used (e.g. in
// memory or on disk) by an algorithm.

// O(1) describes an algorithm that will always execute in the same time
// (or space) regardless of the size of the input data set.

// Example:
function doSomething(items) {
  console.log(items[0]);
  console.log(items[1]);
}
// The above function will always take a constant number of steps regardless of
// how many items are in the array. It will always just print the first two
// items in the array and then exit.

// O(N) describes an algorithm whose performance will grow linearly and in
// direct proportion to the size of the input data set. The example below also
// demonstrates how Big O favours the worst-case performance scenario; a matching
// string could be found during any iteration of the for loop and the function
// would return early, but Big O notation will always assume the upper limit
// where the algorithm will perform the maximum number of iterations.

// Example:
function contains(items, match) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === match) {
      return true;
    }
  }
  return false;
}
// The above function will iterate over the entire items array looking for a
// matching string. If a match is found, the function will return true, otherwise,
// it will return false. The worst-case scenario is that the match is not found,
// and the function needs to iterate over the entire array.

// O(N^2) represents an algorithm whose performance is directly proportional to
// the square of the size of the input data set. This is common with algorithms
// that involve nested iterations over the data set. Deeper nested iterations
// will result in O(N^3), O(N^4) etc.

// Example:
function containsDuplicates(items) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (i !== j && items[i] === items[j]) {
        return true;
      }
    }
  }
  return false;
}
// The above function will iterate over the entire items array looking for
// duplicate items. It will return true immediately if a duplicate is found,
// otherwise, it will return false after it has iterated over the entire array.
// The worst-case scenario is that there are no duplicates, and the function
// needs to iterate over the entire array. This will result in N*N iterations,
// or N^2.


// Big Omega Notation

// Big Omega notation is used to describe the best-case scenario for an algorithm,
// whereas Big O notation describes the worst-case scenario. It is possible to
// describe the best-case scenario using Big O notation, but this would provide
// no additional insight into the performance of the algorithm as we are
// generally interested in worst-case performance.

// Example:
function containsExample(items, match) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === match) {
      return true;
    }
  }
  return false;
}
// The above function will iterate over the entire items array looking for a
// matching string. If a match is found, the function will return true,
// otherwise, it will return false. The best-case scenario is that the match
// is found during the first iteration, and the function will return true.
// This would result in a Big Omega notation of Ω(1).


module.exports = {
  doSomething,
  contains,
  containsDuplicates
};
