// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  //Creating a variable called sum and giving it 0
  let sum = 0;
  //Checking if array is not a empty array
  if (array.length !== 0) {
    //itereate through the array and get it to add array[i] to sum in each iteration.
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }
    //if the sum dividable by 2 it's a even
    if (sum % 2 == 0) {
      return "even";
    }
    //if not it's a Odd
    else {
      return "odd";
    }
  }
  //if it's a empty array return even
  else {
    return "even";
  }
}
