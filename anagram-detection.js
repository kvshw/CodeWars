// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function (test, original) {
  // Convert both input strings to lowercase
  const testLowerCase = test.toLowerCase();
  const originalLowerCase = original.toLowerCase();

  // Sort the characters in both strings and compare them
  const sortedTest = testLowerCase.split("").sort().join("");
  const sortedOriginal = originalLowerCase.split("").sort().join("");

  return sortedTest === sortedOriginal;
};
