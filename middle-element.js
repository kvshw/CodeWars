// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
  // Find the middle number among the three elements
  const middle = triplet.slice(0); // Make a copy of the array
  middle.sort((a, b) => a - b); // Sort the copy in ascending order
  const middleNumber = middle[1]; // The middle number is at index 1 in the sorted array

  // Find the index of the middle number in the original array
  return triplet.indexOf(middleNumber);
}
