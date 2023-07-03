// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  // Convert decimal inputs to binary strings
  if (typeof a === "number") {
    a = a.toString(2);
  }
  if (typeof b === "number") {
    b = b.toString(2);
  }

  let sum = parseInt(a, 2) + parseInt(b, 2);
  let binarySum = sum.toString(2);
  return binarySum;
}
