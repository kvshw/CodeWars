// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x) {
  //creating a variable called result to add the final result of the converstion
  let result = "";
  //going through the loop to get one string at a time.
  for (i = 0; i < x.length; i++) {
    //Convert them all into Numbers using parseInt
    let convString = parseInt(x[i]);
    //Checking wheather the number is higher or lower than 5
    if (x[i] >= 5) {
      result += 1;
    } else {
      result += 0;
    }
  }
  // return the result outside of the for loop
  return result;
}

fakeBin("45385593107843568");
