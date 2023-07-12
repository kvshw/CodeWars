// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i].toLowerCase(); // Convert the character to lowercase
    const repeatedChar = currentChar.repeat(i + 1); // Repeat the character i + 1 times
    const capitalizedChar =
      repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1); // Capitalize the first character
    result += capitalizedChar + "-"; // Append the modified character to the result string
  }

  result = result.slice(0, -1); // Remove the trailing hyphen
  return result;
}
