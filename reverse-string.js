// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  //creating a string for storing the reversed word
  let reversedWord = "";
  // iterating the str starting behind
  for (let i = str.length - 1; i >= 0; i--) {
    // adding reversed char to the word
    reversedWord += str[i];
  }
  // returnin revesedWord outside of the loop
  return reversedWord;
}
solution("world");
