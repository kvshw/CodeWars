// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

let bindingSize = 8;
function chessboard() {
  for (let i = 0; i <= bindingSize; i++) {
    let row = "";
    for (let j = 0; j < bindingSize; j++) {
      // Use conditional (ternary) operator to determine whether to place a space or a "#" at each position
      row += (i + j) % 2 === 0 ? " " : "#";
    }
    console.log(row);
  }
}
chessboard();
