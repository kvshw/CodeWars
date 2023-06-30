// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  //Alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //Convert text into lowercase
  let lowerCaseText = text.toLowerCase();
  //Create result to add final one
  let result = "";
  //Create a loop
  for (let i = 0; i < lowerCaseText.length; i++) {
    // adding character to lowercase
    let char = lowerCaseText[i];
    // adding position by getting the index of char
    let position = alphabet.indexOf(char) + 1;

    if (position > 0) {
      result += position + " ";
    }
  }
  result = result.trim();

  return result;
}
