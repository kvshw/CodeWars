var isSquare = function (n) {
  if (n < 0) {
    // Negative numbers are not square numbers
    return false;
  }

  var sqrt = Math.sqrt(n); // Calculate the square root of the number
  return sqrt === Math.floor(sqrt); // Check if the square root is an integer
};
