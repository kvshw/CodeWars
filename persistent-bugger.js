// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  //if num is smaller than 10 returning only 0
  if (num < 10) {
    return 0;
  }
  //creating a variable that will store multiplication of numbers
  let mulNum = 1;
  //this is converting number into string
  let numString = num.toString();
  //checking if the length of num is not equal to 1
  if (num.toString().length !== 1) {
    //multiplication is added to mulNum
    for (let i = 0; i < numString.length; i++) {
      mulNum *= Number(numString[i]);
    }
  }

  return 1 + persistence(mulNum);
}
