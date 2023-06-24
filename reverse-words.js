// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let splitArray = str.split(" ");
  let reversedArray = [];

  for (let i = 0; i < splitArray.length; i++) {
    let word = splitArray[i];
    let reversedWord = "";

    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }

    reversedArray.push(reversedWord);
  }

  return reversedArray.join(" ");
}
