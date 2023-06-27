// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  const charCount = {};
  const result = [];

  // Count the occurrences of each character, ignoring case
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Convert the word to the encoded string
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (charCount[char] > 1) {
      result.push(")");
    } else {
      result.push("(");
    }
  }

  return result.join("");
}
