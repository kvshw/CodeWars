// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  // Use a regular expression to insert a space before every uppercase letter
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}
