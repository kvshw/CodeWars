// Simple, given a string of words, return the length of the Longest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  //Split the Array at " "
  let splittedArray = s.split(" ");
  //Setting shortest as the first item in the splitted array
  let longest = splittedArray[0].length;

  for (let i = 0; i < splittedArray.length; i++) {
    // if the length is shorter than shortest one it will be added as the shortest string
    if (splittedArray[i].length > longest) {
      // replace the shortest
      longest = splittedArray[i].length;
    }
  }
  // return shortest
  return longest;
}
