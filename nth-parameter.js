// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  //convert n into number
  n = Number(n);
  // getting the sum using sum variable and first set it to 0
  let sum = 0;
  // cheeck if n == 0
  if (n !== 0) {
    // Iterating n times
    for (let i = 1; i <= n; i++) {
      // adding sum
      sum += 1 / (3 * i - 2);
    }
    // getting only 2 decimal points
    sum = sum.toFixed(2);
    // returning the sum
    return sum;
  } else {
    return "0.00";
  }
}
