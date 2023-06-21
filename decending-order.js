// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  if (n !== 0) {
    // Convert number to string and then to array of digits
    const digits = Array.from(String(n), Number);
    // Sort the digits in descending order
    digits.sort((a, b) => b - a);
    // Convert the sorted digits array back to a string
    const result = digits.join("");
    // Convert the string to an integer and return
    return parseInt(result);
  }
  // Special case when the input is 0
  return 0;
}
