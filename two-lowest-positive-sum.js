// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let lowest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  const index = numbers.indexOf(lowest);
  if (index > -1) {
    // only splice array when item is found
    numbers.splice(index, 1); // 2nd parameter means remove one item only
  }

  let secondLowest = numbers[0];
  for (let j = 1; j < numbers.length; j++) {
    if (numbers[j] < secondLowest) {
      secondLowest = numbers[j];
    }
  }
  return lowest + secondLowest;
}
