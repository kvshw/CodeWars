// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  // Split the input string by spaces
  const words = inputString.split(" ");

  // The first word should contain the girl's age
  const ageWord = words[0];

  // Extract the age as an integer
  const age = parseInt(ageWord);

  return age;
}
