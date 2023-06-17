// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //getting the counts of x and o
  let countx = 0;
  let counto = 0;
  //Iterating through str
  for (let i = 0; i < str.length; i++) {
    // Making all to Lower Case
    let char = str[i].toLowerCase();
    //Counting the o's in char
    if (char == "o") {
      counto += 1;
    }
    //counting the x's in char
    else if (char == "x") {
      countx += 1;
    }
  }
  return countx === counto;
}
