// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  let convertNum = n.toString();
  console.log(typeof convertNum);

  const splittedNumber = convertNum.split("");
  console.log(splittedNumber);

  const reverseArray = [];
  for (let i = splittedNumber.length - 1; i >= 0; i--) {
    reverseArray.push(parseInt(splittedNumber[i])); // Convert each digit back to a number before pushing to the array
  }

  return reverseArray;
}
